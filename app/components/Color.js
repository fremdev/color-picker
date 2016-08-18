import React from 'react';

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
    return (
      <div className={"color-picker" + this.props.stateClass} >
        <div className="color-picker__info" style={colorPreviewStyle}>
          <p>Color will be here {this.props.color}</p>
        </div>
        <label className="color-picker__label">Change Color<input ref="pickedColor" className="color-picker__input" type="color" defaultValue="#ffcccc" onChange={this.changeColor} /></label>
        <button onClick={this.props.selectColor.bind(null, this.props.colorNum)}>Select color</button>
      </div>
    )
  }
});

export default Color;
