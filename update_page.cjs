const fs = require('fs');

const cssToAppend = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); filter: blur(4px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
.animate-fadeIn { 
  animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; 
}
.delay-100 { animation-delay: 0.2s; }
.delay-200 { animation-delay: 0.35s; }
.delay-300 { animation-delay: 0.5s; }

@media (max-width: 768px) {
  .animate-fadeIn { animation-duration: 0.9s; }
}
`;
fs.appendFileSync('app/globals.css', cssToAppend);
console.log('globals.css updated');

let pageContent = fs.readFileSync('app/page.tsx', 'utf8');
const startStyle = pageContent.indexOf('<style jsx>{`');
const endStyle = pageContent.indexOf('\`}</style>') + '\`}</style>'.length;
if (startStyle !== -1 && endStyle !== -1) {
  pageContent = pageContent.substring(0, startStyle) + pageContent.substring(endStyle);
  fs.writeFileSync('app/page.tsx', pageContent);
  console.log('page.tsx updated');
} else {
  console.log('Could not find style tag in page.tsx');
}
