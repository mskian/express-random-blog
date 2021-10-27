const express = require('express');
const matter = require('gray-matter');
const md = require("markdown-it")();
const fs = require('fs')
//const apicache = require("apicache");

const app = express();
const port = 4002;
//const cache = apicache.middleware

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './blog');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.listen(port, function() {
    console.log('listening on port ' + port);
});

app.get('/', function(req, res) {

    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.render("index")

});

app.get("/:article", (req, res) => {

    const getfile = (__dirname + '/blog/content/' + req.params.article + '.md')
    if (fs.existsSync(getfile)) {

        const file = matter.read(__dirname + '/blog/content/' + req.params.article + '.md');
        const content = file.content;
        const result = md.render(content);
        res.render("blog", {
            post: result,
            title: file.data.title,
            description: file.data.description,
            date: file.data.date,
            seourl: req.params.article
        });
    } else {
        res.render("404");
    }
});

app.use('/', function(req, res) {
    res.render("404");
});