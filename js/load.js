/* --- HTML --- */

const HTML = `\
<button id="yt-unhook-btn"></button>
<div id="yt-unhook-menu"><form action="#"></form></div>
`;

document.body.insertAdjacentHTML('beforeend', HTML);

/* --- CSS --- */

const STYLE_URL = 'https://raw.githack.com/vodnibivol/yt_unhook/main/css/style.css';
document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${STYLE_URL}">`);

/* --- JS --- */

const SCRIPT_URL = 'https://raw.githack.com/vodnibivol/yt_unhook/main/js/script.js';
const SCRIPT = document.createElement('script');
SCRIPT.src = SCRIPT_URL;
document.body.appendChild(SCRIPT);
