// Lightweight shim for WP block navigation responsive menu in static export
// Enables opening and closing the off-canvas/overlay menu without WP's interactivity runtime.
(function(){
  function ready(fn){ if(document.readyState!=='loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    const rootNav = document.querySelector('.wp-block-navigation');
    if(!rootNav) return;

    const openBtn = rootNav.querySelector('.wp-block-navigation__responsive-container-open');
    const container = rootNav.querySelector('.wp-block-navigation__responsive-container');
    const closeBtn = rootNav.querySelector('.wp-block-navigation__responsive-container-close');

    if(!container) return;

    function openMenu(){
      container.classList.add('is-menu-open','has-modal-open');
      rootNav.classList.add('is-menu-open');
      try { container.setAttribute('aria-hidden','false'); } catch(e){}
    }
    function closeMenu(){
      container.classList.remove('is-menu-open','has-modal-open');
      rootNav.classList.remove('is-menu-open');
      try { container.setAttribute('aria-hidden','true'); } catch(e){}
    }

    openBtn && openBtn.addEventListener('click', function(e){ e.preventDefault(); openMenu(); });
    closeBtn && closeBtn.addEventListener('click', function(e){ e.preventDefault(); closeMenu(); });

    // Close when clicking a link in the overlay
    container.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ closeMenu(); });
    });

    // ESC to close
    document.addEventListener('keydown', function(e){ if(e.key==='Escape'){ closeMenu(); }});
  });
})();
