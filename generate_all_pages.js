const fs = require('fs');
const path = require('path');
const { htmlToJsx } = require('./convert_html_to_jsx');

const pageConfigs = [
  {
    htmlFile: 'about.html',
    route: 'about',
    title: 'About Aurora Dome Solutions — Immersive Destinations',
    description: 'Learn about our mission, leadership, and engineering approach to 360° projection domes.'
  },
  {
    htmlFile: 'solutions.html',
    route: 'solutions',
    title: 'Our Solutions — Aurora Dome Solutions',
    description: 'Explore our complete dome solutions: Dome Infrastructure, Immersive Content, Technical Support, and End-to-End Delivery.'
  },
  {
    htmlFile: 'solutions-dome-infrastructure.html',
    route: 'solutions/dome-infrastructure',
    title: 'Dome Infrastructure — Aurora Dome Solutions',
    description: 'Engineered geodesic domes, projection screen surfaces, climate control and structural integrity.'
  },
  {
    htmlFile: 'solutions-immersive-content.html',
    route: 'solutions/immersive-content',
    title: 'Immersive Content — Aurora Dome Solutions',
    description: 'Fulldome 360° CGI, cinematic live capture, real-time interactive experiences, and custom audio.'
  },
  {
    htmlFile: 'solutions-technical-support.html',
    route: 'solutions/technical-support',
    title: 'Technical Support — Aurora Dome Solutions',
    description: 'On-site calibration, 24/7 remote monitoring, preventive maintenance, and system upgrades.'
  },
  {
    htmlFile: 'solutions-end-to-end-delivery.html',
    route: 'solutions/end-to-end-delivery',
    title: 'End-to-End Delivery — Aurora Dome Solutions',
    description: 'Concept to ribbon-cutting. Seamless architecture, engineering, installation, and commissioning.'
  },
  {
    htmlFile: 'industries.html',
    route: 'industries',
    title: 'Industries We Serve — Aurora Dome Solutions',
    description: 'Tailored 360° immersive environments for 9 major global industries.'
  },
  {
    htmlFile: 'industries-entertainment-tourism.html',
    route: 'industries/entertainment-tourism',
    title: 'Entertainment & Tourism Domes — Aurora Dome Solutions',
    description: 'Immersive tourist attractions, theme park pavilions, and experiential entertainment centers.'
  },
  {
    htmlFile: 'industries-events-festivals.html',
    route: 'industries/events-festivals',
    title: 'Events & Festivals Domes — Aurora Dome Solutions',
    description: 'High-capacity geodesic structures for music festivals, VIP lounges, and experiential event activations.'
  },
  {
    htmlFile: 'industries-music-nightlife.html',
    route: 'industries/music-nightlife',
    title: 'Music, Nightlife & Concert Domes — Aurora Dome Solutions',
    description: 'Synchronized visual mapping and spatial audio for concerts, DJ sets, and nightlife venues.'
  },
  {
    htmlFile: 'industries-corporate-brand.html',
    route: 'industries/corporate-brand',
    title: 'Corporate & Brand Domes — Aurora Dome Solutions',
    description: 'Unforgettable product launches, trade show pavilions, and branded keynote environments.'
  },
  {
    htmlFile: 'industries-hospitality-dining.html',
    route: 'industries/hospitality-dining',
    title: 'Hospitality & Dining Domes — Aurora Dome Solutions',
    description: 'Multi-sensory dining domes, luxury resort lounges, and culinary storytelling environments.'
  },
  {
    htmlFile: 'industries-museums-cultural.html',
    route: 'industries/museums-cultural',
    title: 'Museums & Cultural Domes — Aurora Dome Solutions',
    description: 'Fulldome planetariums, science centres, and historical cultural exhibitions.'
  },
  {
    htmlFile: 'industries-education-planetariums.html',
    route: 'industries/education-planetariums',
    title: 'Education & Planetariums — Aurora Dome Solutions',
    description: 'Curriculum-aligned STEM learning domes, astronomical shows, and campus projection spheres.'
  },
  {
    htmlFile: 'industries-health-wellness.html',
    route: 'industries/health-wellness',
    title: 'Health & Wellness Domes — Aurora Dome Solutions',
    description: 'Biophilic sound bath domes, sound meditation spheres, and restorative retreats.'
  },
  {
    htmlFile: 'industries-private-events-weddings.html',
    route: 'industries/private-events-weddings',
    title: 'Private Events & Weddings — Aurora Dome Solutions',
    description: 'Bespoke celebratory geodesic domes for luxury weddings, private galas, and estate soirées.'
  },
  {
    htmlFile: 'technology-dome-systems.html',
    route: 'technology-dome-systems',
    title: 'Technology & Dome Systems — Aurora Dome Solutions',
    description: 'Optical negative-pressure projection screens, multi-projector calibration, servers, and spatial audio.'
  },
  {
    htmlFile: 'start-a-project.html',
    route: 'start-a-project',
    title: 'Start a Project — Aurora Dome Solutions',
    description: 'Connect with our engineering and creative directors to plan your immersive dome destination.'
  }
];

