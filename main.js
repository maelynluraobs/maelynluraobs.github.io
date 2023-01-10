/*heading */

(function() {
  const cursor = document.querySelector('.cursor');
  
  const innerCursor = document.querySelector('.inner-cursor');
  
  const followCursor = e => {
    const { clientX: x, clientY: y} = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    
    innerCursor.style.left = x + 'px';
    innerCursor.style.top = y + 'px';
  }
  
  window.addEventListener('mousemove', followCursor);
})();


/* CONTACT */
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


  /* */
