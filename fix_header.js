const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/layout/header.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix the specific issue with the closing div tag
content = content.replace(
  /<div className="min-h-screen flex flex-col w-full overflow-x-hidden"><\/div>/g,
  '<div className="min-h-screen flex flex-col w-full overflow-x-hidden">'
);

fs.writeFileSync(filePath, content);
console.log('Header file fixed successfully.');
