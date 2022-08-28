/* --- INTERFACE CSS --- */

const MAIN_STYLE_URL = 'https://raw.githack.com/vodnibivol/yt_unhook/main/css/style.css';
document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${MAIN_STYLE_URL}">`);

const HTML_STYLE_URL = 'https://raw.githack.com/vodnibivol/yt_unhook/main/css/style.css';
document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${HTML_STYLE_URL}">`);

/* --- INTERFACE HTML --- */

const HTML = `\
<button id="yt-unhook-btn"></button>
<div id="yt-unhook-menu">
  <form action="#">
    <div class="header">
      <span>Hide...</span>
      <div id="yt-unhook-close"></div>
    </div>
    <div class="content"></div>
  </form>
</div>
`;

document.body.insertAdjacentHTML('beforeend', HTML);

/* --- INTERFACE JS --- */

const SCRIPT_URL = 'https://raw.githack.com/vodnibivol/yt_unhook/main/js/script.js';
const SCRIPT = document.createElement('script');
SCRIPT.src = SCRIPT_URL;
document.body.appendChild(SCRIPT);
