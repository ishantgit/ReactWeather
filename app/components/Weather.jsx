var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    debugger;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(errorMessage){
      this.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function(){
    var {temp,location,isLoading} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3>Featching weather...</h3>
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }
    return(
      <div>
        <h2>Weather component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
