const fs = require('fs');
const path = require('path');

const missing = [
  { name: 'producto-inicial.jpg', text: 'Buscar foto:\\nPollitos / Aves inicial' },
  { name: 'producto-desarrollo.jpg', text: 'Buscar foto:\\nGallinas en crecimiento' },
  { name: 'proceso-01.jpg', text: 'Buscar foto:\\nRecepción de materias primas' },
  { name: 'proceso-02.jpg', text: 'Buscar foto:\\nDosificación y pesaje' },
  { name: 'proceso-03.jpg', text: 'Buscar foto:\\nMolino industrial' },
  { name: 'proceso-06.jpg', text: 'Buscar foto:\\nEnsacado de producto' },
  { name: 'proceso-07.jpg', text: 'Buscar foto:\\nBodega con estibas' },
  { name: 'proceso-08.jpg', text: 'Buscar foto:\\nCamión de distribución' }
];

async function downloadMissing() {
  for (const img of missing) {
    const encodedText = encodeURIComponent(img.text);
    const url = `https://placehold.co/800x600/294A36/FFFFFF/png?text=${encodedText}`;
    const dest = path.join(__dirname, '../public/images', img.name);
    
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
}

downloadMissing();
