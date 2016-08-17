import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render: function() {
    return (
      <div>My app!</div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
