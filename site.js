(() => {
  'use strict';
  const data = window.WOLFROAD;
  if (!data) return;
  const el = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text) node.textContent = text; return node; };
  function safeUrl(value, host) {
    try { const url = new URL(value); return url.protocol === 'https:' && (!host || url.hostname === host || url.hostname === 'www.' + host) ? url.href : null; } catch { return null; }
  }
  function approved(work) {
    return work.permissionConfirmed === true && typeof work.image === 'string' && /^assets\/[a-zA-Z0-9_./-]+\.(webp|png|jpe?g|avif)$/i.test(work.image) && !work.image.includes('..') && Boolean(work.alt?.trim());
  }
  const dialog = document.querySelector('#art-dialog');
  let opener;
  function imageButton(work, featured) {
    const button = el('button', 'image-button' + (featured ? ' feature-media' : ''));
    button.setAttribute('aria-label', 'Enlarge ' + work.title);
    const img = el('img'); img.src = work.image; img.alt = work.alt; img.loading = featured ? 'eager' : 'lazy'; img.decoding = 'async'; button.append(img);
    button.addEventListener('click', () => {
      opener = button;
      const large = document.querySelector('#dialog-image'); large.src = work.image; large.alt = work.alt;
      document.querySelector('#dialog-title').textContent = work.title;
      document.querySelector('#dialog-caption').textContent = [work.year, 'WolfRoad'].filter(Boolean).join(' · ');
      dialog.showModal();
    });
    img.addEventListener('error', () => { button.replaceWith(placeholder(featured, 'Image unavailable')); }, { once: true });
    return button;
  }
  function placeholder(featured, label = 'Artwork placeholder') {
    const box = el('div', 'art-placeholder' + (featured ? ' feature-media' : ''));
    box.append(el('span', 'placeholder-badge', label));
    const center = el('div', 'placeholder-center'); center.append(el('span', 'star', '✧'), el('small', '', 'Reserved for artist-approved artwork')); box.append(center); return box;
  }
  const first = data.works[0];
  if (first && approved(first)) document.querySelector('#featured-media').replaceWith(imageButton(first, true));
  const original = first && safeUrl(first.source);
  if (original) { const link = document.querySelector('#voices-source'); link.href = original; link.hidden = false; }
  data.works.forEach((work, index) => {
    const card = el('figure', 'gallery-card');
    card.append(approved(work) ? imageButton(work, false) : placeholder(false));
    const caption = el('figcaption'); caption.append(el('span', '', work.title), el('span', 'muted', work.year || (approved(work) ? 'WolfRoad' : 'Awaiting artwork'))); card.append(caption);
    const source = safeUrl(work.source);
    if (source) { const link = el('a', 'text-link artwork-source', 'View original ↗'); link.href = source; card.append(link); }
    document.querySelector('#gallery-grid').append(card);
  });
  if (data.bio?.trim()) document.querySelector('#artist-bio').textContent = data.bio;
  let connected = 0;
  [['deviantArt', 'DeviantArt', 'deviantart.com'], ['furAffinity', 'Fur Affinity', 'furaffinity.net']].forEach(([key, label, host]) => {
    const url = safeUrl(data.profiles[key], host);
    const item = el(url ? 'a' : 'span', 'profile-link', label);
    if (url) { item.href = url; connected++; item.append(el('span', '', '↗')); }
    else { item.classList.add('pending'); item.append(el('small', '', 'Profile pending')); }
    document.querySelector('#profile-links').append(item);
  });
  if (connected === 2) document.querySelector('#contact-note').hidden = true;
  document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => opener?.focus());
})();
