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

const files = walk('./src/app');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    // Dark backgrounds → light alternatives
    content = content.replace(/bg-abu-bg-main/g, 'bg-abu-white');
    content = content.replace(/bg-abu-bg-sec/g, 'bg-abu-light');
    content = content.replace(/bg-abu-surface/g, 'bg-abu-light');
    content = content.replace(/bg-abu-card-elevated/g, 'bg-abu-light-sec');
    content = content.replace(/bg-abu-card(?!\-)/g, 'bg-white');

    // Text colors → dark text for light bgs
    content = content.replace(/text-abu-text(?!\-)/g, 'text-abu-heading');
    content = content.replace(/text-abu-text-muted/g, 'text-abu-body');
    content = content.replace(/text-abu-text-dim/g, 'text-abu-caption');

    // Borders
    content = content.replace(/border-abu-border-dark/g, 'border-abu-border-light');
    content = content.replace(/border-abu-border(?!\-)/g, 'border-abu-border-light');

    // Keep primary/secondary/green as-is (they work on both)

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated: ${file}`);
    }
});
