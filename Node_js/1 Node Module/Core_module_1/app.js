
/*
FS

Node.js as a File Server
The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the require() method:


Common use for the File System module:

Read files 	 The fs.readFile() method is used to read files on your computer.
Create files
Update files
Delete files
Rename files

*/

var fs=require('fs');  // import core module
fs.writeFileSync('myresume.doc', 'My name is Andrew.') // It creates a new file if the specified file does not exist. 
//fs.appendFileSync('demo.txt','Hi in am first created file by fs Core module'); //synchronously append the given data to a file. A new file is created if it does not exist.
