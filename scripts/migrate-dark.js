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

    // Old dark greens → new dark neutrals
    content = content.replace(/bg-abu-bg-main/g, 'bg-abu-bg');
    content = content.replace(/bg-abu-bg-sec/g, 'bg-abu-bg-alt');
    content = content.replace(/bg-abu-bg-alt-alt/g, 'bg-abu-bg-alt'); // fix double
    content = content.replace(/bg-abu-surface/g, 'bg-abu-surface');
    content = content.replace(/bg-abu-card-elevated/g, 'bg-abu-card');
    content = content.replace(/bg-abu-card-light/g, 'bg-abu-card');
    content = content.replace(/bg-abu-dark-sec/g, 'bg-abu-bg-alt');
    content = content.replace(/bg-abu-dark(?!\-)/g, 'bg-abu-bg');
    content = content.replace(/bg-white/g, 'bg-abu-surface');
    content = content.replace(/bg-abu-white/g, 'bg-abu-bg');
    content = content.replace(/bg-abu-light-sec/g, 'bg-abu-surface');
    content = content.replace(/bg-abu-light(?!\-)/g, 'bg-abu-bg-alt');

    // Old text tokens → new
    content = content.replace(/text-abu-heading/g, 'text-abu-white');
    content = content.replace(/text-abu-body/g, 'text-abu-gray');
    content = content.replace(/text-abu-caption/g, 'text-abu-gray-dark');
    content = content.replace(/text-abu-text(?!\-)/g, 'text-abu-white');
    content = content.replace(/text-abu-text-muted/g, 'text-abu-gray');
    content = content.replace(/text-abu-text-dim/g, 'text-abu-gray-dark');
    content = content.replace(/text-abu-primary(?!\-)/g, 'text-abu-gold');
    content = content.replace(/text-abu-primary-hover/g, 'text-abu-gold-hover');
    content = content.replace(/text-abu-accent-gold/g, 'text-abu-gold');

    // Borders
    content = content.replace(/border-abu-border-light/g, 'border-abu-line');
    content = content.replace(/border-abu-border-dark/g, 'border-abu-line');
    content = content.replace(/border-abu-border(?!\-)/g, 'border-abu-line');
    content = content.replace(/border-abu-primary/g, 'border-abu-gold');

    // Buttons/bg accents
    content = content.replace(/bg-abu-primary(?!\-)/g, 'bg-abu-gold');
    content = content.replace(/bg-abu-primary-hover/g, 'bg-abu-gold-hover');
    content = content.replace(/bg-abu-secondary(?!\-)/g, 'bg-abu-card');
    content = content.replace(/bg-abu-green-light/g, 'bg-abu-card');
    content = content.replace(/bg-abu-green(?!\-)/g, 'bg-abu-card');
    content = content.replace(/text-abu-bg-main/g, 'text-abu-bg');
    content = content.replace(/hover:bg-abu-secondary-hover/g, 'hover:bg-abu-card-hover');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated: ${file}`);
    }
});
