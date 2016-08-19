import React from 'react';

import Header from './Header';
import Palette from './Palette';
import './../styles/app.scss';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Palette />
      </div>
    )
  }
});

export default App;
