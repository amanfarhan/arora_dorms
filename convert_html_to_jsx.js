const fs = require('fs');

const imageMap = JSON.parse(fs.readFileSync('stitch_screens/image_map.json', 'utf8'));

function htmlToJsx(html) {
  let jsx = html;

  // Replace images with local paths from imageMap
  for (const [remoteUrl, localPath] of Object.entries(imageMap)) {
    if (localPath.startsWith('/images/')) {
      jsx = jsx.split(remoteUrl).join(localPath);
    }
  }

  // Remove or replace inline event handlers like onclick="document.getElementById(...).scrollBy(...)"
  jsx = jsx.replace(/\bonclick="[^"]*"/gi, '');
  jsx = jsx.replace(/\bonchange="[^"]*"/gi, '');
  jsx = jsx.replace(/\bonsubmit="[^"]*"/gi, '');

  // Common HTML attributes to JSX
  jsx = jsx.replace(/\bclass=/g, 'className=');
  jsx = jsx.replace(/\bfor=/g, 'htmlFor=');
  jsx = jsx.replace(/\btabindex=/g, 'tabIndex=');
  jsx = jsx.replace(/\bviewbox=/g, 'viewBox=');
  jsx = jsx.replace(/\bstroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/\bstroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/\bstroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/\bstroke-dasharray=/g, 'strokeDasharray=');
  jsx = jsx.replace(/\bfill-rule=/g, 'fillRule=');
  jsx = jsx.replace(/\bclip-rule=/g, 'clipRule=');
  jsx = jsx.replace(/\bclip-path=/g, 'clipPath=');
  jsx = jsx.replace(/\bstop-color=/g, 'stopColor=');
  jsx = jsx.replace(/\bstop-opacity=/g, 'stopOpacity=');
  jsx = jsx.replace(/\bfill-opacity=/g, 'fillOpacity=');

  // Boolean attributes
  jsx = jsx.replace(/\brequired=""/g, 'required');
  jsx = jsx.replace(/\bchecked=""/g, 'defaultChecked');
  jsx = jsx.replace(/\bdisabled=""/g, 'disabled');
  jsx = jsx.replace(/\breadonly=""/g, 'readOnly');
  jsx = jsx.replace(/\bautoplay=""/g, 'autoPlay');
  jsx = jsx.replace(/\bloop=""/g, 'loop');
  jsx = jsx.replace(/\bmuted=""/g, 'muted');
  jsx = jsx.replace(/\bplaysinline=""/g, 'playsInline');

  // Self closing tags
  jsx = jsx.replace(/<img\b([^>]*?)>/g, (m, attrs) => {
    return attrs.endsWith('/') ? m : `<img ${attrs} />`;
  });
  jsx = jsx.replace(/<input\b([^>]*?)>/g, (m, attrs) => {
    return attrs.endsWith('/') ? m : `<input ${attrs} />`;
  });
  jsx = jsx.replace(/<br\b([^>]*?)>/g, '<br />');
  jsx = jsx.replace(/<hr\b([^>]*?)>/g, '<hr />');

  // Convert style="..." strings into style={{ ... }} objects
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleStr) => {
    if (!styleStr.trim()) return '';
    const styleObj = {};
    styleStr.split(';').forEach(rule => {
      const parts = rule.split(':');
      if (parts.length >= 2) {
        let prop = parts[0].trim().toLowerCase();
        let val = parts.slice(1).join(':').trim();
        if (prop.includes('overflow-style') || prop.includes('scrollbar-width')) {
          return;
        }
        if (prop.startsWith('-ms-')) {
          prop = 'ms' + prop.slice(4).replace(/-([a-z])/g, (_, l) => l.toUpperCase());
        } else if (prop.startsWith('-webkit-')) {
          prop = 'Webkit' + prop.slice(8).replace(/-([a-z])/g, (_, l) => l.toUpperCase());
        } else {
          prop = prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        }
        styleObj[prop] = val;
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  // Convert HTML comments <!-- ... --> to {/* ... */}
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  // Replace links with internal navigation
  jsx = jsx.replace(/href="#about"/g, 'href="/about"');
  jsx = jsx.replace(/href="#experiences"/g, 'href="/industries"');
  jsx = jsx.replace(/href="#solutions"/g, 'href="/solutions"');
  jsx = jsx.replace(/href="#content"/g, 'href="/solutions/immersive-content"');
  jsx = jsx.replace(/href="#technology"/g, 'href="/technology-dome-systems"');
  jsx = jsx.replace(/href="#contact"/g, 'href="/start-a-project"');

  // Replace <a href="/..."> with <Link href="/...">
  jsx = jsx.replace(/<a\b([^>]*?)href="(\/[^"]*)"([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1href="$2"$3>$4</Link>');

  return jsx;
}

module.exports = { htmlToJsx };
