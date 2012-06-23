require './lib/init'

desc "Run the server"
task :server do
  system "rackup config.ru -p 3000"
end

desc "Environment stub for compatibility"
task :environment do
  
end

desc "Interact with code in IRB."
task :console do
  exec "irb -Ilib -rinit"
end
