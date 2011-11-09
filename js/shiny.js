var shine = function() {
  var red = Math.floor( Math.random() * 256 ),
      green = Math.floor( Math.random() * 256 ),
      blue = Math.floor( Math.random() * 256 );

  document.getElementsByTagName( 'body' )[0].style.backgroundColor = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
  console.log( 'c' );
}

window.addEventListener( 'load', function() {
  document.addEventListener( 'click', shine );
  document.addEventListener( 'keyup', shine );
});
