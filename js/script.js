class Element {
  constructor(selector, name, style) {
    this.selector = selector;
    // this.el = document.querySelector(selector);
    this.name = name;
    this.style = style || '{display:none!important;}';
  }
}

const Unhook = (function () {
  const $ = (sel) => document.querySelector(sel);
  // prettier-ignore
  const STYLE_ID = "style_" + new Array(8).fill().map((_) => Math.floor(Math.random() * 16).toString(16)).join('');
  const STYLE_EL = document.createElement('style');
  STYLE_EL.setAttribute('id', STYLE_ID);

  const S = [
    new Element(".grid-disabled[page-subtype='home']", 'home screen'),
    new Element('#related', 'related'),
    new Element('#comments', 'comments'),
    new Element('#chat', 'chat'),
    // new Element('#comment-teaser', 'comment teaser'),
    // new Element('.html5-endscreen', 'endscreen'),
    // new Element('#primary.ytd-watch-flexy', 'center', '{position:relative;left:49%;transform:translateX(-50%);}'),
    // new Element('#ytd-guide-signin-promo-renderer,a[href*="Login"]', 'login promo'),
  ];

  $('#yt-unhook-btn').addEventListener('click', () => $('#yt-unhook-menu').classList.remove('unhook-hidden'));
  $('#yt-unhook-menu').addEventListener('click', function (e) {
    if (e.target === this) this.classList.add('unhook-hidden');
  });

  // init
  // prettier-ignore
  $('form').insertAdjacentHTML('beforeend', S.map(e => `<label><input type="checkbox" name="${e.name}" />${e.name}</label>`).join("\n"));
  $('form').onchange = _formChange;

  _inject();

  // f(x)
  function _inject() {
    document.body.appendChild(STYLE_EL);
    console.log('INJECT ELEMENT STYLES');
  }

  function _setStyle(styles) {
    STYLE_EL.innerHTML = styles;
    console.log('SET ELEMENT STYLES');
  }

  function _formChange() {
    let checked = [...$('form').querySelectorAll('input')].filter((e) => e.checked).map((e) => e.name);
    let filtered = S.filter((e) => checked.includes(e.name));
    let style = filtered.map((e) => e.selector + e.style).join(' ');
    _setStyle(style);
  }
})();
