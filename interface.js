$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#fire').fire({mode:'anim'});

  $('#temperature').text(thermostat.temperature());

  $('#temperature-up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature());
    updateTemperature();
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
    $('#power-saving-status').text('off');
  });

  $('#powersaving-on').on('click', function(){
    thermostat.powerSavingModeOn();
    $('#power-saving-status').text('on');
  });

  $('#temperature').on('change', function(){
    $('#snowstorm').toggle(this.temperature() < 18);
  });

  function updateTemperature() {
    $('#temperature').attr('class', thermostat.getEnergyUsage());
    if(thermostat.temperature() === 18){
      snowstorm.toggleSnow();
    } else if (thermostat.temperature() === 25) {

    }
  }

  $('#fire').fire({
		speed:20,
		maxPow:5,
		gravity:0,
		flameWidth:3,
		flameHeight:0,
		fadingFlameSpeed:8
	});

});
