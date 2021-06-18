var http = require('http');
const express = require("express"),
    app = express();
var tmp =0;


http.createServer(function (req, res) {  
var receivedText="";

let request = http.get('http://58af0692ea1c.mylabserver.com:30081/api/v1/status/tsdb', (res2) => {
    if (res2.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res2.resume();
        return;
    }

    let data = '';

    res2.on('data', (chunk) => {
        data += chunk;
    });

    res2.on('close', () => {
        console.log('Retrieved all data');
        //console.log(JSON.parse(data));
        //receivedText = JSON.parse(data);
        console.log(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
        //return data;
    });
});

 
/*request.on('error', (err) => {
    console.error(`Encountered an error trying to make a request: ${err.message}`);
});*/
tmp ++;
//res.write(receivedText);
//res.end('Hello World!'+ tmp );
//res.writeHead(200, { 'Content-Type': 'application/json' });
//console.log("* "+request);
//res.end(receivedText);
}).listen(3006);

