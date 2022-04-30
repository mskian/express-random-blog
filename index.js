const express = require('express');
const matter = require('gray-matter');
const md = require('markdown-it')();
const fs = require('fs')
const apicache = require('apicache');

const app = express();
const port = 4003;
const cache = apicache.middleware

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './view');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

function getCurrentDate(n) {
    return (n < 10 ? "0" : "") + n
  }

const date = new Date()
const month = getCurrentDate(date.getMonth() + 1)
const day = getCurrentDate(date.getDate())
const year = date.getFullYear()
const formattedDate = year + "-" + month + "-" + day

app.listen(port, function() {
    console.log('listening on port ' + port);
});

app.get('/', cache('1 hour'), function(req, res) {

    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');

    const current_page = 'https://' + req.headers.host + req.url;

    res.render('index', {seourl: current_page || '/',})

});

app.get('/:article', cache('1 hour'), (req, res) => {

    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');

    const current_page = 'https://' + req.headers.host + req.url;

    const getfile = (__dirname + '/blog/content/' + req.params.article + '.md')
    if (fs.existsSync(getfile)) {

        const file = matter.read(__dirname + '/blog/content/' + req.params.article + '.md');
        const content = file.content;
        const result = md.render(content);
        res.render('blog', {
            post: result || 'Hello Word Post Content Here',
            title: file.data.title || 'Post title Comes Here',
            description: file.data.description || 'Hello World - Post title description Here',
            date: file.data.date || formattedDate,
            seourl: current_page || '',
        });
    } else {
        res.render('404');
    }
});

app.use('/', function(req, res) {
    res.render('404');
});