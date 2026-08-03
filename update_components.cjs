const fs = require('fs');

// Update about.tsx
let lines = fs.readFileSync('app/components/Landing/about.tsx', 'utf8').split('\n');
let startIdx = -1;
let endIdx = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('const HERO_DATA')) {
    startIdx = i;
  }
  if (startIdx !== -1 && lines[i].startsWith('const AnimatedCounter')) {
    endIdx = i;
    break;
  }
}
if (startIdx !== -1 && endIdx !== -1) {
  const importStmt = `import {
  HERO_DATA,
  WORK_EXPERIENCE,
  EXPERIENCE_TIMELINE,
  SKILLS_DATA,
  SOFT_SKILLS,
  HARD_SKILLS,
  COMMUNITIES,
  EVENTS,
  EDUCATION,
  CERTIFICATES,
} from "../../data/aboutData";\n`;
  const newLines = [...lines.slice(0, startIdx), importStmt, ...lines.slice(endIdx)];
  fs.writeFileSync('app/components/Landing/about.tsx', newLines.join('\n'));
  console.log('Successfully updated about.tsx');
} else {
  console.log('Could not find boundaries in about.tsx');
}

// Update project.tsx
lines = fs.readFileSync('app/components/Landing/project.tsx', 'utf8').split('\n');
startIdx = -1;
endIdx = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('type Item = {')) {
    startIdx = i;
  }
  if (startIdx !== -1 && lines[i].startsWith('function CategoryCard')) {
    endIdx = i;
    break;
  }
}
if (startIdx !== -1 && endIdx !== -1) {
  const importStmt = `import {
  Item,
  WEB_DEVELOPMENT,
  WEBSITE_DESIGN,
  UI_UX_DESIGNS,
  DEVICE_MOCKUPS,
  POSTERS,
  MERCHANDISE_DESIGNS,
  GRAPHIC_DESIGNS,
  CERTS,
  WORK_CATEGORIES,
  Category,
  CategoryKey
} from "../../data/projectData";\n`;
  const newLines = [...lines.slice(0, startIdx), importStmt, ...lines.slice(endIdx)];
  fs.writeFileSync('app/components/Landing/project.tsx', newLines.join('\n'));
  console.log('Successfully updated project.tsx');
} else {
  console.log('Could not find boundaries in project.tsx');
}
