/*
http : 

The http core module is a built-in library in Node.js that provides the foundational
functionality for creating web servers and making HTTP requests, 
forming the backbone of most Node.js web applications and APIs. 

It allows developers to transfer data over the Hypertext Transfer Protocol 
(HTTP) without any external dependencies.

http.createServer().listen.port(3000);

http : createServer   => create server 
		writeHead(): we can send any type of data in that server
		write(): we can add any content on server
		end() : script close

*/
var http = require('http');  // import core module

http.createServer((req,resp)=>{
		
	resp.writeHead(200, { 'Content-Type': 'text/html' });
	//resp.write('<h1>Hi i am http module server </h1>')	
	resp.write(JSON.stringify({name:"raj",age:31,mobile:"1234567891"})); // obj to json
	resp.end();
	
}).listen(5000);
