import React from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
import Footer from "./app/components/Footer";
import Page from "./app/components/Page";

import LoadingDotsIcon from "./app/components/LoadingDotsIcon";

function Shell() {
  return (
    <Page>
      <div className="py-5 my-5 text-center">
        <LoadingDotsIcon />
      </div>
      <Footer />
    </Page>
  );
}

const startOfHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="public/favicon.ico" />
    <title>Zack Finnegan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />

    <link rel="stylesheet" href="/main.css" />
    <script defer src="/bundled.js"></script>
  </head>
  <body>
    <div id="app">`;

const endOfHTML = `</div>
    </body>
  </html>`;

/* Use Node tools (outside the scope of this course) to setup a
  stream we can write to that saves to a file on our hard drive
*/
const fileName = "./app/index-template.html";
const writeStream = fs.createWriteStream(fileName);

// Add the start of our HTML template to the stream
writeStream.write(startOfHTML);

/*
  Add the actual React generated HTML to the stream.
  We can use ReactDomServer (you can see how we imported
  that at the very top of this file) to generate a string
  of HTML text that a Node stream can leverage.
*/
const myStream = ReactDOMServer.renderToPipeableStream(<Shell />, {
  onAllReady() {
    myStream.pipe(writeStream);
    // End the stream with the final bit of our HTML
    writeStream.end(endOfHTML);
  },
});
