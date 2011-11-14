var shine = {
  totalInteractions: 0,
  interactionsSinceLastEvent: 0,
  nextEventAt: 0,
  paper: Raphael( 0, 0, $(window).width(), $(window).height() ),
  center: { x: Math.floor( $(window).width() / 2 ), y: Math.floor( $(window).height() / 2 ) },

  random: function( max ) {
    return Math.floor( Math.random() * max );
  },

  background: {
    hue: 0,
    saturation: 0,
    lightness: 0,

    randomize: function() {
      shine.background.hue = shine.random( 360 );
      shine.background.saturation = shine.random( 100 );
      shine.background.lightness = shine.random( 100 );

      return shine.background;
    },

    set: function() {
      var body = document.getElementsByTagName( 'body' )[0];

      body.style.backgroundColor = 'hsl(' + 
        shine.background.hue + ', ' +
        shine.background.saturation + '%, ' +
        shine.background.lightness + '%)';

      return shine.background;
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
      shine.nextEventAt = Math.floor( Math.random() * 10 );
    }

    shine.background.randomize().set();
    console.log( shine.interactionsSinceLastEvent + ':' + shine.nextEventAt );
  }
}

window.addEventListener( 'load', function() {
  document.addEventListener( 'click', shine.on );
  document.addEventListener( 'keypress', shine.on );
});
