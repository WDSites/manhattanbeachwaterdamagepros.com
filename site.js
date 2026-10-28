(function () {
  var header = document.querySelector('.site-header');
  var btn = document.querySelector('.menu-toggle');
  if (!header || !btn) { return; }
  var mq = window.matchMedia('(max-width:900px)');
  function setOpen(open) {
    header.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
    document.documentElement.style.overflow = (open && mq.matches) ? 'hidden' : '';
  }
  btn.addEventListener('click', function () { setOpen(!header.classList.contains('open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); } });
  var onChange = function () { if (!mq.matches) { setOpen(false); } };
  if (mq.addEventListener) { mq.addEventListener('change', onChange); } else { mq.addListener(onChange); }
  var links = document.querySelectorAll('#primary-menu a');
  for (var i = 0; i < links.length; i++) { links[i].addEventListener('click', function () { setOpen(false); }); }
}());
