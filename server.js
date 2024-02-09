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
    } else if (q.pathname === "/") {
      filePath = "index.html";
    } else {
      // Serve static files from a 'public' folder or directly from the root.
      // You might need to adjust the path depending on your project structure.
      filePath = __dirname + q.pathname;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.writeHead(404);
        response.end(JSON.stringify(err));
        return;
      }

      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  })
  .listen(8080);
console.log("My test server is running on Port 8080.");
