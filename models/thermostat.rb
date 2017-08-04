class Thermostat

  attr_reader :temperature

  def initialize(temperature)
    @temperature = temperature
  end

  def self.add(temperature)
    @thermostat = Thermostat.new(temperature)
  end

  def self.instance
    @thermostat
  end

end
