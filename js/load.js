const PATH = 'https://github.com/vodnibivol/yt_unhook.git/';

/* --- HTML --- */

const HTML = `\
<button id="yt-unhook-btn"></button>
<div id="yt-unhook-menu"><form action="#"></form></div>
`;

document.body.insertAdjacentHTML('beforeend', HTML);

/* --- CSS --- */

const STYLE = document.createElement('link');
STYLE.rel = 'stylesheet';
STYLE.href = PATH + 'css/style.css';
document.head.appendChild(STYLE);

/* --- JS --- */

const SCRIPT = document.createElement('script');
SCRIPT.src = PATH + 'js/script.js';
document.body.appendChild(SCRIPT);
