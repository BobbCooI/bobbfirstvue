const express = require('express');
const app = express();
const db = require('../db/mongoose.js');
const auth = require('./api/auth.js');
const path = require('path');
db.connector();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// PWAs want HTTPS!
function checkHttps(request, response, next) {
  // Check the protocol — if http, redirect to https.
  if (request.get("X-Forwarded-Proto").indexOf("https") != -1) {
    return next();
  } else{ 
    response.redirect("https://" + request.hostname + request.url);
  }
}

app.all("*", checkHttps);

app.use('/api', auth);

// Express port-switching logic
let port;

console.log("❇️ NODE_ENV is", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  port = process.env.PORT || 3000;
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
  console.log("⚠️ Not seeing your changes as you develop?");
  console.log(
    "⚠️ Do you need to set 'start': 'npm run development' in package.json?"
  );
}

// Start the listener!
const listener = app.listen(port, () => {
  console.log("❇️ Express server is running on port", listener.address().port);
});

//app.listen(port, () => {console.log(`App listening at http://localhost:${port}!`);});

