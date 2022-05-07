const dataSet = [{
  "title": "சில நேரங்களில் கடந்து வந்த",
  "description": "சில நேரங்களில் கடந்து வந்த விரக்தியான வெறுமை நிலை ஆளே இல்லாத பாலைவனத்தில் இரவு நேரத்தில் உறங்குவதை போன்ற பயத்தை கொடுக்கிறது.",
  "content": "\nசில நேரங்களில் கடந்து வந்த  \nவிரக்தியான வெறுமை நிலை  \nஆளே இல்லாத பாலைவனத்தில்  \nஇரவு நேரத்தில் உறங்குவதை  \nபோன்ற பயத்தை கொடுக்கிறது\n",
  "date": "2022-05-06T11:46:55.661Z",
  "author": "Shiva Chelliah",
  "tag": "Thanimai",
  "slug": "fb-kavithai-1214",
  "liveurl": "https://localhost:4003/fb-kavithai-1214/"
}, {
  "title": "வழிய போய் பேசும்போது",
  "description": "வழிய போய் பேசும்போது அலட்சியம் செய்யாமல் பேசுபவர்களையும், கொஞ்சம் வேலை இருக்கு முடிச்சுட்டு நானே மெசேஜ் பண்ணுறேன்னு சொல்லிட்டு.",
  "content": "\nவழிய போய் பேசும்போது  \nஅலட்சியம் செய்யாமல்  \nபேசுபவர்களையும், கொஞ்சம்  \nவேலை இருக்கு முடிச்சுட்டு நானே  \nமெசேஜ் பண்ணுறேன்னு சொல்லிட்டு  \nநமக்கு இம்பார்ட்டண்ட்ஸ் கொடுத்து  \nஅவங்க வேலையெல்லாம் முடிச்சுட்டு  \nஅவங்களாவே நமக்கு மெசேஜ்  \nபண்ணுறவங்களையும் தான் இங்க  \nநிறைய பேர் தேடிட்டு இருக்காங்க\n",
  "date": "2022-05-06T10:50:27.209Z",
  "author": "Shiva Chelliah",
  "tag": "Tamil Facts",
  "slug": "fb-kavithai-3042918",
  "liveurl": "https://localhost:4003/fb-kavithai-3042918/"
}, {
  "title": "சுயநலமாக இருப்பது யாருக்கு",
  "description": "சுயநலமாக இருப்பது யாருக்கு நன்மையோ இல்லையோ சில நேரங்களில் நமக்கு பெரிய நன்மை.",
  "content": "\nசுயநலமாக இருப்பது யாருக்கு  \nநன்மையோ இல்லையோ சில  \nநேரங்களில் நமக்கு பெரிய நன்மை  \nஇவன் சரியான சுயநலக்காரன் என்று  \nஊர் சொல்லும் நிச்சயமாக,ஆனால்  \nஅவர்கள் தான் பொதுநலவாதியாக  \nஇருந்த என்னை சுயநலவாதியாக  \nமாற்றியதற்கு காரணம் என என்னால்  \nஎந்த மேடையிலும் சொல்ல முடியும்\n",
  "date": "2022-05-06T10:50:57.864Z",
  "author": "Shiva Chelliah",
  "tag": "Tamil Life Quotes",
  "slug": "fb-kavithai-3044109",
  "liveurl": "https://localhost:4003/fb-kavithai-3044109/"
}, {
  "title": "அறியாமை தான் இங்கு பலரின் மிகப்பெரிய பலவீனம்",
  "description": "அவங்க இந்நேரம் நம்மள நினைச்சுட்டு இருப்பாங்களன்னு நம்மள நாமே சமாதானம் செய்து கொள்ளும் அறியாமை தான் இங்கு பலரின் மிகப்பெரிய பலவீனம்.",
  "content": "\nஅவங்க இந்நேரம்  \nநம்மள நினைச்சுட்டு  \nஇருப்பாங்களன்னு  \nநம்மள நாமே  \nசமாதானம் செய்து  \nகொள்ளும் அறியாமை  \nதான் இங்கு பலரின்  \nமிகப்பெரிய பலவீனம்\n",
  "date": "2022-05-07T04:11:27.440Z",
  "author": "Shiva Chelliah",
  "tag": "Tamil Life Quotes",
  "slug": "fb-kavithai-8697",
  "liveurl": "https://localhost:4003/fb-kavithai-8697/"
}, {
  "title": "ஏதேனும் ஒரு வெறுமை நிலையே",
  "description": "பிரியமானவர்கள் கொடுத்து சென்ற ஏதேனும் ஒரு வெறுமை நிலையே மனிதனை மிருகமாய் மாற்றுகிறது.",
  "content": "\nபிரியமானவர்கள்  \nகொடுத்து சென்ற  \nஏதேனும் ஒரு வெறுமை  \nநிலையே மனிதனை  \nமிருகமாய் மாற்றுகிறது\n",
  "date": "2022-05-06T12:13:04.578Z",
  "author": "Shiva Chelliah",
  "tag": "Tamil Facts",
  "slug": "fb-kavithai-8752",
  "liveurl": "https://localhost:4003/fb-kavithai-8752/"
}]

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
       <td>${item.title}</td>
       <td><a class="text-green-600 underline" href="/${item.slug}/" title="${item.title}">Read More</a></td>
       </tr>`)

  document.querySelector('#container tbody').innerHTML = html.join('')

 }

let perPage = 3
displayPageNav(perPage)
displayItems(1, perPage)