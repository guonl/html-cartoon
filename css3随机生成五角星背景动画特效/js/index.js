/* DaTouWang URL: www.datouwang.com */
document.body.addEventListener('mousemove', function(e) {
  if (e.target.matches('css-doodle')) {
    e.target.refresh();
  }  
})