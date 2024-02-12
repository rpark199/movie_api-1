const http = require("http"),
  fs = require("fs"),
  url = require("url");
path = require("path");

http
  .createServer((request, response) => {
    let addr = request.url,
      q = new URL(addr, "http://" + request.headers.host),
      filePath = "";

    fs.appendFile(
      "log.txt",
      "URL: " + addr + "\nTimestamp: " + new Date() + "\n\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Added to log.");
        }
      }
    );

    if (q.pathname.includes("documentation")) {
      filePath = __dirname + "/documentation.html";
    } else if (q.pathname.includes("css")) {
      filePath = __dirname + q.pathname;
    } else if (q.pathname.includes("js")) {
      filePath = __dirname + q.pathname;
    } else if (q.pathname.includes("img")) {
      filePath = __dirname + q.pathname;
    } else if (q.pathname.includes("ico")) {
      filePath = __dirname + q.pathname;
    } else if (q.pathname === "/") {
      filePath = "index.html";
    } else {
      filePath = __dirname + q.pathname;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.writeHead(404);
        response.end(JSON.stringify(err));
        return;
      }
      if (filePath.includes("css")) {
        response.writeHead(200, { "Content-Type": "text/css" });
        response.write(data);
        response.end();
      } else if (filePath.includes("img")) {
        response.writeHead(200, { "Content-Type": "image/png" });
        response.write(data);
        response.end();
      } else if (filePath.includes("js")) {
        response.writeHead(200, { "Content-Type": "text/javascript" });
        response.write(data);
        response.end();
      } else if (filePath.includes("ico")) {
        response.writeHead(200, { "Content-Type": "image/image/vnd.microsoft.icon" });
        response.write(data);
        response.end();
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      }
    });
  })
  .listen(8080);
console.log("My test server is running on Port 8080.");
