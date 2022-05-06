const fs = require("fs")

var currentDateTime = new Date()
const blogdir = "./blog/content"
const random_id = Math.floor(1000 + Math.random() * 9000)
const basename = "fb-kavithai-" + random_id

const contents = `---
title: ""
description: ""
author: ""
date: "${currentDateTime}"
tag: ""
---
`

fs.writeFile(`${blogdir}/${basename}.md`, contents, () =>
  console.log(`✔ Created ${blogdir}/${basename}.md - ${currentDateTime}`)
)