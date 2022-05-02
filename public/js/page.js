const dataSet = [
 {
  "id": "1",
  "title": "வழிய போய் பேசும்போது",
  "link": "fb-kavithai-3042918"
 },
 {
  "id": "2",
  "title": "சுயநலமாக இருப்பது யாருக்கு",
  "link": "fb-kavithai-3044109"
 }
]

const displayPageNav = perPage => {

let pagination = ``
const totalItems = dataSet.length
perPage = perPage ? perPage : 1
const pages = Math.ceil(totalItems / perPage)

for (let i = 1; i <= pages; i++) {
  pagination += `<a href="#" onClick="displayItems(${i},${perPage})" >${i}</a>`
}

document.getElementById('pagination').innerHTML = pagination

}

const displayItems = (page = 1, perPage = 2) => {

let index, offSet

if (page == 1 || page <= 0) {
  index = 0
  offSet = perPage
} else if (page > dataSet.length) {
  index = page - 1
  offSet = dataSet.length
} else {
  index = page * perPage - perPage
  offSet = index + perPage
}

const slicedItems = dataSet.slice(index, offSet)

const html = slicedItems.map(item =>
  `<tr>
  <td>${item.id}</td>
  <td>${item.title}</td>
  <td><a class="text-green-600 underline" href="/${item.link}/" title="${item.title}">Read Story</a></td>
</tr>`)

document.querySelector('#container tbody').innerHTML = html.join('')

}

let perPage = 3
displayPageNav(perPage)
displayItems(1, perPage)