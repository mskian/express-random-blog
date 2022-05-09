var urls = [
    'fb-kavithai-1214/',
    'fb-kavithai-3042918/',
    'fb-kavithai-3044109/',
    'fb-kavithai-8697/',
    'fb-kavithai-8752/',
    'archive/posts/',
    'lyrics/arabic-kuthu-song-lyrics/',
    'lyrics/mother-song-lyrics/',
  ];
var root_path = 'https://random.tamilwords.net/';
var priority = 0.5;
var freq = 'daily';

var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"><url><loc>https://random.tamilwords.net/</loc><changefreq>daily</changefreq><priority>0.5</priority></url>';
for (var i in urls) {
xml += '<url>';
xml += '<loc>'+ root_path + urls[i] + '</loc>';
xml += '<changefreq>'+ freq +'</changefreq>';
xml += '<priority>'+ priority +'</priority>';
xml += '</url>';
i++;
}
xml += '</urlset>';

console.log(xml);