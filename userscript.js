// ==UserScript==
// @name        yt_unhook_js
// @description remove distractions from youtube
// @match       https://www.youtube.com/*
// @run-at      document-start
// ==/UserScript==

document.body.style.opacity = '0';

let el = document.createElement('script');
el.src = 'https://raw.githack.com/vodnibivol/yt_unhook/main/js/load.js';
document.body.appendChild(el);

el.onload = function () {
  document.body.style.opacity = '1';
};

console.log('INJECTING ..');
