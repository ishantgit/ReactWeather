var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are few examples</p>
        <ol>
          <li>
            <Link to="/?location=delhi">delhi</Link>
          </li>
          <li>
            <Link to="/?location=bangalore">bangalore</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
