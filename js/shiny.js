var shine = {
    totalInteractions: 0,
    interactionsSinceLastEvent: 0,
    nextEventAt: 0,

    random256: function() {
      return Math.floor( Math.random() * 256 );
    },

    background: {
      red: 0,
      green: 0,
      blue: 0,
      toHex: function() {
        return "#" + shine.background.red.toString(16) +
                     shine.background.green.toString(16) +
                     shine.background.blue.toString(16);
      },
      randomize: function() {
        shine.background.red = shine.random256();
        shine.background.green = shine.random256();
        shine.background.blue = shine.random256();
      }
    },

    on: function() {
      var body = document.getElementsByTagName( 'body' )[0];
          shine.background.randomize();
          body.style.backgroundColor = shine.background.toHex();
    }
}

window.addEventListener( 'load', function() {
  document.addEventListener( 'click', shine.on );
  document.addEventListener( 'keypress', shine.on );
});
