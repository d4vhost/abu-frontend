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
    // We remove all generic rounding. 
    // We will leave rounded-full intact for icons and badges, 
    // but remove rounded-sm, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded
    let newContent = content
        .replace(/\brounded-(sm|md|lg|xl|2xl|3xl)\b/g, '')
        .replace(/\brounded\b/g, '') // remove pure 'rounded'
        .replace(/\s+/g, ' '); // cleanup double spaces just in case
    
    // Specifically fix double spaces created in classNames
    newContent = newContent.replace(/ className=" /g, ' className="');
    newContent = newContent.replace(/ "/g, '"');
    
    // We will re-read and replace manually using simpler replace to not mess up formatting
    let lines = content.split('\n');
    let changed = false;
    for(let i=0; i<lines.length; i++) {
        let old = lines[i];
        lines[i] = lines[i].replace(/\brounded-(sm|md|lg|xl|2xl|3xl)\b/g, '').replace(/\brounded\b/g, '');
        // clean multiple spaces
        lines[i] = lines[i].replace(/  +/g, ' ');
        if (old !== lines[i]) changed = true;
    }
    
    if (changed) {
        fs.writeFileSync(file, lines.join('\n'), 'utf8');
        console.log(`Squared borders in ${file}`);
    }
});
