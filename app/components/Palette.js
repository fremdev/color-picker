import React from 'react';
const colors = ['#ffaaaa', '#ffffff', '#0000ff'];

import Color from './Color';

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
    var stateClass = (this.state.selectedColor === index) ? ' active' : '';
    return <Color key={index} color={color} colorNum={index} selectColor={this.selectColor} changeColor={this.changeColor} stateClass={stateClass} />;
  },
  // updateBackground: function() {
  //   document.getElementsByTagName('body')[0].style.backgroundColor = this.state.colors[this.state.selectedColor]
  // },
  render: function() {
    return (
      <div>{this.state.colors.map(this.renderColors)}

      </div>
    )
  }
});

export default Palette;
