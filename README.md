# ரண்டொம் கவிதை வேர்ல்ட் 🦄

Download the Latest Tamil kavithai images and தமிழ் பாடல் வரிகள் for your Social Status and Stories - collected Around from the internet and Social profiles.  

> Build using Express.js and EJS - Express Markdown Blog  

- Post Demo - <https://random.tamilwords.net/fb-kavithai-3042918/>

## Requirements ⚙

- Node.js
- Express.js
- EJS Template Engine
- Gray Matter - Read Markdown File
- markdown-it - Render the Markdown Content
- Gulp.js for Optimization and Automated Tasks
- Tailwind CSS
- apicache - <https://github.com/kwhitley/apicache>
- dompurify - <https://github.com/cure53/DOMPurify>
- html2canvas (convert Post into image) - <https://github.com/niklasvh/html2canvas>

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
