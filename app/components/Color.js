import React from 'react';

import {hexToRgb} from './../helpers';
import './../styles/color.scss';

const Color = React.createClass({
  changeColor: function() {
    var pickedColor = this.refs.pickedColor.value;
    var colorNum = this.props.colorNum;
    this.props.changeColor(pickedColor, colorNum);
  },
  render: function() {
    var colorPreviewStyle = {
      backgroundColor: this.props.color
    }
    const hexColor = this.props.color;
    const rgbColor = hexToRgb(hexColor.slice(1));
    return (
      <div className={"color-picker" + this.props.stateClass} >
        <div className="color-picker__preview" style={colorPreviewStyle}>
        </div>
        <div className="color-picker__info">
          <p>Hex color: {hexColor}</p>
          <p>RGB color: {rgbColor}</p>
          <label className="color-picker__label btn">Change Color<input ref="pickedColor" className="color-picker__input btn" type="color" defaultValue="#ffcccc" onChange={this.changeColor} /></label>
          <button className="btn" onClick={this.props.selectColor.bind(null, this.props.colorNum)}>Select color</button>
        </div>
      </div>
    )
  }
});

export default Color;
