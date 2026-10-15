const fs = require('fs');
const path = require('path');

const files = [
  'home.html',
  'about.html',
  'solutions.html',
  'solutions-dome-infrastructure.html',
  'solutions-immersive-content.html',
  'solutions-end-to-end-delivery.html',
  'solutions-technical-support.html',
  'industries.html',
  'industries-entertainment-tourism.html',
  'industries-events-festivals.html',
  'industries-music-nightlife.html',
  'industries-corporate-brand.html',
  'industries-hospitality-dining.html',
  'industries-museums-cultural.html',
  'industries-education-planetariums.html',
  'industries-health-wellness.html',
  'industries-private-events-weddings.html',
  'technology-dome-systems.html',
  'start-a-project.html'
];

const results = {};

files.forEach(f => {
  const content = fs.readFileSync(path.join('stitch_screens', f), 'utf8');
  
  // Extract all section or main tags or data-purpose
  const sections = [];
  const sectionRegex = /<section[^>]*>([\s\S]*?)<\/section>/g;
  let match;
  while ((match = sectionRegex.exec(content)) !== null) {
    const secHtml = match[0];
    const idMatch = secHtml.match(/id=["']([^"']+)["']/);
    const purposeMatch = secHtml.match(/data-purpose=["']([^"']+)["']/);
    const h1Match = secHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    const h2Match = secHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    const h3Match = secHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    
    sections.push({
      id: idMatch ? idMatch[1] : null,
      purpose: purposeMatch ? purposeMatch[1] : null,
      h1: h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : null,
      h2: h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : null,
      h3: h3Match ? h3Match[1].replace(/<[^>]+>/g, '').trim() : null,
    });
  }
  
  results[f] = {
    sectionCount: sections.length,
    sections: sections
  };
});

fs.writeFileSync('stitch_screens/sections_map.json', JSON.stringify(results, null, 2));
console.log('Mapped sections for all pages. Summary:');
Object.keys(results).forEach(k => {
  console.log(k, '->', results[k].sectionCount, 'sections');
});
