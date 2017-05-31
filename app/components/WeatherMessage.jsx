var React = require('react');
//can use arrow function if only render is there
var WeatherMessage = (props) => ({
  render: function(){
    return(
      <h3>It is {this.props.temp} in {this.props.location}</h3>
    )
  }
});

module.exports = WeatherMessage;
