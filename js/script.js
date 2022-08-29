const Unhook = (function () {
  // vars
  const $ = (sel) => document.querySelector(sel);

  const STORAGE_KEY = 'UNHOOK_KEY';

  // events
  $('#yt-unhook-btn').addEventListener('click', _openMenu);
  $('#yt-unhook-menu').addEventListener('click', function (e) {
    if (e.target.matches('#yt-unhook-menu') || e.target.matches('#yt-unhook-close')) _closeMenu();
  });

  // f(x)
  function init() {
    // init
    let injected = ATTRS.map((a) => `<label><input type="checkbox" name="${a.for}" />${a.name}</label>`);
    $('#yt-unhook-menu form .content').insertAdjacentHTML('beforeend', injected.join('\n'));
    $('#yt-unhook-menu form').onchange = _formChange;

    _getStorage();
    _formChange(); // trigger setStyles

    $('#yt-unhook-menu').classList.add('unhook-hidden'); // hide menu by default
  }

  function _openMenu() {
    $('#yt-unhook-menu').classList.remove('unhook-hidden');
  }

  function _closeMenu() {
    $('#yt-unhook-menu').classList.add('unhook-hidden');
  }

  function _getStorage() {
    const savedStyles = localStorage.getItem(STORAGE_KEY);
    if (!!savedStyles) {
      let arr = JSON.parse(savedStyles);
      [...document.querySelectorAll('#yt-unhook-menu form input')].forEach((i) => (i.checked = arr.includes(i.name)));
    }
  }

  function _formChange() {
    let checkedEls = [...document.querySelectorAll('#yt-unhook-menu form input')];
    let checkedForList = checkedEls.filter((e) => e.checked).map((e) => e.name);

    let html = document.querySelector('html');
    ATTRS.forEach((a) => html.setAttribute(a.for, checkedForList.includes(a.for)));

    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedForList)); // set to localStorage. FMT: ["...", "..."]
  }

  return { init };
})();

const ATTRS = [
  { for: 'button_left', name: 'Move Button to Left' },
  { for: 'hide_sign_in', name: 'Hide Sign-in Promo' },

  { for: 'hide_feed', name: 'Hide Home Feed' }, // NOTE: submenu
  // { for: 'hide_redirect_home', name: 'Redirect to Subscriptions' },
  { for: 'hide_sidebar', name: 'Hide Video Sidebar' }, // NOTE: submenu
  { for: 'hide_recommended', name: 'Hide Recommended' },
  { for: 'hide_chat', name: 'Hide Live Chat' },
  { for: 'hide_playlists', name: 'Hide Playlist' },
  { for: 'hide_donate', name: 'Hide Fundraiser' },
  { for: 'hide_transcript', name: 'Hide Transcript, Chapters' },
  { for: 'hide_endscreen', name: 'Hide End Screen Feed' },
  { for: 'hide_cards', name: 'Hide End Screen Cards' },
  { for: 'hide_comments', name: 'Hide Comments' }, // NOTE: submenu
  // { for: 'hide_prof', name: 'Hide Profile Photos' },
  { for: 'hide_mix', name: 'Hide Mixes' },
  { for: 'hide_merch', name: 'Hide Merch, Tickets, Offers' },
  { for: 'hide_meta', name: 'Hide Video Info' }, // NOTE: submenu
  // { for: 'hide_bar', name: 'Hide Buttons Bar' },
  // { for: 'hide_channel', name: 'Hide Channel' },
  // { for: 'hide_desc', name: 'Hide Description' },
  { for: 'hide_header', name: 'Hide Top Header' }, // NOTE: submenu
  { for: 'hide_search_on_video', name: 'Hide Search on Video' },
  { for: 'hide_notifs', name: 'Hide Notifications' },
  // { for: 'hide_left', name: 'Hide Left Sidebar Extra' }, // NOTE: submenu
  { for: 'hide_channels', name: 'Hide Channels' },
  { for: 'hide_bestyt', name: 'Hide Best of YouTube' },
  { for: 'hide_moreyt', name: 'Hide More from YouTube' },
  { for: 'hide_search', name: 'Hide Inapt Search Results' },
  { for: 'hide_trending', name: 'Hide Explore, Trending' },
  { for: 'hide_shorts', name: 'Hide Shorts Tab' },
  { for: 'hide_subs', name: 'Hide Subscriptions' },

  // { for: 'hide_autoplay', name: 'Disable Autoplay' },
  // { for: 'hide_annotations', name: 'Disable Annotations' },
];

Unhook.init();
