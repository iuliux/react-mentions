var React = require("react");

module.exports = React.createClass({

  displayName: "Header",

  render: function() {
    return (
      <div className="header">
        <div className="navbar navbar-fixed-top">
          <div className="container">

            { this.renderNavigation() }

            <h1>
              React Mentions
              <small>
                Brought to you by <a href="http://www.effektif.com">Effektif</a>
              </small>
            </h1>
          </div>
        </div>
      </div>
    );
  },

  renderNavigation: function() {
    return (
      <nav>
        <ul className="nav nav-pills pull-right">
          <li>
            <a href="#examples">Examples</a>
          </li>
          <li>
            <a href="#license">License</a>
          </li>
        </ul>
      </nav>
    );
  }
  
});
