require 'webrick'
require 'cucumber'
require 'cucumber/rake/task'

Cucumber::Rake::Task.new

task :default => ["cuke"]

task :cuke do
  
  # startup WEBRick in it's own thread so we can kill it later
  server = WEBrick::HTTPServer.new(:Port => 4567, :DocumentRoot => "#{Dir.pwd}/source")
  webrick = Thread.new(server) do |s| 
    s.start
  end
  
  # run the cukes
  Rake::Task["cucumber"].invoke
  
  # kill WEBRick
  server.stop
  webrick.join 10
  
end
