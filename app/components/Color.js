import React from 'react';

import './../styles/color.scss';

const Color = React.createClass({
  changeColor: function() {
    var pickedColor = this.refs.pickedColor.value;
    var colorNum = this.props.colorNum;
    this.props.changeColor(pickedColor, colorNum);
  },
  render: function() {
    return (
      <div>
        <div><p>Color will be here {this.props.color}</p></div>
        <label className="color-picker__label">Pick Color<input ref="pickedColor" className="color-picker__input" type="color" defaultValue="#ffcccc" onChange={this.changeColor} /></label>
        <button onClick={this.props.selectColor.bind(null, this.props.colorNum)}>Select color</button>
      </div>
    )
  }
});

export default Color;
