const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });
const express = require("express");
const app = express();
const URL = 'http://blog.oscarmorrison.com/nightmarejs-on-heroku-the-ultimate-scraping-setup/';
console.log('Welcome to Nightmare scrape\n==========');

// nightmare
//     .goto(URL)
//     .wait('.post-title')
//     .evaluate(() => document.querySelector('.post-title').textContent)
//     .end()
//     .then((result) => {
//         console.log(result);
//         console.log('=========\nAll done');
//     })
//     .catch((error) => {
//         console.error('an error has occurred: ' + error);
//     })
//     .then(() => (console.log('process exit'), process.exit()));

    app.get("/", (req, res) => {
        res.json({ message: "Welcome to Article application." });
        nightmare
    .goto(URL)
    .wait('.post-title')
    .evaluate(() => document.querySelector('.post-title').textContent)
    .end()
    .then((result) => {
        console.log(result);
        console.log('=========\nAll done');
    })
    .catch((error) => {
        console.error('an error has occurred: ' + error);
    })
    .then(() => (console.log('process exit'), process.exit()));
      });
      
const port = process.env.PORT || 5000;
// listen for requests
app.listen(port, () => console.log(`Listening on port ${port}`));