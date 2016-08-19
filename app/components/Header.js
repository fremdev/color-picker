import React from 'react';

import './../styles/header.scss';

const Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <div className="title-block">
          <h1 className="title-block__title">Color Palette</h1>
          <div className="title-block__author"><a href="https://twitter.com/fremdev">by fremdev</a></div>
        </div>
        <div className="header__info">
          <p>Click on a color or Select to copy color value</p>
          <p>Change color type with radiobuttons</p>
          <p>Change color value with Change button</p>
          <p>Add more colors and remove colors</p>
        </div>
      </div>
    )
  }
});

export default Header;
