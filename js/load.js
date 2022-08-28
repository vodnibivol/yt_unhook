// ==UserScript==
// @name        yt_unhook_js2
// @description remove distractions from youtube
// @match       https://www.youtube.com/*
// @run-at      document-start
// @remote      https://raw.githubusercontent.com/vodnibivol/yt_unhook/main/js/script.js
// ==/UserScript==

const PATH = 'https://raw.githubusercontent.com/vodnibivol/yt_unhook/main/';

/* --- HTML --- */

const HTML = `\
<button id="yt-unhook-btn"></button>
<div id="yt-unhook-menu"><form action="#"></form></div>
`;

document.body.insertAdjacentHTML('beforeend', HTML);

/* --- CSS --- */

const STYLES = `\
#yt-unhook-btn{z-index:10000;position:absolute;bottom:1rem;left:1rem;border:none;width:30px;height:30px;background:white;-webkit-box-shadow:0 0 10px #00000044;box-shadow:0 0 10px #00000044;border-radius:50%;cursor:pointer;opacity:0.9}#yt-unhook-btn:hover{opacity:1}#yt-unhook-btn:active{-webkit-box-shadow:0 0 7px #00000033;box-shadow:0 0 7px #00000033}#yt-unhook-menu{z-index:10000;position:fixed;top:0;left:0;width:100vw;height:100vh;background:#00000033;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#yt-unhook-menu form{background:white;font-family:Menlo, Consolas, monospace;font-size:13px;border:2px solid black;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}#yt-unhook-menu form label{padding:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#yt-unhook-menu form label input[type='checkbox']{margin-right:10px}#yt-unhook-menu form label:not(:last-child){border-bottom:2px solid #000}.unhook-hidden{display:none !important}
`;

document.head.insertAdjacentHTML("beforeend", "<style>"+STYLES+"</style>");

/* --- JS --- */

const SCRIPT = document.createElement('script');
SCRIPT.src = "https://cdn.jsdelivr.net/gh/vodnibivol/yt_unhook/js/script.js";
document.body.appendChild(SCRIPT);

