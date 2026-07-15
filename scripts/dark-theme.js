const fs = require('fs');

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

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Backgrounds
    content = content.replace(/bg-abu-green-dark/g, 'bg-abu-bg-main');
    content = content.replace(/bg-abu-green/g, 'bg-abu-secondary');
    content = content.replace(/bg-abu-cream/g, 'bg-abu-bg-sec');
    content = content.replace(/bg-white/g, 'bg-abu-card');
    content = content.replace(/bg-abu-corn/g, 'bg-abu-primary');
    content = content.replace(/bg-abu-wheat\/20/g, 'bg-abu-card-elevated');
    content = content.replace(/hover:bg-abu-wheat/g, 'hover:bg-abu-primary-hover');
    content = content.replace(/hover:bg-abu-green-dark/g, 'hover:bg-abu-bg-sec');
    content = content.replace(/hover:bg-abu-green/g, 'hover:bg-abu-secondary');
    content = content.replace(/hover:bg-abu-cream/g, 'hover:bg-abu-card-elevated');
    
    // Text colors
    content = content.replace(/text-abu-green-dark/g, 'text-abu-text');
    content = content.replace(/text-abu-green/g, 'text-abu-primary');
    content = content.replace(/text-abu-charcoal\/70/g, 'text-abu-text-muted');
    content = content.replace(/text-abu-charcoal\/60/g, 'text-abu-text-muted');
    content = content.replace(/text-abu-charcoal/g, 'text-abu-text');
    content = content.replace(/text-abu-corn/g, 'text-abu-primary');
    content = content.replace(/text-abu-cream/g, 'text-abu-text-muted');
    content = content.replace(/text-white/g, 'text-abu-text');
    
    // Borders
    content = content.replace(/border-abu-earth\/[0-9]+/g, 'border-abu-border');
    content = content.replace(/border-abu-green/g, 'border-abu-primary');
    content = content.replace(/border-white\/30/g, 'border-abu-border');
    content = content.replace(/border-abu-corn/g, 'border-abu-primary');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated theme in ${file}`);
});
