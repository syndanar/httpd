const http = require("http");
const { URL } = require('url');
const fs = require("fs");

const app = {};

app.httpd = new (require('./lib/httpd/httpd.js'))();

module.exports = httpd;
