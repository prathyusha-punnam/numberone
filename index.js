const http=require("http");

http.createServer((req,res)=>{
    res.write("hello !");
    res.write(JSON.stringify({id:1, name: "John"}));
    res.end();
}).listen(8090);