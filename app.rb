require "./lib/init"

set :root, File.dirname(__FILE__)

get "/" do
  File.read(File.join('public', 'index.html'))
end

get "/favicon.ico" do
  ""
end

get "/days" do
  sleep 3
  erb :days, :layout => false
end

get "/month.json" do
  content_type "application/json"
  [ {"title"=>"April", "quantity"=> 18},
    {"title"=>"May",   "quantity"=> 5},
    {"title"=>"June",  "quantity"=> 28}
  ].to_json
end

post "/sessions" do
  if params[:username].downcase == "a" && params[:password].downcase == "a"
    content_type "application/json"
    return ["ok"].to_json
  else
    error 406, nil
  end
end

get "/production.manifest" do
  content_type "text/cache-manifest"
  File.read(File.join("public", "production.manifest")) 
end

