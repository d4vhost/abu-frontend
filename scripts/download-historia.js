const fs = require('fs');
const path = require('path');

const img = { name: 'historia-placeholder.webp', text: 'Fotografía institucional\\npendiente' };

async function downloadMissing() {
  const encodedText = encodeURIComponent(img.text);
  const url = `https://placehold.co/1000x800/213229/F5F3EA/webp?text=${encodedText}`;
  
  const targetDir = path.join(__dirname, '../public/images/about');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const dest = path.join(targetDir, img.name);
  
  console.log(`Downloading placeholder for ${img.name}...`);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(buffer));
    console.log(`Saved ${img.name}`);
  } catch (e) {
    console.error(`Failed to download ${img.name}:`, e.message);
  }
}

downloadMissing();
