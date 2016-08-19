import React from 'react';

import './../styles/header.scss';

const Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <h1 className="header__title">Color Palette</h1>
        <div className="header__info">
          <p>Click on color or Select to copy color value</p>
          <p>Change color type with radiobuttons</p>
          <p>Change color value with Change button</p>
          <p>Add more colors and remove colors</p>
        </div>
      </div>
    )
  }
});

export default Header;
