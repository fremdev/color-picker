import React from 'react';

import {hexToRgb} from './../helpers';
import './../styles/color.scss';

import Clipboard from 'clipboard';
new Clipboard('.btn--select');
new Clipboard('.color-picker__preview');


const Color = React.createClass({
  getInitialState: function() {
    return {
      colorType: 'hex'
    }
  },
  changeColor: function() {
    var pickedColor = this.refs.pickedColor.value;
    var colorNum = this.props.colorNum;
    this.props.changeColor(pickedColor, colorNum);
  },
  handleColorTypeChange: function(e) {
    this.setState({colorType: e.currentTarget.value});
  },
  handleColorClick: function() {
    this.props.selectColor(this.props.colorNum);
  },
  render: function() {
    var colorPreviewStyle = {
      backgroundColor: this.props.color
    }
    const hexColor = this.props.color;
    const rgbColor = hexToRgb(hexColor.slice(1));
    const colorNum = this.props.colorNum;
    const clipboardColor = (this.state.colorType === 'hex') ? hexColor : rgbColor;
    return (
      <div className={"color-picker" + this.props.stateClass} >
        <div className="color-picker__preview" style={colorPreviewStyle} onClick={this.handleColorClick} data-clipboard-text={clipboardColor}>
        </div>
        <div className="color-picker__info">
          <div className="color-picker__type">
            <label>
              <input type="radio" name={"copytype" + colorNum} value="hex" defaultChecked id="hex-radio" onChange={this.handleColorTypeChange} />{hexColor}
            </label>
            <label>
              <input type="radio" name={"copytype" + colorNum} value="rgb" id="rgb-radio" onChange={this.handleColorTypeChange} />{rgbColor}
            </label>
          </div>
          <div className="color-picker__buttons">
            <label className="color-picker__label btn">
              Change
              <input ref="pickedColor" className="color-picker__input btn" type="color" defaultValue={hexColor} onChange={this.changeColor} />
            </label>
            <button data-clipboard-text={clipboardColor} className="btn btn--select" onClick={this.handleColorClick}>Select</button>
          </div>
        </div>
        <button className="btn btn--del" onClick={this.props.deleteColor.bind(null, this.props.colorNum)}>x</button>
      </div>
    )
  }
});

export default Color;
