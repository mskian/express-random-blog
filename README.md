# Random Blog 🦄

Creating a Markdown Blog with EJS and Express.js - Just a Random blog - Share a thing that I Collect from the unicorn world.

> Build using Express.js and EJS - Express Markdown Blog

its Just for Learing Purpose and Automation Blogging site.

> Post Markdown Content via Restful API and Github API - Experimenting automation blog content Posting

## Requirements ⚙

- Node.js
- EXpress.js
- EJS Template Engine
- Gray Matter - Read Markdown File
- markdown-it - Render the Markdown Content
- Gulp.js for Optimization and Automated Tasks
- Tailwind CSS

## installation 📦

- clone the repo or download

```sh
git clone https://github.com/mskian/express-random-blog
cd express-random-blog
yarn
```

- Start the server

```sh
yarn dev
```

- Post Markdown Content on `/blog/content/`
- `ejs` Template files on `/templates/` Folder
- Asset files on `/public/` Folder
- Access post `http://localhost:4003/<markdown-file-name>`

```sh
http://localhost:4003/first-post
```

- Format markdown content

```sh
yarn format
```

- Miinify `ejs` Template after Edits/Modifications - Main file localtion `/templates`

```sh
yarn minify-ejs
```

- Miinify `css` file after Edits/Modifications - Main file localtion `/public/css`

```sh
yarn minify-css
```

## Reference 📑

- Creating a Markdown Blog with EJS & Express - <https://dev.to/khalby786/creating-a-markdown-blog-with-ejs-express-j40>
- Example - <https://github.com/Pilavcioglu/markdown-blog>

## LICENSE ☑

MIT
