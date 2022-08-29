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

window.onload = function () {
  document.body.style.opacity = '1';
};

// if window load not trigerred
setTimeout(function () {
  document.body.style.opacity = '1';
}, 1500);

console.log('INJECTING ..');
