var Cylon = require('cylon');

Cylon.robot({
  connections: {
    edison: { adaptor: 'intel-iot' }
  },

  devices: {
	button1: { driver: 'button', pin: 2 },
	button2: { driver: 'button', pin: 3 },
	button3: { driver: 'button', pin: 4 },
    led: { driver: 'led', pin: 13 }
  },

  work: function(my) {
	my.button1.on('push', function(){
		console.log("Button Pressed");
	})
    every((1).second(), my.led.toggle);
  }
}).start();