function processHtml(rawHtml, slug) {
  let inner = rawHtml;

  // Strip header
  if (inner.includes('</header>')) {
    inner = inner.slice(inner.indexOf('</header>') + '</header>'.length);
  }
  // Strip footer
  if (inner.includes('<footer')) {
    inner = inner.slice(0, inner.indexOf('<footer'));
  } else if (inner.includes('</body>')) {
    inner = inner.slice(0, inner.lastIndexOf('</body>'));
  }

  // Specifically for solutions.html: rewire card links
  if (slug === 'solutions') {
    const solutionLinks = [
      '/solutions/dome-infrastructure',
      '/solutions/immersive-content',
      '/solutions/technical-support',
      '/solutions/end-to-end-delivery'
    ];
    let cardIdx = 0;
    inner = inner.replace(/<article[\s\S]*?<\/article>/g, (art) => {
      const target = solutionLinks[cardIdx++] || '/solutions';
      return art.replace(/href="#"(\s+class="[^"]*rounded-full)/g, `href="${target}"$1`);
    });
  }

  // Specifically for industries.html: rewire card links
  if (slug === 'industries') {
    const industryRoutes = [
      '/industries/entertainment-tourism',
      '/industries/events-festivals',
      '/industries/hospitality-dining',
      '/industries/health-wellness',
      '/industries/music-nightlife',
      '/industries/museums-cultural',
      '/industries/corporate-brand',
      '/industries/education-planetariums',
      '/industries/private-events-weddings'
    ];

    let count = 0;
    inner = inner.replace(/<a([^>]*?)class="card-arrow-btn([^>]*?)href="#"([^>]*)>/g, (m, before, mid, after) => {
      const targetRoute = industryRoutes[count] || '/industries';
      count++;
      return `<a${before}class="card-arrow-btn${mid}href="${targetRoute}"${after}>`;
    });
  }

  // Strip any embedded script or style tags (styles are already in globals.css)
  inner = inner.replace(/<script[\s\S]*?<\/script>/gi, '');
  inner = inner.replace(/<style[\s\S]*?<\/style>/gi, '');

  let jsx = htmlToJsx(inner);

  // Clean entities
  jsx = jsx.replace(/&amp;/g, '&');
  jsx = jsx.replace(/&rarr;/g, '→');
  jsx = jsx.replace(/&times;/g, '×');

  return jsx;
}

pageConfigs.forEach(cfg => {
  const rawHtml = fs.readFileSync(path.join('stitch_screens', cfg.htmlFile), 'utf8');
  const jsx = processHtml(rawHtml, cfg.route.replace('/', '-'));

  const targetDir = path.join('src', 'app', cfg.route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const isFormPage = cfg.route === 'start-a-project';

  let componentCode = '';
  if (isFormPage) {
    componentCode = `"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function StartAProjectPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    location: "",
    budget: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert("Please provide your name and email.");
      return;
    }
    // Simulate real submission
    setSubmitted(true);
  };

  return (
    <div className="bg-[#080a0f] text-slate-100 min-h-screen">
      ${jsx}
    </div>
  );
}
`;
  } else {
    componentCode = `"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#05070B] text-slate-100 min-h-screen">
      ${jsx}
    </div>
  );
}
`;
  }

  fs.writeFileSync(path.join(targetDir, 'page.tsx'), componentCode);
  console.log('Created page for route:', cfg.route, 'from:', cfg.htmlFile);
});

console.log('All 18 subpages successfully generated!');
