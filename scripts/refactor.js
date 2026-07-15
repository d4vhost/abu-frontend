const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

// 1. Create Directories
const dirs = [
  'src/modules/core/components',
  'src/modules/home/components',
  'src/modules/products/data',
  'src/modules/process/components'
];
dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

// 2. Move files
if (fs.existsSync('src/components/layout/Navbar.tsx')) {
  fs.renameSync('src/components/layout/Navbar.tsx', 'src/modules/core/components/Navbar.tsx');
  fs.renameSync('src/components/layout/Footer.tsx', 'src/modules/core/components/Footer.tsx');
}
if (fs.existsSync('src/components/home/Hero.tsx')) {
  fs.renameSync('src/components/home/Hero.tsx', 'src/modules/home/components/Hero.tsx');
  fs.renameSync('src/components/home/Indicators.tsx', 'src/modules/home/components/Indicators.tsx');
  fs.renameSync('src/components/home/ProductShowcase.tsx', 'src/modules/home/components/ProductShowcase.tsx');
  fs.renameSync('src/components/home/ProductionProcess.tsx', 'src/modules/home/components/ProductionProcess.tsx');
  fs.renameSync('src/components/home/QualitySection.tsx', 'src/modules/home/components/QualitySection.tsx');
  fs.renameSync('src/components/home/ContactCTA.tsx', 'src/modules/home/components/ContactCTA.tsx');
}
if (fs.existsSync('src/data/products.ts')) {
  fs.renameSync('src/data/products.ts', 'src/modules/products/data/products.ts');
}

// 3. Update paths and image urls in all files
const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/@\/components\/layout/g, '@/modules/core/components')
        .replace(/@\/components\/home/g, '@/modules/home/components')
        .replace(/@\/data\/products/g, '@/modules/products/data/products')
        // Hero Image
        .replace(/https:\/\/images\.unsplash\.com\/photo-1516253593875-bd7ba052fbc5[^\)]*/g, '/images/hero.jpg')
        // Quality Image
        .replace(/https:\/\/images\.unsplash\.com\/photo-1582213782179-e0d53f98f2ca[^"]*/g, '/images/calidad.jpg')
        // Product Images
        .replace(/https:\/\/images\.unsplash\.com\/photo-1560293414-2c5e53fa7c58[^"]*/g, '/images/producto-inicial.jpg')
        .replace(/https:\/\/images\.unsplash\.com\/photo-1604856085189-bcafdbccbfcb[^"]*/g, '/images/producto-desarrollo.jpg')
        .replace(/https:\/\/images\.unsplash\.com\/photo-1516467508483-a7212febe31a[^"]*/g, '/images/producto-postura.jpg')
        .replace(/https:\/\/images\.unsplash\.com\/photo-1558222218-b7b54eede3f3[^"]*/g, '/images/producto-engorde.jpg');
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated refs in ${file}`);
    }
});

// Clean up old dirs if empty
try { fs.rmdirSync('src/components/layout'); } catch(e){}
try { fs.rmdirSync('src/components/home'); } catch(e){}
try { fs.rmdirSync('src/components'); } catch(e){}
try { fs.rmdirSync('src/data'); } catch(e){}
