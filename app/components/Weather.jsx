var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModel = require('ErrorModel');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    // debugger;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(e){
      console.log(e.message);
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
      alert(e);
    });
  },
  render: function(){
    var {temp,location,isLoading,errorMessage} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3>Featching weather...</h3>
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return(
          <ErrorModel message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <h2 className="text-center page-title">Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
