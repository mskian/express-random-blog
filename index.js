const express = require('express');
const matter = require('gray-matter');
const md = require('markdown-it')({
    html: true,
    linkify: true,
    breaks: true,
    typographer: true});
const fs = require('fs')
const apicache = require('apicache');
const createDOMPurify = require('dompurify');
const {
    JSDOM
} = require('jsdom');

const app = express();
const port = 4003;
const cache = apicache.middleware
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

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

    const homepage = 'https://' + req.headers.host + '/';
    const current_page = 'https://' + req.headers.host + req.url;

    const getfile = (__dirname + '/blog/content/' + req.params.article + '.md')
    if (fs.existsSync(getfile)) {

        const file = matter.read(__dirname + '/blog/content/' + req.params.article + '.md');
        const content = file.content;
        const result = md.render(content);
        res.render('blog', {
            post: DOMPurify.sanitize(result) || 'Hello Word Post Content Here',
            title: DOMPurify.sanitize(file.data.title) || 'Post title Comes Here',
            description: DOMPurify.sanitize(file.data.description) || 'Hello World - Post title description Here',
            seodate: file.data.date || formattedDate,
            date: new Date(file.data.date).toDateString() || formattedDate,
            author: DOMPurify.sanitize(file.data.author) || 'unknown',
            seourl: current_page || '',
            filename : req.params.article || 'fb-kavithai-image',
            tag: DOMPurify.sanitize(file.data.tag.replace(/ /g,'').toLowerCase()) || 'tamilsms',
            keywords: DOMPurify.sanitize(file.data.tag) || 'Tamil Kavithai',
            mainurl: homepage || ''
        });
    } else {
        res.render('404');
    }
});

app.get('/archive/posts', cache('1 hour'), function(req, res) {

    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');

    const current_page = 'https://' + req.headers.host + req.url;

    res.render('posts', {seourl: current_page || '/',})

});

app.get('/lyrics/:article', cache('1 hour'), (req, res) => {

    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');

    const homepage = 'https://' + req.headers.host + '/';
    const current_page = 'https://' + req.headers.host + req.url;

    const getfile = (__dirname + '/blog/lyrics/' + req.params.article + '.md')
    if (fs.existsSync(getfile)) {

        const file = matter.read(__dirname + '/blog/lyrics/' + req.params.article + '.md');
        const content = file.content;
        const result = md.render(content);
        res.render('lyrics', {
            post: DOMPurify.sanitize(result) || 'Hello Word Post Content Here',
            title: DOMPurify.sanitize(file.data.title) || 'Post title Comes Here',
            description: DOMPurify.sanitize(file.data.description) || 'Hello World - Post title description Here',
            seodate: file.data.date || formattedDate,
            date: new Date(file.data.date).toDateString() || formattedDate,
            author: DOMPurify.sanitize(file.data.author) || 'unknown',
            seourl: current_page || '',
            filename : req.params.article || 'tamil-song-lyrics',
            tag: DOMPurify.sanitize(file.data.tag.replace(/ /g,'').toLowerCase()) || 'tamilsms',
            keywords: DOMPurify.sanitize(file.data.tag) || 'Tamil Lyrics',
            mainurl: homepage || ''
        });
    } else {
        res.render('404');
    }
});

app.get("/api/posts", (req, res) => {

    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');

    postsDir = __dirname + '/blog/content/';
    const post_data = []
    let post = fs.readdirSync(__dirname + '/blog/content').filter(file => file.endsWith('.md'));
    post.sort(function(a){
        post_data.push({
            title: matter.read(postsDir+a).data.title || 'title',
            description: matter.read(postsDir+a).data.description || 'description',
            content: matter.read(postsDir+a).content || 'content',
            date: matter.read(postsDir+a).data.date || 'date',
            author: matter.read(postsDir+a).data.author || 'author',
            tag: matter.read(postsDir+a).data.tag || 'tag',
            slug: matter.read(postsDir+a).data.slug || '/slug',
        });
    })
    res.json({ 'posts': post_data });
  });

app.use('/', function(req, res) {
    res.render('404');
});