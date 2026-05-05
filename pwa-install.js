/* ============================================================
   PWA Install Helper — adds an "Install" button to the page header.
   Drop a <button id="pwaInstallBtn"> into the page; this script will
   show/hide it based on installability and handle the prompt.
   ============================================================ */
(function(){
  "use strict";

  let deferredPrompt = null;

  function getBtn(){ return document.getElementById('pwaInstallBtn'); }

  function showBtn(){
    const btn = getBtn();
    if (btn) btn.style.display = 'inline-flex';
  }
  function hideBtn(){
    const btn = getBtn();
    if (btn) btn.style.display = 'none';
  }

  // Initial state: hidden until eligible
  document.addEventListener('DOMContentLoaded', function(){
    const btn = getBtn();
    if (!btn) return;
    btn.style.display = 'none';

    btn.addEventListener('click', async function(){
      // iOS / Safari fallback (no beforeinstallprompt support)
      if (!deferredPrompt) {
        const ua = navigator.userAgent || '';
        const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
        if (isIOS) {
          alert("📱 ఇన్‌స్టాల్ చేయుటకు:\n\nSafari → Share బటన్ → 'Add to Home Screen' ఎంచుకోండి\n\nTo install: tap Share → Add to Home Screen");
          return;
        }
        alert("ఈ బ్రౌజర్ లో ఇన్‌స్టాల్ సపోర్ట్ లేదు లేదా ఇప్పటికే ఇన్‌స్టాల్ అయినది.\n\nThis browser does not support install or the app is already installed. Try Chrome / Edge on Android, or 'Add to Home Screen' on iOS Safari.");
        return;
      }
      deferredPrompt.prompt();
      try {
        const choice = await deferredPrompt.userChoice;
        if (choice && choice.outcome === 'accepted') hideBtn();
      } catch(e){ /* user dismissed */ }
      deferredPrompt = null;
    });

    // Show button on iOS regardless (since beforeinstallprompt never fires there)
    const ua = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (isIOS && !isStandalone) showBtn();
  });

  window.addEventListener('beforeinstallprompt', function(e){
    e.preventDefault();
    deferredPrompt = e;
    showBtn();
  });

  window.addEventListener('appinstalled', function(){
    deferredPrompt = null;
    hideBtn();
  });
})();
