/* --- F(X) --- */

function _injectScript(url) {
  let el = document.createElement('script');
  el.src = url;
  document.body.appendChild(el);
}

function _injectCss(url) {
  document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${url}">`);
}

/* --- INTERFACE CSS --- */

_injectCss('https://raw.githack.com/vodnibivol/yt_unhook/main/css/style.css');

/* --- INTERFACE HTML --- */

const HTML = `\
<div
      id="yt-unhook-wrapper"
      x-data="{
        menuOpen: false,
        checked: $persist([]).as('UNHOOK_CHECKED'),
        formChange() {
          let html = document.querySelector('html');
          ATTRS.forEach((a) => html.setAttribute(a.for, this.checked.includes(a.for)));
        }
      }"
      x-init="formChange"
    >
      <button id="yt-unhook-btn" @click="menuOpen = true"></button>
      <div id="yt-unhook-menu" x-show="menuOpen">
        <form @click.outside="menuOpen = false" @change="formChange">
          <div class="header">
            <span>Hide Elements...</span>
            <div id="yt-unhook-close" @click="menuOpen = false"></div>
          </div>
          <div class="content">
            <ul>
              <template x-for="(attr, i) in ATTRS">
                <li :key="i">
                  <input type="checkbox" x-model="checked" :id="attr.for" :value="attr.for" />
                  <label :for="attr.for" x-text="attr.name"></label>
                </li>
              </template>
            </ul>
          </div>
        </form>
      </div>
    </div>
`;

document.body.insertAdjacentHTML('beforeend', HTML);

/* --- JS --- */
const ATTRS = [
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

  { for: 'button_left', name: 'Move Button to Left' },
];

_injectScript('https://unpkg.com/@alpinejs/persist@3.10.0/dist/cdn.min.js');
_injectScript('https://unpkg.com/alpinejs@3.10.3/dist/cdn.min.js');
