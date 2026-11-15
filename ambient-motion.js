(()=>{'use strict';const root=document.body;const sync=()=>root.classList.toggle('page-idle',document.hidden);document.addEventListener('visibilitychange',sync);sync()})();
