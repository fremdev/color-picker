import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import colors from './../colors';
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
      <CSSTransitionGroup
        className="palette"
        component="div"
        transitionName="palette"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={100}>
        {this.state.colors.map(this.renderColors)}
        <button className="btn palette__add-color" onClick={this.addColor}><div className="icon">+</div></button>
      </CSSTransitionGroup>
    )
  }
});

export default Palette;
