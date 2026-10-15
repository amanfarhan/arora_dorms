const fs = require('fs');
const { htmlToJsx } = require('./convert_html_to_jsx');

const html = fs.readFileSync('stitch_screens/home.html', 'utf8');

// Extract content between </header> and <footer
const headerEnd = html.indexOf('</header>') + '</header>'.length;
const footerStart = html.indexOf('<footer');

let innerHtml = html.slice(headerEnd, footerStart).trim();

let jsx = htmlToJsx(innerHtml);

// Fix unescaped entities like &amp;, &rarr;, &apos; in text
jsx = jsx.replace(/&amp;/g, '&');
jsx = jsx.replace(/&rarr;/g, '→');
jsx = jsx.replace(/&times;/g, '×');

const pageContent = `"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-[#05070B] text-slate-100 overflow-hidden">
      ${jsx}
    </div>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', pageContent);
console.log('Generated src/app/page.tsx, length:', pageContent.length);
