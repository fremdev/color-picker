import React from 'react';
import ReactDOM from 'react-dom';

import Palette from './components/Palette';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <p>From App</p>
        <Palette />
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
