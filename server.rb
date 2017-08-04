require 'sinatra'
require_relative 'models/thermostat.rb'

set :public_folder, proc{File.join(root)}

get '/time' do
  headers 'Access-Control-Allow-Origin' => '*'
  {time:Time.now.to_s}
end


post '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  @thermostat = Thermostat.add(params[:temperature])
end

get '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  {:temperature => @thermostat.temperature }.to_json
end
