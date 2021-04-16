/*
Using NodeJS

const hostname = "127.0.0.1";
const http = require('http');
const port = "8080";
const mySuperheros = require("superheroes");

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end("hello");
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
  });

console.log(mySuperheros.all);
*/

//express
const { response } = require('express');
const express = require('express');
const expApp = express();
const mySuperheros = require('superheroes');

expApp.get("/", function (request, response) {
	response.send(mySuperheros.random());
});

expApp.get("/contact", (req, res) => {
	res.send("contact me at keshav9480@gmail.com");
  })

expApp.get("/about", (req, res) => {
res.send("Professional Developer");
});

expApp.listen(8080, (req, res) => {
	console.log("server running at port 8080");
});

