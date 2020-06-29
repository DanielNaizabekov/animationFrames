document.addEventListener('DOMContentLoaded', () => {
  const showBtn = document.querySelector('.show-btn');
  const hideBtn = document.querySelector('.hide-btn');
  const container = document.querySelector('.container');
  
  
  hideBtn.onclick = () => {
    // let handler = function() {
    //   container.style.display = 'none';
    //   container.classList.remove('v-leave-active');
    //   container.classList.remove('v-leave-to');
    //   container.removeEventListener('animationend', handler);
    // };

    // container.classList.add('v-leave');
    // raf(() => {
    //   container.classList.add('v-leave-active');
    //   container.classList.add('v-leave-to');
    //   container.classList.remove('v-leave');
    // });
    // container.addEventListener('animationend', handler);
    DLAnimate.hide(container, {name: 'v', track: 'animation'});
  };

  

  showBtn.onclick = () => {
    // let handler = function() {
    //   container.classList.remove('v-enter-active');
    //   container.classList.remove('v-enter-to');
    //   container.removeEventListener('animationend', handler);
    // };

    // container.style.display = 'block';
    // container.classList.add('v-enter');
    // raf(() => {
    //   container.classList.add('v-enter-active');
    //   container.classList.add('v-enter-to');
    //   container.classList.remove('v-enter');
    // });
    // container.addEventListener('animationend', handler);
    DLAnimate.show(container, {name: 'v', track: 'animation'});
  };


  function raf(fn) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        fn();
      });
    });
  };


});