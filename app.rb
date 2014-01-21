require 'rubygems'
require 'sinatra'

set :public_folder, 'public'

get '/' do
    haml :app
end