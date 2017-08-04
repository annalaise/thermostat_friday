$(document).ready(function() {
  var thermostat = new Thermostat();


  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=daf41bb7aaab3c1e708dd343d71919fc';
    var units = '&units=metric';
      $.get(url + token + units,function(data){
        $('#outside-temperature').text(data.main.temp);
      })
  }

  displayWeather('London');

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })


  $('#temperature').text(thermostat.temperature());

  $('#temperature-up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature());
    updateTemperature();
    saveTemperature();
  });

  $('#temperature-down').on('click',function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature());
    updateTemperature();
  });

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.temperature());
  });

  $('#powersaving-off').on('click', function(){
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('OFF');
  });

  $('#powersaving-on').on('click', function(){
    thermostat.powerSavingModeOn();
    $('#power-saving-status').text('ON');
  });

  $('#temperature').on('change', function(){
    $('#snowstorm').toggle(this.temperature() < 18);
  });

  function updateTemperature() {
    $('#temperature').attr('class', thermostat.getEnergyUsage());
    if(thermostat.temperature() === 18) {
      snowstorm.toggleSnow();
    } else if (thermostat.temperature() === 25) {
      $('#fire').show();
      $('#fire').fire({
        mode:'anim',
        speed:20,
        maxPow:5,
        gravity:0,
        flameWidth:3,
        flameHeight:10,
        fireTransparency:80,
        fadingFlameSpeed:8
      });
    }
  };

  function saveTemperature() {
  $.post( "localhost:4567/temperature", {temperature: thermostat.temperature()});
}

});
