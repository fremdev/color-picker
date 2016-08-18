import React from 'react';
const colors = ['#ffaaaa', '#ffccff', '#0000ff'];


import Color from './Color';
import getRandomColor from './../helpers';
import './../styles/palette.scss';

const Palette = React.createClass({
  getInitialState: function() {
    return {
      colors: [],
      selectedColor: ''
    }
  },
  componentDidMount: function() {
    this.setState({colors: colors, selectedColor: 0});
  },
  selectColor: function(color) {
    this.setState({selectedColor: color});
  },
  changeColor: function(colorValue, colorNum) {
    this.state.colors[colorNum] = colorValue;
    this.setState({colors: this.state.colors, selectedColor: colorNum});
  },
  renderColors: function(color, index) {
    var stateClass = (this.state.selectedColor === index) ? ' color-picker--active' : '';
    return <Color key={index} color={color} colorNum={index} selectColor={this.selectColor} changeColor={this.changeColor} stateClass={stateClass} deleteColor={this.deleteColor} />;
  },
  addColor: function() {
    const newColor = getRandomColor();
    this.state.colors.push(newColor);
    this.setState({colors: this.state.colors});
  },
  deleteColor: function(colorNum) {
    this.state.colors.splice(colorNum, 1);
    this.setState({colors: this.state.colors});
  },
  render: function() {
    return (
      <div className="palette">
        {this.state.colors.map(this.renderColors)}
        <button className="btn palette__add-color" onClick={this.addColor}><div className="icon">+</div></button>
      </div>
    )
  }
});

export default Palette;
