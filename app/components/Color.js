import React from 'react';

const Color = React.createClass({
  render: function() {
    return (
      <div>
        Color will be here {this.props.color}
        <button onClick={this.props.selectColor.bind(null, this.props.colorNum)}>Select color</button>
      </div>
    )
  }
});

export default Color;
