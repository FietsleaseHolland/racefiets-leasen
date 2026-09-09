(function(){
  var iframe = document.getElementById('flc-iframe');
  if (iframe) {
    var base = iframe.getAttribute('data-base-src');
    if (base) {
      var sep = base.indexOf('?') === -1 ? '?' : '&';
      iframe.src = base + sep + 'pageurl=' + encodeURIComponent(window.location.href);
    }
  }
  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'flc-height' && e.data.height > 100) {
      var el = document.getElementById('flc-iframe');
      if (el) { el.style.height = e.data.height + 'px'; }
    }
  });
})();
