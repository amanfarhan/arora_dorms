const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('stitch_screens').filter(f => f.endsWith('.html'));
const allImages = new Set();
const fonts = new Set();

files.forEach(f => {
  const content = fs.readFileSync(path.join('stitch_screens', f), 'utf8');
  
  // match img src
  const srcRegex = /src=["'](https?:\/\/[^"']+)["']/g;
  let match;
  while ((match = srcRegex.exec(content)) !== null) {
    if (!match[1].includes('tailwindcss.com')) {
      allImages.add(match[1]);
    }
  }

  // match background url
  const bgRegex = /url\(["']?(https?:\/\/[^"')]+)["']?\)/g;
  while ((match = bgRegex.exec(content)) !== null) {
    allImages.add(match[1]);
  }

  // match font families
  const fontRegex = /family=([^&"']+)/g;
  while ((match = fontRegex.exec(content)) !== null) {
    fonts.add(decodeURIComponent(match[1]));
  }
});

console.log('Total unique images found:', allImages.size);
console.log('Fonts found:', Array.from(fonts));
fs.writeFileSync('stitch_screens/all_images.json', JSON.stringify(Array.from(allImages), null, 2));

// Also let's inspect the page title and meta from each html
files.forEach(f => {
  const content = fs.readFileSync(path.join('stitch_screens', f), 'utf8');
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  console.log(f, '=>', titleMatch ? titleMatch[1] : 'No title');
});
