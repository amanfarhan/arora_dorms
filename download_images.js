const fs = require('fs');
const https = require('https');
const path = require('path');
const crypto = require('crypto');

const images = require('./stitch_screens/all_images.json');
const outDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode));
      }
      const ext = res.headers['content-type']?.includes('png') ? '.png' :
                  res.headers['content-type']?.includes('webp') ? '.webp' :
                  res.headers['content-type']?.includes('svg') ? '.svg' : '.jpg';
      const finalDest = dest + ext;
      const file = fs.createWriteStream(finalDest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(finalDest);
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const map = {};
  console.log('Downloading ' + images.length + ' images...');
  for (let i = 0; i < images.length; i++) {
    const url = images[i];
    const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 12);
    const baseDest = path.join(outDir, 'img_' + hash);
    try {
      const savedPath = await download(url, baseDest);
      const relPath = '/images/' + path.basename(savedPath);
      map[url] = relPath;
      process.stdout.write('.');
    } catch (e) {
      console.error('\nFailed to download:', url, e.message);
      map[url] = url; // fallback to remote URL
    }
  }
  console.log('\nDownloaded images.');
  fs.writeFileSync(path.join(__dirname, 'stitch_screens', 'image_map.json'), JSON.stringify(map, null, 2));
}

run();
