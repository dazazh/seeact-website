(()=>{'use strict';
const body=document.body,reduced=matchMedia('(prefers-reduced-motion:reduce)'),fine=matchMedia('(pointer:fine)'),hero=document.querySelector('.home-hero');
let disabled=()=>reduced.matches||body.classList.contains('motion-paused')||body.classList.contains('intro-playing');
// Glass catches the pointer without moving its content or hit targets.
const surfaces=[...document.querySelectorAll('.note-card,.lab-console,.step-panel,.hero-corner,.btn-primary')];
surfaces.forEach(el=>{el.classList.add('reactive-glass');el.addEventListener('pointermove',e=>{if(disabled()||!fine.matches||e.pointerType==='touch')return;const r=el.getBoundingClientRect();el.style.setProperty('--glow-x',`${e.clientX-r.left}px`);el.style.setProperty('--glow-y',`${e.clientY-r.top}px`);el.classList.add('is-lit')},{passive:true});el.addEventListener('pointerleave',()=>el.classList.remove('is-lit'))});
})();
