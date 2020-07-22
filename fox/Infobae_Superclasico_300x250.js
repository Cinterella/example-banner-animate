(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.boca = function() {
	this.initialize(img.boca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,44);


(lib.domingo = function() {
	this.initialize(img.domingo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,89);


(lib.fondo = function() {
	this.initialize(img.fondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.hash_bocaFOX = function() {
	this.initialize(img.hash_bocaFOX);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,29);


(lib.hash_riverFOX = function() {
	this.initialize(img.hash_riverFOX);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,29);


(lib.jugadores = function() {
	this.initialize(img.jugadores);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,109);


(lib.pack_futbol = function() {
	this.initialize(img.pack_futbol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,27);


(lib.pack_futbol_com_ar = function() {
	this.initialize(img.pack_futbol_com_ar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,15);


(lib.perfecto = function() {
	this.initialize(img.perfecto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,15);


(lib.relatores = function() {
	this.initialize(img.relatores);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.river = function() {
	this.initialize(img.river);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,44);


(lib.suscribite = function() {
	this.initialize(img.suscribite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,17);


(lib.VS = function() {
	this.initialize(img.VS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,32);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.versus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VS();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.versus, new cjs.Rectangle(0,0,63,32), null);


(lib.un_dia_perfecto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.perfecto();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.un_dia_perfecto, new cjs.Rectangle(0,0,133,15), null);


(lib.suscribite_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.suscribite();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.suscribite_1, new cjs.Rectangle(0,0,108,17), null);


(lib.riverFOX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hash_riverFOX();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.riverFOX, new cjs.Rectangle(0,0,181,29), null);


(lib.river_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.river();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.river_1, new cjs.Rectangle(0,0,146,44), null);


(lib.relatores_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.relatores();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.relatores_1, new cjs.Rectangle(0,0,300,250), null);


(lib.pack_futbol_com_ar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pack_futbol_com_ar();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pack_futbol_com_ar_1, new cjs.Rectangle(0,0,152,15), null);


(lib.pack_futbol_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pack_futbol();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pack_futbol_1, new cjs.Rectangle(0,0,128,27), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,136,109), null);


(lib.jugadores_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jugadores();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.jugadores_1, new cjs.Rectangle(0,0,300,250), null);


(lib.fondo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fondo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondo_1, new cjs.Rectangle(0,0,300,250), null);


(lib.domingo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.domingo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1.079);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.domingo_1, new cjs.Rectangle(0,0,305,96), null);


(lib.bocaFOX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hash_bocaFOX();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bocaFOX, new cjs.Rectangle(0,0,176,29), null);


(lib.boca_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boca();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boca_1, new cjs.Rectangle(0,0,145,44), null);


// stage content:
(lib.Infobae_Superclasico_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_419 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(419).call(this.frame_419).wait(1));

	// borde
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(420));

	// logo.png
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(265.1,227.6,0.706,0.706,0,0,0,68.2,54.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(374).to({scaleX:1,scaleY:1,x:160.2,y:222.7},15,cjs.Ease.get(1)).wait(31));

	// domingo.png
	this.instance_1 = new lib.domingo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123.1,97.6,0.57,0.57,0,0,0,152.8,44.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(379).to({_off:false},0).to({y:88.6,alpha:1},20,cjs.Ease.get(1)).wait(21));

	// suscribite.png
	this.instance_2 = new lib.suscribite_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(91,133.7,1,1,0,0,0,54,8.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(389).to({_off:false},0).to({y:130.2,alpha:1},20,cjs.Ease.get(1)).wait(11));

	// pack_futbol.png
	this.instance_3 = new lib.pack_futbol_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(204,133.5,1,1,0,0,0,64,13.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(389).to({_off:false},0).to({y:130,alpha:1},20,cjs.Ease.get(1)).wait(11));

	// pack_futbol_com_ar.png
	this.instance_4 = new lib.pack_futbol_com_ar_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(113,156.5,1,1,0,0,0,76,7.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(399).to({_off:false},0).to({y:148.5,alpha:1},20,cjs.Ease.get(1)).wait(1));

	// perfecto.jpg
	this.instance_5 = new lib.un_dia_perfecto();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160.8,175.5,1,1,0,0,0,66.5,7.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({y:171.5,alpha:1},20).wait(144).to({scaleX:3.6,scaleY:3.6,x:177.9,y:286.2,alpha:0},15).to({_off:true},1).wait(225));

	// boca.jpg
	this.instance_6 = new lib.boca_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(122.5,98,1,1,0,0,0,72.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:129.5},35,cjs.Ease.get(1)).wait(144).to({scaleX:3.6,scaleY:3.6,x:65,y:21.2,alpha:0},15).to({_off:true},1).wait(225));

	// VS.png
	this.instance_7 = new lib.versus();
	this.instance_7.parent = this;
	this.instance_7.setTransform(95.2,128.4,0.334,0.331,0,0,0,31.9,16.4);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},35,cjs.Ease.get(1)).wait(144).to({regY:16.5,scaleX:1.2,scaleY:1.19,x:-58.7,y:131,alpha:0},15).to({_off:true},1).wait(225));

	// river.jpg
	this.instance_8 = new lib.river_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(185,142,1,1,0,0,0,73,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:178.5},35,cjs.Ease.get(1)).wait(144).to({regY:22.1,scaleX:3.6,scaleY:3.6,x:241.6,y:180,alpha:0},15).to({_off:true},1).wait(225));

	// jugadores
	this.instance_9 = new lib.jugadores_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150.2,125.1,1,1,0,0,0,150.2,125.1);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:150.1,x:150,alpha:1},20,cjs.Ease.get(1)).to({regX:150,regY:125,scaleX:1.04,scaleY:1.04,y:125},154).wait(5).to({alpha:0},15).to({_off:true},1).wait(225));

	// hash_bocaFOX.png
	this.instance_10 = new lib.bocaFOX();
	this.instance_10.parent = this;
	this.instance_10.setTransform(28.5,12,0.365,0.364,0,0,0,89,15.8);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:37.7,alpha:1},39,cjs.Ease.get(1)).wait(381));

	// hash_riverFOX.png
	this.instance_11 = new lib.riverFOX();
	this.instance_11.parent = this;
	this.instance_11.setTransform(268.3,12,0.365,0.364,0,0,0,91.2,15.8);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:258.3,alpha:1},39,cjs.Ease.get(1)).wait(381));

	// relatores.png
	this.instance_12 = new lib.relatores_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.1,253.6,0.99,0.99,0,0,0,150.2,250.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(194).to({_off:false},0).to({regX:150,regY:250,scaleX:1,scaleY:1,x:150,y:250,alpha:1},165,cjs.Ease.get(1)).wait(5).to({alpha:0},10).wait(46));

	// fondo
	this.instance_13 = new lib.fondo_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.1,147.9,1.15,1.181,0,0,0,149.9,125.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:150.1,regY:125,scaleX:1,scaleY:1,y:125.1},419).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(127.7,124.5,345,295.8);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/boca.jpg?1537314269186", id:"boca"},
		{src:"images/domingo.png?1537314269186", id:"domingo"},
		{src:"images/fondo.jpg?1537314269186", id:"fondo"},
		{src:"images/hash_bocaFOX.png?1537314269186", id:"hash_bocaFOX"},
		{src:"images/hash_riverFOX.png?1537314269186", id:"hash_riverFOX"},
		{src:"images/jugadores.png?1537314269186", id:"jugadores"},
		{src:"images/logo.png?1537314269186", id:"logo"},
		{src:"images/pack_futbol.png?1537314269186", id:"pack_futbol"},
		{src:"images/pack_futbol_com_ar.png?1537314269186", id:"pack_futbol_com_ar"},
		{src:"images/perfecto.jpg?1537314269186", id:"perfecto"},
		{src:"images/relatores.png?1537314269186", id:"relatores"},
		{src:"images/river.jpg?1537314269186", id:"river"},
		{src:"images/suscribite.png?1537314269186", id:"suscribite"},
		{src:"images/VS.png?1537314269186", id:"VS"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;