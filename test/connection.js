const mongoose = require("mongoose");

// connect to mongoDB

mongoose.connect(`mongodb://localhost/test`);

mongoose.connection
  .once("open", function () {
    console.log("Connection has been made");
  })
  .on("error", function (error) {
    console.log(`Connection error ${error}`);
  });
