var shine = {
  totalInteractions: 0,
  interactionsSinceLastEvent: 0,
  nextEventAt: 0,
  paper: Raphael( 0, 0, $(window).width(), $(window).height() ),
  center: { x: Math.floor( $(window).width() / 2 ), y: Math.floor( $(window).height() / 2 ) },

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

  doEvent: function() {
    var circle;

    circle = shine.paper.circle( 50, 40, 10 );
    circle.attr( "fill", "#f00" );
    circle.attr( "stroke", "#000" );

  },

  on: function() {
    shine.totalInteractions++;
    shine.interactionsSinceLastEvent++;

    shine.paper.clear();
    if( shine.interactionsSinceLastEvent >= shine.nextEventAt ) {
      shine.doEvent();
      shine.interactionsSinceLastEvent = 0;
      shine.nextEventAt = Math.floor( Math.random() * 100 );
    }
    var body = document.getElementsByTagName( 'body' )[0];

    shine.background.randomize();
    body.style.backgroundColor = shine.background.toHex();
    console.log( shine.interactionsSinceLastEvent + ':' + shine.nextEventAt );
  }
}

window.addEventListener( 'load', function() {
  document.addEventListener( 'click', shine.on );
  document.addEventListener( 'keypress', shine.on );
});
