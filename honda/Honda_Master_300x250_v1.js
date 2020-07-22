(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.auto_300x250 = function() {
	this.initialize(img.auto_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.fondo_300x250 = function() {
	this.initialize(img.fondo_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,176);


(lib.piso_300x250 = function() {
	this.initialize(img.piso_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,74);// helper functions:

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


(lib.der_circ_rojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E53A34").s().p("AuLOMQAAlyCPlRQCKlFD7j7QD7j7FFiKQFRiPFyAAIAAcXg");
	this.shape.setTransform(90.8,90.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.der_circ_rojo, new cjs.Rectangle(0,0,181.6,181.6), null);


(lib.circ_amarillo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7C279").s().p("ArCLDIAA2FQEgAAEGBvQD9BsDEDDQDDDEBsD9QBvEGAAEgg");
	this.shape.setTransform(0,70.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circ_amarillo, new cjs.Rectangle(-70.7,0,141.4,141.4), null);


(lib.tenela = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000100").s().p("AgKAPIAAgdIAVAAIAAAdg");
	this.shape.setTransform(53.2,14.7,1.126,1.131);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000100").s().p("AAnBJIgOgkIgxAAIgOAkIgdAAIA4iQIAXAAIA4CQgAgUARIApAAIgVg6g");
	this.shape_1.setTransform(43.4,8.2,1.126,1.131);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000100").s().p("AgNBJIAAg0Ig1hcIAfAAIAjBGIAkhGIAeAAIg0BdIAAAzg");
	this.shape_2.setTransform(28.7,8.2,1.126,1.131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000100").s().p("AAnBFIgQgsIgvAAIgPAsIgSAAIAviJIAVAAIAvCJgAgVAMIApAAIgUhAIAAAAg");
	this.shape_3.setTransform(10.3,8.6,1.126,1.131);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000100").s().p("AglBFIAAiJIARAAIAAB6IA6AAIAAAPg");
	this.shape_4.setTransform(-1.1,8.6,1.126,1.131);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000100").s().p("AgmBFIAAiJIBKAAIAAAPIg4AAIAAAsIA1AAIAAANIg1AAIAAAyIA7AAIAAAPg");
	this.shape_5.setTransform(-11.9,8.6,1.126,1.131);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000100").s().p("AAiBFIgrhFQgRgbgJgTIAAAAQABAbAAAdIAAA7IgRAAIAAiJIATAAIAsBFQAPAYAJAUIABAAQgCgYAAgfIAAg6IARAAIAACJg");
	this.shape_6.setTransform(-25.1,8.6,1.126,1.131);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000100").s().p("AgmBFIAAiJIBKAAIAAAPIg4AAIAAAsIA0AAIAAANIg0AAIAAAyIA7AAIAAAPg");
	this.shape_7.setTransform(-37.4,8.6,1.126,1.131);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000100").s().p("AgIBFIAAh6IgqAAIAAgPIBlAAIAAAPIgqAAIAAB6g");
	this.shape_8.setTransform(-48.8,8.6,1.126,1.131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tenela, new cjs.Rectangle(-54.5,0,109,16.4), null);


(lib.piso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.piso_300x250();
	this.instance.parent = this;
	this.instance.setTransform(-150,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.piso, new cjs.Rectangle(-150,-37,300,74), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5BRQgQgDgJgGQgIgHgEgMQgEgNgCgTQgDgUABgQIAAgcQACgTAMgJQAIgGAQgDQAKgCAWgBIBBAAQAWABAKACQAQADAHAGQANAJACATIABAcIgDAkIgGAgQgFANgHAGQgIAGgQADQgSADgpAAQgoAAgRgDgAgehMQgUABgMACQgOADgGAHQgHAHgCANQgDATACAaQACAfAFAOQAEANAGAFQAHAHARACQAQADAjAAQAkAAAQgDQARgDAHgGQAHgFADgNQADgKAEgjQACgYgDgVQgCgNgHgHQgGgHgPgDQgMgCgSgBIgggBIgeABg");
	this.shape.setTransform(-51.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAVAmQgDgEgIgCIgTAAQgIACgDAEQgEAGgGAbIgVgBIgKiLIAOgBIALAvQAHAcAFAGQAFAHAKABIAJABIAJgBQALgBAFgHQAFgGAHgcIALgvIAOABIgEA/IgGBMIgUABQgJgdgCgEg");
	this.shape_1.setTransform(-51.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhHAoQgSgQAAgYQAAgYASgPQAXgTAwAAQAxAAAXATQASAPAAAYQAAAYgSAQQgXATgxAAQgwAAgXgTgAgdgcQgKAJABATQgBAUAKAJQAJAJAUAAQAVAAAJgJQAJgJAAgUQAAgTgJgJQgJgJgVAAQgUAAgJAJg");
	this.shape_2.setTransform(-6.5,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVA4QgIAAgDgGIg6hLIAAA2QAAAJAIABIAPABIAAAQIhHAAIAAgQIAOgBQAIgBAAgJIAAg5QAAgJgIgBIgOgCIAAgPIBMAAQAHABAEAEIA6BNIAAg3QAAgJgIgBIgPgCIAAgPIBHAAIAAAPIgOACQgIABAAAJIAABUg");
	this.shape_3.setTransform(12.7,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJA4IAAgQIAMgBQAMgBgGgJIgFgHIhDAAIgFAIQgCAEACADQABABAEABIAMABIAAAQIhHAAIAAgQIAPgBQAFgBADgGIAmg8QACgDgCgDQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAIgUgDIAAgPIBUAAQAGAAAFAIIAzBNQAGAIAGABIAOABIAAAQgAAKACIgWghIgVAhIArAAg");
	this.shape_4.setTransform(51.1,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhbA4IAAgQIAPgBQAIgBAAgJIAAg6QAAgIgIgBIgNgCIAAgPIBsAAQAhAAATAOQAVAOAAAbQAAAcgVAOQgTANghABgAgZAiIAkAAQARAAAGgIQAHgIAAgSQAAgRgHgIQgHgIgQAAIgkAAg");
	this.shape_5.setTransform(32.3,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMA4IAAgQIAPgBQAHgBAAgJIAAgRIhDAAIAAARQAAAJAHABIAPABIAAAQIhZAAIAAgQIAPgBQAHgBAAgJIAAg5QAAgJgHgBIgPgCIAAgPIBZAAIAAAPIgPACQgHABAAAJIAAASIBDAAIAAgSQAAgJgHgBIgPgCIAAgPIBZAAIAAAPIgPACQgIABAAAJIAAA5QAAAJAIABIAPABIAAAQg");
	this.shape_6.setTransform(-26.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-61.5,-8.3,123.1,16.8), null);


(lib.izq_circ_rojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E53A34").s().p("AvXPYIAA+vQGQAAFuCaQFgCWEREQQEQERCWFgQCaFuAAGQg");
	this.shape.setTransform(98.4,98.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.izq_circ_rojo, new cjs.Rectangle(0,0,196.9,196.9), null);


(lib.izq_circ_negro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("Am7G8IAAt3QC1AAClBGQCeBDB7B7QB6B7BECeQBFClABC1g");
	this.shape.setTransform(0,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.izq_circ_negro, new cjs.Rectangle(-44.3,0,88.7,88.8), null);


(lib.hrv_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhaAbIAUg0IChAAIgSA0g");
	this.shape.setTransform(25.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACEByQgbgGgVgSQiKhuABgCIBGAAQA6AAAagDQANgDANgGQANgFAAgZQAAgNgYAAIhagBIhZABIgZBBQgcBGgKAgQgEAMgHAEQgGAEgLABIhlAAIBVjlIFJAAIAXACQAPABAGACIALAFQAcAPACAbQABAWgKAUQgLATgTAKQgKAFgKACQggAHglgCICMBmIhDAAQgkgBgVgEg");
	this.shape_1.setTransform(-10.7,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA9B0IAghdIi0AAIgEAAQgNACgJAMQgFAHgGARQgVA3gBAAIh2AAIBRjnIB3AAIggBZQCkAAAfgBQAFAAAHgIQAGgHADgIQAag/ACgCIB1AAIgnBuQgiBegLAbg");
	this.shape_2.setTransform(-62.8,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai6BzIhEjmIB1AAIA2C2IAjAAQAPgDANgOICnilIBsAAIhpBhQhpBjgOAOQgMANgVAGIgTABg");
	this.shape_3.setTransform(63.9,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hrv_mc, new cjs.Rectangle(-89.3,-12,178.6,24.1), null);


(lib.fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fondo_300x250();
	this.instance.parent = this;
	this.instance.setTransform(-150,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondo, new cjs.Rectangle(-150,-88,300,176), null);


(lib.der_circ_amarillo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(251,139,51,0.498)").s().p("AlhFiIAArDQCRAACDA4QB9A2BjBiQDPDOAAElg");
	this.shape.setTransform(35.4,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.der_circ_amarillo, new cjs.Rectangle(0,0,70.7,70.8), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AuFAHIAAgNIcLAAIAAANg");
	this.shape.setTransform(0,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmBdQgWgHgQgMIARghQABADAIAEIAOAIQAHADANAEQAMACAJAAQAgAAAAgUQAAgHgEgEQgEgEgGgDQgHgEgJgCIgUgGQgQgEgJgFQgLgFgGgEQgGgGgEgIQgDgIAAgMQAAgPAFgLQAGgMAJgHQAJgHAOgFQAOgEANAAQAUAAASAGQASAHAMAJIgRAeIgHgFQgDgCgJgEIgQgGQgIgCgJAAQgOAAgJAGQgHAGAAAKQAAAFACAFQADAEAGADIAOAGIASAFIAaAIQAMAFAIAFQAHAGAGAKQAEAJAAANQAAAQgGALQgGALgKAHQgLAHgMADQgMADgQAAQgVAAgVgGg");
	this.shape_1.setTransform(81.7,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA0B9IgSgwIhEAAIgRAwIgoAAIBMjCIAfAAIBMDCgAgbAzIA2AAIgbhOgAgNhcIAOghIAiAAIgaAog");
	this.shape_2.setTransform(64.1,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA9BhIAAh/IgzBeIgTAAIgzheIAAB/IglAAIAAjCIApAAIA4BvIA6hvIApAAIAADCg");
	this.shape_3.setTransform(43,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhDB9IAAjCICEAAIAAAiIheAAIAAAtIBRAAIAAAgIhRAAIAAAyIBgAAIAAAhgAgMhcIAOghIAjAAIgaAog");
	this.shape_4.setTransform(16.8,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdBaQgSgJgLgOQgNgPgGgRQgHgRAAgTQAAgRAGgSQAHgSAMgNQAMgOARgIQASgJAUAAQAaAAAUAMQATAMAJATIgdAUQgEgJgFgFQgFgGgGgDQgFgDgIgCQgGgBgHAAQgMAAgKAFQgKAGgHAJQgHALgDAKQgEALAAAMQAAALAEANQAEALAHAKQAIAJAKAGQAJAFAMAAIANgBQAFgBAIgEQAHgFAEgFQAFgEAEgJIAfASQgFALgIAIQgIAIgLAGQgMAGgLADQgMADgLAAQgSAAgSgJg");
	this.shape_5.setTransform(-1.1,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglBaQgRgIgMgOQgMgMgHgUQgHgRABgTQAAgSAGgTQAIgQAMgPQAOgOAQgIQARgIATAAQAUAAARAJQARAIAMAPQAMANAHASQAGARAAASQABAUgIASQgGARgNAOQgMAOgRAHQgSAJgTAAQgTAAgSgJgAgWg6QgKAGgHAIQgHAJgEANQgEANABAJQAAAMADAMQAFANAGAIQAFAIAMAHQALAGAMAAQANgBAJgFQALgGAGgJQAIgKADgLQADgOABgKQAAgKgFgNQgDgMgIgKQgGgIgLgFQgIgGgOAAQgMAAgKAGg");
	this.shape_6.setTransform(-20.6,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA2BhIhkh8IAAB8IglAAIAAjCIAdAAIBkCAIAAh/IAmAAIAADBg");
	this.shape_7.setTransform(-41.2,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglBaQgRgHgMgPQgMgMgHgUQgGgRgBgTQAAgSAHgTQAIgQAMgPQANgOAQgIQATgIASAAQAUAAARAJQARAIAMAPQAMAPAHAQQAGATABAQQAAAUgHASQgIARgMAOQgNAOgQAHQgSAJgTAAQgTAAgSgJgAgWg6QgJAFgJAJQgGAKgEAMQgEANAAAJQABAMAEAMQADANAHAIQAGAIALAHQALAGALAAQANgBAKgFQAJgGAJgJQAHgLACgKQAEgNABgLQgBgKgEgNQgDgMgHgKQgHgIgLgFQgJgGgNAAQgLAAgLAGg");
	this.shape_8.setTransform(-61.8,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdBaQgRgJgMgOQgNgPgGgRQgHgRAAgTQAAgSAHgRQAGgRAMgOQAMgOARgIQASgJAVAAQAZAAAUAMQATAMAJATIgdAUQgDgIgGgGQgFgGgGgDQgFgDgIgCIgNgBQgLAAgLAFQgLAHgGAIQgGAJgEAMQgEALAAAMQAAALAEANQAEAMAIAJQAHAJAKAGQAJAFAMAAIANgBIANgFQAGgEAFgGQAGgFADgIIAfASQgFALgIAIQgJAJgKAFQgMAGgLADQgLADgMAAQgSAAgSgJg");
	this.shape_9.setTransform(-80.8,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-90.2,0,180.5,27.9), null);


(lib.circ_amarillo_chico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7C279").s().p("AlmNSQimhGh/iAQiAiAhGilQhIisAAi7QAAi7BIirQBGimCAh/QCAiAClhGQCrhIC7AAQC7AACsBIQClBGCACAQCAB/BGCmQBICrAAC7QAAC7hICsQhGCliACAQiACAilBGQisBIi7AAQi7AAirhIg");
	this.shape.setTransform(92.2,92.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circ_amarillo_chico, new cjs.Rectangle(0,0,184.5,184.5), null);


(lib.cartel_rojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGKBZQgPgEgNgKIAMgYIAHAFIALAGIAPAFQAHACAJAAQAXAAAAgPQAAgFgCgDQgDgEgFgCIgMgFIgQgDIgSgHQgHgDgFgFQgFgFgDgFQgCgHAAgHQAAgLADgJQAEgIAIgGQAHgGAKgDQAKgDAKAAQAQAAANAGQANAEAJAHIgMAWIgGgDIgJgFIgLgEQgHgCgHABQgLAAgGADQgFAFAAAIQAAAEACADIAGAEIALAFIANADIAUAHQAJACAFAGQAHAFADAGQADAHAAAKQAAAMgEAIQgFAJgHAEQgHAGgKACQgKACgKAAQgRAAgQgFgAMCBXQgNgGgJgLQgIgKgFgOQgFgNgBgOQABgNAFgMQAEgNAJgKQAJgKANgHQAMgGARAAQATAAAPAIQAOAKAGAOIgVAOQgDgGgEgEQgDgEgFgDQgFgCgEgBIgKgBQgKAAgIAEQgHAFgFAGQgFAHgCAHQgDAJAAAJQAAAJADAJQADAJAFAHQAGAGAHAEQAHAFAJAAIAKgBQAFgCAEgDQAFgCAEgEQAEgEADgGIAWANQgDAIgGAGQgGAHgIAEQgIAEgJACQgIACgJAAQgPABgNgHgAg1BYQgMgHgJgKQgJgKgGgOQgEgNAAgOQAAgOAFgNQAFgNAJgKQAJgLANgFQANgHAPAAQAPABAMAGQAMAGAKALQAIAKAGANQAEANAAANQAAAPgFANQgFANgJAKQgKAKgMAHQgMAFgPAAQgPAAgNgFgAgpgXQgIAEgGAHQgEAHgDAHQgDAJAAAJQAAAJADAJQACAJAGAHQAFAGAIAEQAHAFAJAAQAKAAAIgFQAHgEAFgGQAEgIAEgJQACgIAAgJQAAgKgDgIQgDgIgFgGQgEgIgIgDQgHgEgKAAQgJAAgHAEgAjwBXQgMgGgKgLQgJgKgEgOQgGgNAAgOQAAgNAGgMQAEgNAJgKQAIgKANgHQANgGARAAQATAAAOAIQAOAKAIAOIgWAOQgCgGgEgEIgJgHQgEgCgFgBIgKgBQgKAAgHAEQgIAFgFAGQgFAHgDAHQgCAJAAAJQAAAJADAJQADAJAFAHQAFAGAIAEQAIAFAJAAIAKgBQAEgCAFgDQAEgCAEgEQAEgEACgGIAXANQgCAIgHAGQgGAHgIAEQgIAEgJACQgJACgIAAQgPABgNgHgAn6BXQgMgGgJgLQgKgKgFgOQgEgNgBgOQABgNAEgMQAFgNAJgKQAJgKANgHQAMgGARAAQATAAAPAIQAOAKAGAOIgVAOQgDgGgEgEQgDgEgFgDQgFgCgFgBIgJgBQgKAAgIAEQgHAFgFAGQgFAHgCAHQgDAJAAAJQAAAJADAJQADAJAFAHQAGAGAHAEQAHAFAJAAIAKgBQAFgCAEgDQAFgCAEgEQAEgEADgGIAWANQgDAIgGAGQgGAHgIAEQgIAEgJACQgJACgIAAQgPABgNgHgAwCBYQgNgHgIgKQgJgKgGgOQgEgNAAgOQAAgOAFgNQAFgNAKgKQAJgLAMgFQANgHAPAAQAPABANAGQAMAGAKALQAJAKAEANQAFANAAANQAAAPgFANQgFANgJAKQgKAKgMAHQgNAFgPAAQgPAAgNgFgAv3gXQgHAEgGAHQgEAHgDAHQgDAJAAAJQAAAJADAJQACAJAGAHQAFAGAHAEQAIAFAJAAQAKAAAIgFQAHgEAGgGQAEgIAEgJQACgIAAgJQAAgKgDgIQgDgIgFgGQgFgIgIgDQgHgEgKAAQgJAAgIAEgASTBcIAAgdIAXAAIAAAdgAQjBcIAAiQIAcAAIAAB4IBJAAIAAAYgAP5BcIgNgkIgzAAIgNAkIgeAAIA6iQIAWAAIA6CQgAO+AkIApAAIgUg5gANmBcIAAiPIAcAAIAACPgAJrBcIAAiQIBjAAIAAAZIhHAAIAAAiIA+AAIAAAXIg+AAIAAAmIBJAAIAAAYgAHxBcIAAiQIA9AAQAKABAJAEQAJAEAFAHQAGAHAEAJQADAIAAAJQAAAIgDAJQgDAIgGAHQgFAHgJAEQgJAEgKAAIgiAAIAAAwgAINATIAhAAQAHAAAGgGQAFgGAAgKQAAgFgCgFIgEgHQgCgEgEgBQgEgBgEgBIgfAAgAECBcIAAiQIBjAAIAAAZIhIAAIAAAiIA+AAIAAAXIg+AAIAAAmIBJAAIAAAYgACjBcIhKhcIAABcIgcAAIAAiQIAWAAIBMBfIAAheIAbAAIAACPgAiLBcIAAiPIAcAAIAACPgAk5BcIgNgkIgzAAIgNAkIgeAAIA5iQIAXAAIA5CQgAl0AkIAoAAIgUg5gApRBcIAAiPIAcAAIAACPgArBBcIAAiQIBiAAIAAAZIhGAAIAAAkIA6AAIAAAYIg6AAIAAA7gAr3BcIAAiPIAcAAIAACPgAspBcIhKhcIAABcIgcAAIAAiQIAWAAIBMBfIAAheIAcAAIAACPgAyoBcIAAiQIBNAAQAHABAHADQAGADAEAGQAFAFACAGQACAHAAAGQAAALgFAJQgGAIgJAFQAMAEAHAKQAIAJAAAOQAAAJgFAHQgDAHgHAFQgGAEgJADQgIACgKAAgAyMBFIApAAQAFAAADgCQADgBADgDIADgGQACgDAAgEQAAgEgCgDQAAgEgDgDQgCgDgEgBQgDgCgDAAIgrAAgAyMAIIAlAAQAIAAAEgFQAGgDAAgJQgBgIgEgGQgEgEgIAAIgmAAgAgjhFIAMgYIAYAAIgSAeg");
	this.shape.setTransform(0.3,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("Az6CRIAAkhMAn1AAAIAAEhg");
	this.shape_1.setTransform(0,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cartel_rojo, new cjs.Rectangle(-127.5,0,255,29), null);


(lib.auto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.auto_300x250();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.auto, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("A0iUiMAAAgpEQIYAAHoDPQHXDIFsFsQFsFsDHHWQDOHoAAIXg");
	this.shape.setTransform(131.5,131.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,262.9,262.9), null);


(lib.reflejo_izq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_338 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(338).call(this.frame_338).wait(1));

	// izq_circ_rojo
	this.instance = new lib.izq_circ_rojo();
	this.instance.parent = this;
	this.instance.setTransform(-51,272.5,1,1,0,0,0,98.4,196.8);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:25.1,y:233.4,alpha:0.949},48,cjs.Ease.get(1)).to({regX:98.2,regY:197.1,scaleX:0.98,scaleY:0.89,x:24.9,y:233.7},69).to({regX:98.3,scaleX:1,scaleY:0.97,x:25},70).to({scaleY:1},61).to({regX:98.4,regY:197.2,scaleY:0.9,x:25.1,y:233.8},54).to({regY:196.8,scaleY:1,x:-44,y:318.5},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.4,75.7,196.9,196.9);


(lib.reflejo_der = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_353 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(353).call(this.frame_353).wait(1));

	// der_circulo_rojo
	this.instance = new lib.der_circ_rojo();
	this.instance.parent = this;
	this.instance.setTransform(468,280.6,1,1,0,0,0,181.6,181.6);
	this.instance.alpha = 0.949;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({scaleY:0.91,x:381,y:204.6},34,cjs.Ease.get(1)).to({regY:181.7,scaleY:0.85,y:204.7},59).to({regX:181.7,regY:181.9,scaleY:0.94,x:381.1,y:204.9},80).to({regX:181.6,regY:181.8,scaleY:0.88,x:381,y:204.8},61).to({regX:181.8,scaleX:1,scaleY:0.94,x:381.2,y:204.7},63).to({regX:181.6,regY:181.6,scaleX:1,scaleY:1,x:468,y:280.6},29,cjs.Ease.get(1)).wait(8));

	// der_circulo_amarillo
	this.instance_1 = new lib.circ_amarillo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.4,223.2,1,1,69.4,0,0,-70.7,141.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:141.4,rotation:0,y:223.3},33,cjs.Ease.get(1)).to({regX:-70.5,regY:141.6,scaleX:1.02,scaleY:1.06,x:186.5,y:223.4},70,cjs.Ease.get(-0.5)).to({regX:-70.7,regY:141.4,scaleX:1,scaleY:1,x:186.4,y:223.3},60).to({regY:141.5,scaleX:1.01,scaleY:1.04},70).to({regY:141.6,scaleY:1.01,y:223.4},75).to({regY:141.3,scaleX:1,scaleY:1,rotation:69.4,y:223.2},32).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.4,173.5,182,182.1);


// stage content:
(lib.Honda_Master_300x250_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_397 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(397).call(this.frame_397).wait(1));

	// Layer 25
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(398));

	// CTA
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(150.1,41,1,0.301,0,61.9,0,0.1,14.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(390).to({_off:false},0).to({regX:0,regY:13.9,scaleY:1,skewX:0,x:150,y:40.9},7).wait(1));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,231);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(398));

	// tenela
	this.instance_2 = new lib.tenela();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.2,16.2,1.036,0.702,0,-74.1,0,0.2,0.3);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({regX:0,regY:0,scaleY:1,skewX:5.3,x:150,y:16,alpha:1},27,cjs.Ease.get(1)).to({regX:0.1,skewX:-5.6,x:150.1},30).to({scaleY:1,skewX:0},15,cjs.Ease.get(0.6)).wait(309).to({regX:0,regY:0.5,scaleY:0.64,skewX:-70.6,x:134.7,y:36.1,alpha:0},7).wait(6));

	// bonif
	this.instance_3 = new lib.cartel_rojo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(149.7,38,1,0.733,0,-80.8,0,0.1,0);
	this.instance_3.alpha = 0.301;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({regX:0,scaleY:1.01,skewX:6.9,x:149.6,alpha:1},27,cjs.Ease.get(0.99)).to({scaleY:1,skewX:-4.1},23).to({scaleY:1,skewX:0},13,cjs.Ease.get(0.6)).wait(309).to({regX:-0.1,regY:0.5,scaleY:0.65,skewX:-70.6,x:147.5,y:40.8,alpha:0},7).wait(6));

	// hrv
	this.instance_4 = new lib.hrv_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(398));

	// auto
	this.instance_5 = new lib.auto();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(398));

	// Layer 32
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F8F8F8","rgba(248,248,248,0)"],[0,1],0,32.2,0,-32.1).s().p("A3bGkIAAtHMAu3AAAIAANHg");
	this.shape_1.setTransform(150,208.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(398));

	// Layer 30 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("A3bGkIAAtHMAu3AAAIAANHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:150,y:218}).wait(354));

	// reflejo_der
	this.instance_6 = new lib.reflejo_der();
	this.instance_6.parent = this;
	this.instance_6.setTransform(377.2,157.2,1,1,0,180,0,377.2,189.8);
	this.instance_6.alpha = 0.148;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).wait(354));

	// reflejo_izq
	this.instance_7 = new lib.reflejo_izq();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50.8,174.3,1,1,0,180,0,-51.1,174.1);
	this.instance_7.alpha = 0.148;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59).to({_off:false},0).wait(339));

	// piso
	this.instance_8 = new lib.piso();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,213);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(398));

	// der_circ_amarillo
	this.instance_9 = new lib.circ_amarillo_chico();
	this.instance_9.parent = this;
	this.instance_9.setTransform(344.2,216.6,0.593,0.593,0,0,0,92.3,92.2);
	this.instance_9.alpha = 0.41;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(68).to({_off:false},0).to({regX:92.2,regY:92.3,scaleX:1.03,scaleY:1.03,y:216.7},33).to({regX:92.3,scaleX:0.97,scaleY:0.97},44).to({regX:92.2,regY:92.2,scaleX:1.07,scaleY:1.07,x:344.1,y:216.6},65).to({regX:92.3,regY:92.3,scaleX:1,scaleY:1,x:344.2},100).to({regX:92.4,regY:92.4,scaleX:1.03,scaleY:1.03,x:344.3,y:216.7},45).to({scaleX:0.31,scaleY:0.31,x:344.2},22).wait(21));

	// izq_circ_negro
	this.instance_10 = new lib.izq_circ_negro();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-20.9,213.1,1,1,0,0,0,0,44.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({_off:false},0).to({x:4.1,y:170.1},33,cjs.Ease.get(1)).to({regX:0.1,regY:44.6,scaleX:1.11,scaleY:1.11,x:4.2},67).to({scaleX:1,scaleY:1,y:170.2},65).to({regX:0.2,scaleX:1.09,scaleY:1.09,x:4.3,y:170.3},68).to({scaleX:0.95,scaleY:0.95},70).to({regX:0,regY:44.4,scaleX:1,scaleY:1,x:-30.9,y:197.1},35).wait(5));

	// izq_circ_blanco
	this.instance_11 = new lib.Path();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-234,332,1,1,0,0,0,0,262.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({_off:false},0).to({x:-213,y:297},33).to({regX:-0.1,regY:263,scaleX:1.03,scaleY:0.99,x:-213.1,y:297.1},65).to({regX:0,regY:262.9,scaleX:1,scaleY:1,x:-213,y:297},65).to({regY:263,scaleX:1.01,scaleY:1.01,y:297.1},70).to({regY:262.9,scaleX:1,scaleY:1,y:297},70).to({scaleX:0.74,scaleY:0.74},37).wait(14));

	// izq_circ_rojo
	this.instance_12 = new lib.izq_circ_rojo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-51,272.5,1,1,0,0,0,98.4,196.8);
	this.instance_12.alpha = 0.301;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({_off:false},0).to({x:25.1,y:233.4,alpha:0.949},48,cjs.Ease.get(1)).to({regX:98.2,regY:197.1,scaleX:0.98,scaleY:0.89,x:24.9,y:233.7},69).to({regX:98.3,scaleX:1,scaleY:0.97,x:25},70).to({scaleY:1},61).to({regX:98.4,regY:197.2,scaleY:0.9,x:25.1,y:233.8},54).to({regY:196.8,scaleY:1,x:-44,y:318.5},36).wait(1));

	// der_circulo_rojo
	this.instance_13 = new lib.der_circ_rojo();
	this.instance_13.parent = this;
	this.instance_13.setTransform(468,280.6,1,1,0,0,0,181.6,181.6);
	this.instance_13.alpha = 0.949;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(64).to({_off:false},0).to({scaleY:0.91,x:381,y:204.6},34,cjs.Ease.get(1)).to({regY:181.7,scaleY:0.85,y:204.7},59).to({regX:181.7,regY:181.9,scaleY:0.94,x:381.1,y:204.9},80).to({regX:181.6,regY:181.8,scaleY:0.88,x:381,y:204.8},61).to({regX:181.8,scaleX:1,scaleY:0.94,x:381.2,y:204.7},63).to({regX:181.6,regY:181.6,scaleX:1,scaleY:1,x:468,y:280.6},29,cjs.Ease.get(1)).wait(8));

	// der_circulo_amarillo_chico
	this.instance_14 = new lib.der_circ_amarillo();
	this.instance_14.parent = this;
	this.instance_14.setTransform(186.4,197.8,0.999,0.999,61,0,0,0.1,70.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(59).to({_off:false},0).to({regX:0,regY:70.8,scaleX:1,scaleY:1,rotation:0},29,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,y:197.9},136).to({regX:0.1,scaleX:0.99,scaleY:0.99,x:186.5},37).to({regX:0,scaleX:0.96,scaleY:0.96,x:186.4},23).to({regY:70.9,scaleX:0.99,scaleY:0.99},68).to({rotation:90},32).wait(14));

	// der_circulo_amarillo
	this.instance_15 = new lib.circ_amarillo();
	this.instance_15.parent = this;
	this.instance_15.setTransform(186.4,223.2,1,1,69.4,0,0,-70.7,141.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(44).to({_off:false},0).to({regY:141.4,rotation:0,y:223.3},33,cjs.Ease.get(1)).to({regX:-70.5,regY:141.6,scaleX:1.02,scaleY:1.06,x:186.5,y:223.4},70,cjs.Ease.get(-0.5)).to({regX:-70.7,regY:141.4,scaleX:1,scaleY:1,x:186.4,y:223.3},60).to({regY:141.5,scaleX:1.01,scaleY:1.04},70).to({regY:141.6,scaleY:1.01,y:223.4},75).to({regY:141.3,scaleX:1,scaleY:1,rotation:69.4,y:223.2},32).wait(14));

	// fondo
	this.instance_16 = new lib.fondo();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(398));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,301,251);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/auto_300x250.png?1539920892158", id:"auto_300x250"},
		{src:"images/fondo_300x250.png?1539920892158", id:"fondo_300x250"},
		{src:"images/piso_300x250.png?1539920892158", id:"piso_300x250"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;