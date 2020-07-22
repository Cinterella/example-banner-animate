(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.fondo = function() {
	this.initialize(img.fondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,180);


(lib.formato_1_300x250 = function() {
	this.initialize(img.formato_1_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,90);


(lib.formato_2_300x250 = function() {
	this.initialize(img.formato_2_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,90);


(lib.hombre = function() {
	this.initialize(img.hombre);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,208);// helper functions:

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


(lib.zocalo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("A/PPoIAA/PMA+fAAAIAAfPg");
	this.shape.setTransform(200,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.zocalo, new cjs.Rectangle(0,0,400,200), null);


(lib.txt1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAcIAAg3IBGAAIAAA3g");
	this.shape.setTransform(239.5,17.7,0.71,0.709);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBOQgfgeAAgwQAAgZAMgZQAMgXAagSQAIgGAKgDIAUgFIAXgCQA2AAAdAhQAOAPAHAUQAIATAAAUQAAArgeAhQgeAgg0AAQgyAAgegegAgSguQgHANAAAhQAAAhAHAOQAFAMANAAQANAAAHgMQAGgNAAgiQAAghgGgNQgHgMgNAAQgMAAgGAMg");
	this.shape_1.setTransform(227.7,12.2,0.71,0.709);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtBpIgshWIgXAAIAAAjIAPAAIAAAzIhsAAIAAgzIAQAAIAAhrIgQAAIAAgzIBsAAIA/AFQAVAFANAPQANAPAAAXQAAARgIANQgHALgOAHIAcAvIAOAAIAAAzgAgWgSIAIAAIAWgBQAHgCAEgEQAFgFAAgIQAAgHgFgGQgEgFgHgBIgXgBIgHAAg");
	this.shape_2.setTransform(210.4,12.2,0.71,0.709);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBhQgcgMgPgaQgPgaAAghQAAgvAfgeQAegeAsAAQAjAAAWATIAAgPIAvAAIAABJIgvAAQgHgOgKgGQgLgHgMAAQgSAAgJANQgJANAAAhQAAAjAJAMQAKAMAQAAQAbAAAAgcIgUAAIAAgnIBZAAQAAAigFAQQgEAQgOARQgPAQgTAIQgUAHgWAAQggAAgcgLg");
	this.shape_3.setTransform(192.4,12.2,0.71,0.709);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AheBpIAAgzIAQAAIAAhrIgQAAIAAgzIC9AAIAABDIg1AAIAAgQIgsAAIAAAfIAnAAIAAAqIgnAAIAAAiIAsAAIAAgRIA1AAIAABEg");
	this.shape_4.setTransform(175.8,12.2,0.71,0.709);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgBqIhSh+IAABJIARAAIAAAyIhRAAIAAgyIARAAIAAhsIgRAAIAAgyIBeAAIBHBsIAAg6IgQAAIAAgyIBQAAIAAAyIgRAAIAAChg");
	this.shape_5.setTransform(159.2,12.3,0.71,0.709);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhQBOQgfgeAAgwQAAgZAMgZQAMgXAagSQAIgGAKgDIAVgFIAWgCQA1AAAeAhQAPARAHASQAHAUAAATQAAArgeAhQgeAgg0AAQgyAAgegegAgTguQgGANAAAhQAAAhAGAOQAIAMALAAQANAAAHgMQAGgNAAgiQAAgigGgMQgHgMgNAAQgLAAgIAMg");
	this.shape_6.setTransform(136.2,12.2,0.71,0.709);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag/CKIAAgyIASAAIAAhsIgSAAIAAgyIBwAAIAAAyIgTAAIAABsIATAAIAAAygAgchTIAbg2IBBAAIg7A2g");
	this.shape_7.setTransform(123,9.8,0.71,0.709);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAtBpIgshWIgXAAIAAAjIAPAAIAAAzIhsAAIAAgzIAQAAIAAhrIgQAAIAAgzIBsAAIBAAFQAUAFANAPQAOAQAAAWQAAAPgIAPQgJALgMAHIAbAvIAOAAIAAAzgAgWgSIAIAAIAWgBQAHgCAEgEQAFgFAAgIQAAgHgFgGQgEgFgHgBIgXgBIgHAAg");
	this.shape_8.setTransform(109.1,12.2,0.71,0.709);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBbIAAAOIgtAAIAAhDIAtAAQAIAbAWAAQAPAAAAgOQAAgHgGgEQgEgEgUgLQgYgLgMgIQgKgIgIgNQgIgOAAgPQAAgdATgRQARgQAbAAQAYAAATAPIAAgMIAtAAIAAA7IgtAAQgIgZgTAAQgPAAAAANQAAAHAEADQAEAEAVALQAcAOALAIIAKAJIAJAMQAIAPAAARQAAAbgTASQgSASgdAAQgYAAgWgQg");
	this.shape_9.setTransform(88.2,12.2,0.71,0.709);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhQBOQgfgeAAgwQAAgZAMgZQALgXAagSQAJgGAKgDIAUgFIAXgCQA2AAAdAhQAOAPAHAUQAIATAAAUQAAArgeAhQgeAgg0AAQgyAAgegegAgSguQgHANAAAhQAAAhAHAOQAFAMANAAQANAAAHgMQAFgMABgjQgBgigFgMQgHgMgNAAQgMAAgGAMg");
	this.shape_10.setTransform(72.8,12.2,0.71,0.709);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggBbIAAAOIgtAAIAAhDIAtAAQAHAbAXAAQAPAAAAgOQAAgHgGgEQgEgEgUgLQgZgLgLgIQgLgHgHgOQgIgNAAgQQAAgdASgRQASgQAaAAQAYAAAUAPIAAgMIAtAAIAAA7IgtAAQgIgZgUAAQgOAAAAANQAAAHAEADQADADAWAMQAcAOALAIQAGAEAEAFIAJAMQAIAQAAAQQAAAagTATQgSASgdAAQgZAAgVgQg");
	this.shape_11.setTransform(57.3,12.2,0.71,0.709);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggBbIAAAOIgtAAIAAhDIAtAAQAIAbAVAAQAQAAAAgOQAAgHgGgEQgEgEgUgLQgXgKgNgJQgKgIgIgNQgIgNABgQQgBgdATgRQARgQAbAAQAYAAASAPIAAgMIAtAAIAAA7IgsAAQgIgZgUAAQgOAAAAANQgBAHAFADQAEAEAVALQAcAOALAIQAFADAFAGIAJAMQAIAPgBARQAAAbgSASQgTASgcAAQgZAAgVgQg");
	this.shape_12.setTransform(39.1,12.2,0.71,0.709);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhQBOQgfgeAAgwQAAgZAMgZQAMgXAZgSQAJgGAKgDIAVgFIAWgCQA2AAAcAhQAPAPAIAUQAHATAAAUQAAArgeAhQgeAgg0AAQgyAAgegegAgTguQgGANAAAhQAAAhAGAOQAHAMAMAAQANAAAGgMQAHgNAAgiQAAghgHgNQgFgMgOAAQgLAAgIAMg");
	this.shape_13.setTransform(23.7,12.2,0.71,0.709);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcBpIhAifIgOAAIAAgyIBqAAIAAAyIgQAAIAcBYIAfhYIgQAAIAAgyIBQAAIAAAyIgOAAIg8Cfg");
	this.shape_14.setTransform(7.6,12.3,0.71,0.709);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1_3, new cjs.Rectangle(0,0,242.1,19.9), null);


(lib.txt1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAcQAMAAAGgDQAGgEABgFQACgFAAgNIgbAAIAAg3IBGAAIAAAvQAAAYgBAJQgCAJgIAKQgIAJgMADQgNAEgaAAg");
	this.shape.setTransform(179.3,15.3,0.71,0.709);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAEBoIAAgtIARAAIgHgbIgyAAIgIAbIAPAAIAAAtIhOAAIAAgyIAPAAIAlhrIgPAAIAAgyICOAAIAAAyIgQAAIAlBrIAPAAIAAAygAgdAGIAjAAIgQg4g");
	this.shape_1.setTransform(167.3,7.7,0.71,0.709);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BoIAAgyIASAAIAAhrIgSAAIAAgyIBxAAIAAAyIgSAAIAABrIASAAIAAAyg");
	this.shape_2.setTransform(154.6,7.7,0.71,0.709);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBNQgbggAAgsQAAgtAbgfQAbggArAAQAiAAAWASIAAgOIAwAAIAABMIgyAAQgDgOgKgIQgIgIgNAAQgfAAAAA5QAAA7AhAAQAdAAAHguIA0ATQgHAigXAVQgYAVgqAAQg4AAgcgfg");
	this.shape_3.setTransform(141.6,7.7,0.71,0.709);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag4BoIAAgyIATAAIAAhrIgTAAIAAgyIBxAAIAAAyIgTAAIAABrIATAAIAAAyg");
	this.shape_4.setTransform(128.5,7.7,0.71,0.709);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BoIAAgyIASAAIAAhrIgYAAIAAAmIglAAIAAhYIDEAAIAABYIglAAIAAgmIgXAAIAABrIASAAIAAAyg");
	this.shape_5.setTransform(115.9,7.7,0.71,0.709);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhQBOQgfgeAAgwQAAgZAMgZQAMgXAZgSQAJgGAKgDQAKgEAKgBQAKgCANAAQA2AAAdAhQAPARAHASQAHATAAAUQAAAsgeAgQgeAgg0AAQgxAAgfgegAgSguQgHALAAAjQAAAjAHAMQAGAMAMAAQANAAAGgMQAHgLAAgkQAAgigHgMQgGgMgNAAQgMAAgGAMg");
	this.shape_6.setTransform(100.1,7.7,0.71,0.709);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhBqIhTh+IAABJIARAAIAAAyIhRAAIAAgyIARAAIAAhsIgRAAIAAgyIBeAAIBHBsIAAg6IgQAAIAAgyIBQAAIAAAyIgRAAIAAChg");
	this.shape_7.setTransform(82.2,7.8,0.71,0.709);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAEBoIAAgtIASAAIgIgbIgyAAIgJAbIARAAIAAAtIhPAAIAAgyIAPAAIAlhrIgPAAIAAgyICNAAIAAAyIgPAAIAmBrIAOAAIAAAygAgcAGIAiAAIgQg4g");
	this.shape_8.setTransform(60.3,7.7,0.71,0.709);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AheBoIAAgyIASAAIAAhrIgSAAIAAgyIBxAAIAAAyIgTAAIAABrIAvAAIAAghIAvAAIAABTg");
	this.shape_9.setTransform(45.3,7.7,0.71,0.709);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhdBoIAAgyIAPAAIAAhrIgQAAIAAgyIC9AAIAABCIg0AAIAAgQIgsAAIAAAgIAmAAIAAApIgmAAIAAAiIAsAAIAAgQIA0AAIAABCg");
	this.shape_10.setTransform(24.7,7.7,0.71,0.709);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhwBoIAAgyIAPAAIAAhrIgPAAIAAgyIBfAAQAiAAASAEQAWAEARANQASANALAXQAFAKADANQACAOAAALQAAAbgLAWQgKAXgRALQgQAMgUAEQgSADgpAAgAgUA2IAHAAQAbAAAIgPQAIgOAAgYQAAgOgEgMQgEgOgIgHQgKgHgVAAIgDAAg");
	this.shape_11.setTransform(8,7.7,0.71,0.709);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1_2, new cjs.Rectangle(0,0,181.8,19.4), null);


(lib.txt1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQBOQgfgeAAgwQAAgYAMgaQANgYAYgRQAJgFAKgEQALgEAKgBQAKgCAMAAQA2AAAdAhQAOAPAIAUQAHATAAAUQAAAsgeAgQgeAgg0AAQgxAAgfgegAgSguQgHALAAAjQAAAjAHAMQAGAMAMAAQANAAAGgMQAHgLAAgkQAAgigGgMQgGgMgOAAQgLAAgHAMg");
	this.shape.setTransform(210.9,12.1,0.71,0.709);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhCLIhUh/IAABKIASAAIAAAyIhSAAIAAgyIASAAIAAhsIgSAAIAAgxIBfAAIBHBsIAAg7IgQAAIAAgxIBRAAIAAAxIgSAAIAAChgAgBhdQgNgFgDAAQgLAAgCANIggAAQACgZALgOQALgOAPAAQAMABAPAHQAKAGAFAAQAKAAACgOIAgAAQgBAYgKAPQgLAOgRAAQgMAAgNgIg");
	this.shape_1.setTransform(193,9.8,0.71,0.709);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhdBoIAAgyIAOAAIAAhrIgPAAIAAgyIC9AAIAABCIg0AAIAAgQIgsAAIAAAgIAmAAIAAApIgmAAIAAAiIAsAAIAAgQIA0AAIAABCg");
	this.shape_2.setTransform(176.2,12.1,0.71,0.709);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBkQgSgFgJgLQgLgMgEgPQgFgOAAggIAAhCIgPAAIAAgyIBkAAIAAAyIgIAAIAABGQAAAZAFAIQADAJAMAAQAKABAEgIQAFgIAAgXIAAhKIgLAAIAAgyIBMAAIAAAyIgQAAIAABKQAAAcgIAUQgJATgSAKQgSAKgcAAQgTAAgSgGg");
	this.shape_3.setTransform(161,12.2,0.71,0.709);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhwBoIAAgyIAPAAIAAhrIgPAAIAAgyIBfAAQAiAAASAEQAWAEARANQASANALAXQAEAJAEAOQACAOAAALQAAAbgLAWQgKAVgRANQgQAMgUAEQgSADgpAAgAgUA2IAHAAQAbAAAIgPQAIgOAAgYQAAgOgEgMQgEgOgIgHQgKgHgVAAIgDAAg");
	this.shape_4.setTransform(144.3,12.1,0.71,0.709);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AheBoIAAgyIASAAIAAhrIgSAAIAAgyIBxAAIAAAyIgTAAIAABrIAvAAIAAghIAwAAIAABTg");
	this.shape_5.setTransform(123,12.1,0.71,0.709);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AheBoIAAgyIAQAAIAAhrIgQAAIAAgyIC9AAIAABCIg0AAIAAgQIgsAAIAAAgIAmAAIAAApIgmAAIAAAiIAsAAIAAgQIA0AAIAABCg");
	this.shape_6.setTransform(107.6,12.1,0.71,0.709);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBbIAAANIgtAAIAAhDIAtAAQAIAcAWAAQAPAAAAgOQAAgHgGgEQgGgGgSgJQgYgLgMgIQgKgIgIgNQgIgOAAgPQAAgdATgRQARgQAbAAQAYAAATAPIAAgMIAtAAIAAA7IgtAAQgIgZgTAAQgPAAAAANQAAAHAEADIAZAPQAcAOALAIIAKAJIAJAMQAIAPAAARQAAAbgTASQgSASgdAAQgYAAgWgQg");
	this.shape_7.setTransform(88.2,12.1,0.71,0.709);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhQBOQgfgeAAgwQAAgZAMgZQAMgYAZgRQAJgGAKgDQAKgEAKgBQALgCAMAAQA2AAAdAhQAOAPAHAUQAIATAAAUQAAAsgeAgQgeAgg0AAQgyAAgegegAgSguQgHANAAAhQAAAhAHAOQAFAMANAAQANAAAHgMQAFgMABgjQgBgigFgMQgHgMgNAAQgMAAgGAMg");
	this.shape_8.setTransform(72.8,12.1,0.71,0.709);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBbIAAANIgtAAIAAhDIAtAAQAHAcAXAAQAPAAAAgOQAAgHgGgEQgGgGgSgJQgZgLgLgIQgLgHgHgOQgIgNAAgQQAAgdASgRQASgQAaAAQAYAAAUAPIAAgMIAtAAIAAA7IgtAAQgIgZgUAAQgOAAAAANQAAAHAEADIAZAPQAcAOALAIQAGAEAEAFIAJAMQAIAQAAAQQAAAagTATQgSASgdAAQgZAAgVgQg");
	this.shape_9.setTransform(57.3,12.1,0.71,0.709);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggBbIAAANIgtAAIAAhDIAtAAQAHAcAWAAQAQAAAAgOQAAgHgGgEQgHgGgRgJQgXgKgNgJQgKgIgIgNQgIgNABgQQgBgdATgRQARgQAbAAQAYAAASAPIAAgMIAtAAIAAA7IgsAAQgIgZgUAAQgOAAAAANQgBAHAFADQADACAWANQAcAOALAIQAFADAFAGIAJAMQAIAPgBARQAAAbgSASQgTASgcAAQgZAAgVgQg");
	this.shape_10.setTransform(39.1,12.1,0.71,0.709);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhQBOQgfgeAAgwQAAgZAMgZQAMgYAZgRQAJgGAKgDQAKgEALgBQAJgCANAAQA2AAAcAhQAPAPAIAUQAHATAAAUQAAAsgeAgQgeAgg0AAQgyAAgegegAgTguQgGANAAAhQAAAhAGAOQAHAMAMAAQANAAAGgMQAHgNAAgiQAAghgHgNQgFgMgOAAQgLAAgIAMg");
	this.shape_11.setTransform(23.7,12.1,0.71,0.709);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcBpIhAifIgOAAIAAgyIBqAAIAAAyIgQAAIAcBYIAfhYIgQAAIAAgyIBQAAIAAAyIgOAAIg8Cfg");
	this.shape_12.setTransform(7.6,12.2,0.71,0.709);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1_1, new cjs.Rectangle(0,0,218.8,19.8), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,78.5).s().p("AojIkQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAQAAFBjjDjQjjDjlBAAQlAAAjjjjg");
	this.shape.setTransform(77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,155,155), null);


(lib.portada_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.fondo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.portada_mc, new cjs.Rectangle(0,0,970,180), null);


(lib.opacity = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhLxAHCIAAuDMCXjAAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.opacity, new cjs.Rectangle(-485,-45,970,90), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D0080F").s().p("AIsBYQgagZAAgrQAAgqAbgZQAagYAoAAQApAAAaAYQAbAZAAAqQAAArgaAZQgaAYgqAAQgpAAgagYgAJZAVQAAAvAWAAQAXAAAAgvQAAgsgXAAQgWAAAAAsgAC5BZQgWgXAAgsQAAgsAZgZQAXgYApAAQALAAARADIAuAAIAABBIgsAAIgIgVIgIgBQgPAAgHAJQgJALABAYQAAAaAEALQAFANAOAAIAGgBIAAgSIgKAAIAAgjIBWAAIAAAkIgEAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABQgDACAAACIAAAzIgiAAQgCgFgFAAQgMAIgbAAQgrAAgXgXgAmNBYQgagZAAgrQAAgqAbgZQAagYApAAQAoAAAaAYQAbAZAAAqQAAArgaAZQgaAYgpAAQgqAAgagYgAlgAVQAAAvAXAAQAWAAAAgvQAAgsgWAAQgXAAAAAsgAHHBtIgEgwQgCgPgMAAIgIAAIAAAaIANAAIAAAlIhgAAIAAglIAHAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAhYQAAgCgDgCQAAgBgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgHAAIAAgmIBfAAQApAAASANQASAMAAAbQAAAegfAJIAAABQANADAHAHQAHAIADAQIACAIQACAGAEAAIACAAIAAAlgAGrAJIAFAAQAJAAAEgEQAEgEAAgJQAAgSgRAAIgFAAgAgCBtIAAglIAFAAQACAAADgDQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAhYQAAgCgCgCQgDgDgCAAIgFAAIAAgmICbAAIAAA+IgoAAIgFgUIgcAAIAAAZIAmAAIAAAoIgmAAIAAAeIAcAAIAFgZIAqAAIAABBgAhUBtIgwhYIAAAAIAAAzIANAAIAAAlIhMAAIAAglIAGAAQAAAAABAAQAAgBABAAQAAAAABgBQABAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAhYQAAgCgCgCQAAgBgBAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIAAgmIBPAAIAsBPIAAAAIAAgpIgNAAIAAgmIBKAAIAAAmIgEAAQgCAAgDADQgCACgBACIAACEgAoPBtIAAglIAIAAQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQABAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAhYQAAgCgDgCQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAIgIAAIAAgmIBiAAIAAAmIgHAAQgCAAgCADQgDACAAACIAABYQAAABAAAAQAAABABAAQAAABAAAAQABABABAAQACADACAAIAHAAIAAAlgApgBtIgEgwQgCgPgMAAIgIAAIAAAaIANAAIAAAlIhgAAIAAglIAHAAQABAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAhYQAAgCgCgCQgDgDgBAAIgHAAIAAgmIBeAAQAqAAASANQASAMAAAbQAAAegfAJIAAABQANADAIAHQAHAIADAQIABAIQACAGAFAAIACAAIAAAlgAp8AJIAGAAQAQAAAAgRQAAgSgQAAIgGAAgAn0hKIAFglIA6AAIAAAQIgaAVg");
	this.shape.setTransform(71.8,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1410").s().p("AiRA4IgBAHIgQAAIAHgeIAPAAIAAAEQAAAFADADQAEADADAAQAGAAADgEQADgDAAgGQAAgDgCgEQgCgEgJgIQgJgKgCgEQgDgFAAgFQAAgKAHgIQAGgIANAAQAMAAAGAIIACgHIAOAAIgFAZIgPAAIAAgCQAAgDgDgDQgDgCgEAAQgFAAgCACQgCACAAADIABAFQACADAJAHQAJAJADAHQADAHAAAGQAAAPgIAIQgIAJgNAAQgLAAgIgJgAj9A1QgMgMAAgRQAAgXASgSQARgSAZAAQATAAALAMQAMALAAAQQAAAagSARQgRASgaAAQgRAAgMgMgAjngEQgJAOAAAQQAAAKAFAGQAGAFAJAAQAPAAAJgOQAIgQAAgPQAAgIgFgGQgGgGgJAAQgOAAgJAOgAp+A4QgHgJAAgQQAAgOAFgQQAGgQAJgKQAIgKANAAQAKAAAHAJQAHAKAAAOQAAAXgMAWQgLAWgSAAQgLAAgGgJgApmgNQgEAHgFAUIgEAaQAAAKAHAAQAFAAAEgHQADgFAFgWQAFgTAAgHQAAgFgCgDQgCgCgDAAQgFAAgEAHgAC2BAIgJhSIgJAAIADgPIAoAAIgDAPIgJAAIAFA0IAdg0IgIAAIADgPIAkAAIgDAPIgJAAIguBSgAk9BAIgYhNIgOA9IAKAAIgDAPIgjAAIADgPIAJAAIAPhCIgJAAIADgPIAjAAIAVBCIAMgzIgJAAIADgPIAiAAIgEAPIgIAAIgTBSgAJBA/IADgPIAJAAIAAgQIgcAAIgIAQIAIAAIgDAPIgkAAIAEgPIAJAAIAjhCIgJAAIADgPIA2AAIgDAPIgIAAIACBCIAUAAIAPhCIgLAAIADgPIAnAAQAWAAALALQALANAAASQAAAYgOAPQgOAPgXAAgAKNAwIAOAAQANAAAIgOQAHgOAAgQQAAgJgGgHQgGgGgKAAIgFAAgAI3ASIAVAAIgBglIgBAAgAGoA/IAEgPIALAAIAOhCIgLAAIAEgPIAmAAQAWAAALALQAMANAAASQAAAYgOAPQgOAPgXAAgAHOAwIAOAAQANAAAIgOQAIgOAAgQQAAgJgGgHQgHgGgJAAIgGAAgAGMA/IgKgrIgNAAIgGAcIAJAAIgEAPIgpAAIADgPIAJAAIAPhCIgJAAIADgPIAxAAQANAAAGAHQAIAJAAAKQAAAJgGAHQgGAIgKABIAIAeIAJAAIgDAPgAF4AHIAKAAQARAAAAgOQAAgFgDgDQgDgDgFAAIgKAAgAD0A/IADgPIAJAAIAPhCIgJAAIADgPIBMAAIgGAfIgSAAIAEgQIgbAAIgFAYIAWAAIgEAPIgWAAIgFAbIAaAAIAEgPIARAAIgHAegAAtA/IAEgPIAIAAIAPhCIgJAAIAEgPIBMAAIgHAfIgSAAIAEgQIgaAAIgGAYIAWAAIgDAPIgWAAIgGAbIAbAAIADgPIARAAIgHAegAg8A/IADgPIALAAIAPhCIgLAAIADgPIAnAAQAVAAALALQALAMAAATQAAAYgOAPQgOAPgWAAgAgWAwIAOAAQAMAAAIgOQAHgOAAgQQAAgJgGgHQgGgGgJAAIgFAAgAmoA/IAEgPIAJAAIAAgQIgdAAIgIAQIAJAAIgDAPIgkAAIADgPIAJAAIAjhCIgJAAIAEgPIA2AAIgEAPIgIAAIADBCIAKAAIgEAPgAmxASIAVAAIgBglIgBAAgAo8A/IADgOIAKAAQAJgjAdghIgbAAIgDAMIgPAAIAGgaIA8AAIgDAOQgKALgKAUQgJASgFATIAJAAIgDAOgArOA/IADgOIALAAIAPhEIgLAAIADgOIAfAAIgTBSIAKAAIgDAOgAk2guQgIgEgCAAQgFAAAAAIIgKAAQAAgLAEgGQAFgFAGAAQAFAAAHAEQAHADACAAQAGAAAAgHIAKAAQABAJgFAHQgFAGgHAAQgDAAgIgEg");
	this.shape_1.setTransform(72.2,32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,144.2,39.3), null);


(lib.l_izq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1F1410").p("AAAkqIAAJV");
	this.shape.setTransform(0,22,0.738,0.738,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_izq, new cjs.Rectangle(-1,-1,2,46.2), null);


(lib.l_der = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1F1410").p("AAAkqIAAJV");
	this.shape.setTransform(0.1,22,0.738,0.738,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_der, new cjs.Rectangle(-1,-1,2,46.2), null);


(lib.hombre_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.hombre();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hombre_mc, new cjs.Rectangle(0,0,132,208), null);


(lib.dig_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.formato_1_300x250();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.34,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dig_mc, new cjs.Rectangle(0,0,53,30.7), null);


(lib.diario_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.formato_2_300x250();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.333,0.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.diario_mc, new cjs.Rectangle(0,0,46,30), null);


(lib.txt1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.txt1_3();
	this.instance.parent = this;
	this.instance.setTransform(121,9.9,1,1,0,0,0,121,9.9);
	this.instance.shadow = new cjs.Shadow("rgba(31,20,16,0.749)",3,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1_3_mc, new cjs.Rectangle(-7,-7,264,41), null);


(lib.txt1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.txt1_2();
	this.instance.parent = this;
	this.instance.setTransform(90.9,9.7,1,1,0,0,0,90.9,9.7);
	this.instance.shadow = new cjs.Shadow("rgba(31,20,16,0.749)",3,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1_2_mc, new cjs.Rectangle(-7,-7,203,41), null);


(lib.txt1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.txt1_1();
	this.instance.parent = this;
	this.instance.setTransform(109.4,9.8,1,1,0,0,0,109.4,9.8);
	this.instance.shadow = new cjs.Shadow("rgba(31,20,16,0.749)",3,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1_1_mc, new cjs.Rectangle(-7,-7,240,41), null);


(lib.placa_final_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// form_digital
	this.instance = new lib.dig_mc();
	this.instance.parent = this;
	this.instance.setTransform(55,224,1,1,0,0,0,26,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({alpha:1},40).wait(1));

	// form_diario
	this.instance_1 = new lib.diario_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(241,224,1,1,0,0,0,23,15);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({alpha:1},40).wait(1));

	// linea_izq
	this.instance_2 = new lib.l_izq();
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.6,222.1,1,1,0,0,0,0,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:87},44,cjs.Ease.get(1)).wait(36));

	// linea_der
	this.instance_3 = new lib.l_der();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.3,222.1,1,1,0,0,0,0,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:212.7},44,cjs.Ease.get(1)).wait(36));

	// Capa 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgEEsIAApXIAJAAIAAJXg");
	var mask_graphics_1 = new cjs.Graphics().p("AggEsIAApXIBBAAIAAJXg");
	var mask_graphics_2 = new cjs.Graphics().p("Ag8EsIAApXIB5AAIAAJXg");
	var mask_graphics_3 = new cjs.Graphics().p("AhWEsIAApXICtAAIAAJXg");
	var mask_graphics_4 = new cjs.Graphics().p("AhwEsIAApXIDiAAIAAJXg");
	var mask_graphics_5 = new cjs.Graphics().p("AiKEsIAApXIEVAAIAAJXg");
	var mask_graphics_6 = new cjs.Graphics().p("AijEsIAApXIFHAAIAAJXg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai7EsIAApXIF3AAIAAJXg");
	var mask_graphics_8 = new cjs.Graphics().p("AjSEsIAApXIGmAAIAAJXg");
	var mask_graphics_9 = new cjs.Graphics().p("AjqEsIAApXIHUAAIAAJXg");
	var mask_graphics_10 = new cjs.Graphics().p("AkAEsIAApXIIBAAIAAJXg");
	var mask_graphics_11 = new cjs.Graphics().p("AkVEsIAApXIIrAAIAAJXg");
	var mask_graphics_12 = new cjs.Graphics().p("AkqEsIAApXIJVAAIAAJXg");
	var mask_graphics_13 = new cjs.Graphics().p("Ak/EsIAApXIJ/AAIAAJXg");
	var mask_graphics_14 = new cjs.Graphics().p("AlSEsIAApXIKlAAIAAJXg");
	var mask_graphics_15 = new cjs.Graphics().p("AllEsIAApXILLAAIAAJXg");
	var mask_graphics_16 = new cjs.Graphics().p("Al4EsIAApXILxAAIAAJXg");
	var mask_graphics_17 = new cjs.Graphics().p("AmKEsIAApXIMUAAIAAJXg");
	var mask_graphics_18 = new cjs.Graphics().p("AmbEsIAApXIM3AAIAAJXg");
	var mask_graphics_19 = new cjs.Graphics().p("AmrEsIAApXINXAAIAAJXg");
	var mask_graphics_20 = new cjs.Graphics().p("Am7EsIAApXIN3AAIAAJXg");
	var mask_graphics_21 = new cjs.Graphics().p("AnKEsIAApXIOVAAIAAJXg");
	var mask_graphics_22 = new cjs.Graphics().p("AnZEsIAApXIOzAAIAAJXg");
	var mask_graphics_23 = new cjs.Graphics().p("AnmEsIAApXIPNAAIAAJXg");
	var mask_graphics_24 = new cjs.Graphics().p("An0EsIAApXIPpAAIAAJXg");
	var mask_graphics_25 = new cjs.Graphics().p("AoAEsIAApXIQBAAIAAJXg");
	var mask_graphics_26 = new cjs.Graphics().p("AoMEsIAApXIQZAAIAAJXg");
	var mask_graphics_27 = new cjs.Graphics().p("AoXEsIAApXIQwAAIAAJXg");
	var mask_graphics_28 = new cjs.Graphics().p("AoiEsIAApXIRFAAIAAJXg");
	var mask_graphics_29 = new cjs.Graphics().p("AosEsIAApXIRZAAIAAJXg");
	var mask_graphics_30 = new cjs.Graphics().p("Ao2EsIAApXIRsAAIAAJXg");
	var mask_graphics_31 = new cjs.Graphics().p("Ao+EsIAApXIR9AAIAAJXg");
	var mask_graphics_32 = new cjs.Graphics().p("ApGEsIAApXISNAAIAAJXg");
	var mask_graphics_33 = new cjs.Graphics().p("ApOEsIAApXISdAAIAAJXg");
	var mask_graphics_34 = new cjs.Graphics().p("ApUEsIAApXISpAAIAAJXg");
	var mask_graphics_35 = new cjs.Graphics().p("ApbEsIAApXIS3AAIAAJXg");
	var mask_graphics_36 = new cjs.Graphics().p("ApgEsIAApXITBAAIAAJXg");
	var mask_graphics_37 = new cjs.Graphics().p("AplEsIAApXITLAAIAAJXg");
	var mask_graphics_38 = new cjs.Graphics().p("AppEsIAApXITTAAIAAJXg");
	var mask_graphics_39 = new cjs.Graphics().p("AptEsIAApXITbAAIAAJXg");
	var mask_graphics_40 = new cjs.Graphics().p("ApwEsIAApXIThAAIAAJXg");
	var mask_graphics_41 = new cjs.Graphics().p("ApyEsIAApXITlAAIAAJXg");
	var mask_graphics_42 = new cjs.Graphics().p("ApzEsIAApXITnAAIAAJXg");
	var mask_graphics_43 = new cjs.Graphics().p("Ap0EsIAApXITpAAIAAJXg");
	var mask_graphics_44 = new cjs.Graphics().p("Ap1EsIAApXITrAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:222}).wait(1).to({graphics:mask_graphics_1,x:150,y:222}).wait(1).to({graphics:mask_graphics_2,x:150,y:222}).wait(1).to({graphics:mask_graphics_3,x:150,y:222}).wait(1).to({graphics:mask_graphics_4,x:150,y:222}).wait(1).to({graphics:mask_graphics_5,x:150,y:222}).wait(1).to({graphics:mask_graphics_6,x:150,y:222}).wait(1).to({graphics:mask_graphics_7,x:150,y:222}).wait(1).to({graphics:mask_graphics_8,x:150,y:222}).wait(1).to({graphics:mask_graphics_9,x:150,y:222}).wait(1).to({graphics:mask_graphics_10,x:150,y:222}).wait(1).to({graphics:mask_graphics_11,x:150,y:222}).wait(1).to({graphics:mask_graphics_12,x:150,y:222}).wait(1).to({graphics:mask_graphics_13,x:150,y:222}).wait(1).to({graphics:mask_graphics_14,x:150,y:222}).wait(1).to({graphics:mask_graphics_15,x:150,y:222}).wait(1).to({graphics:mask_graphics_16,x:150,y:222}).wait(1).to({graphics:mask_graphics_17,x:150,y:222}).wait(1).to({graphics:mask_graphics_18,x:150,y:222}).wait(1).to({graphics:mask_graphics_19,x:150,y:222}).wait(1).to({graphics:mask_graphics_20,x:150,y:222}).wait(1).to({graphics:mask_graphics_21,x:150,y:222}).wait(1).to({graphics:mask_graphics_22,x:150,y:222}).wait(1).to({graphics:mask_graphics_23,x:150,y:222}).wait(1).to({graphics:mask_graphics_24,x:150,y:222}).wait(1).to({graphics:mask_graphics_25,x:150,y:222}).wait(1).to({graphics:mask_graphics_26,x:150,y:222}).wait(1).to({graphics:mask_graphics_27,x:150,y:222}).wait(1).to({graphics:mask_graphics_28,x:150,y:222}).wait(1).to({graphics:mask_graphics_29,x:150,y:222}).wait(1).to({graphics:mask_graphics_30,x:150,y:222}).wait(1).to({graphics:mask_graphics_31,x:150,y:222}).wait(1).to({graphics:mask_graphics_32,x:150,y:222}).wait(1).to({graphics:mask_graphics_33,x:150,y:222}).wait(1).to({graphics:mask_graphics_34,x:150,y:222}).wait(1).to({graphics:mask_graphics_35,x:150,y:222}).wait(1).to({graphics:mask_graphics_36,x:150,y:222}).wait(1).to({graphics:mask_graphics_37,x:150,y:222}).wait(1).to({graphics:mask_graphics_38,x:150,y:222}).wait(1).to({graphics:mask_graphics_39,x:150,y:222}).wait(1).to({graphics:mask_graphics_40,x:150,y:222}).wait(1).to({graphics:mask_graphics_41,x:150,y:222}).wait(1).to({graphics:mask_graphics_42,x:150,y:222}).wait(1).to({graphics:mask_graphics_43,x:150,y:222}).wait(1).to({graphics:mask_graphics_44,x:150,y:222}).wait(36));

	// RioNegro
	this.instance_4 = new lib.logo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.2,220.2,0.738,0.738,0,0,0,72.1,19.7);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.1,199.5,1.7,45.2);


(lib.humo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_104 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(104).call(this.frame_104).wait(1));

	// Capa 16
	this.instance = new lib.Símbolo1();
	this.instance.parent = this;
	this.instance.setTransform(65.8,351,1,0.532,-33,0,0,77.4,77);
	this.instance.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.instance.cache(-2,-2,159,159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:77.5,regY:77.5,scaleY:0.56,rotation:0,skewX:-31.9,skewY:-33.2,x:65.9,y:349.5,alpha:0.986},0).wait(1).to({scaleY:0.58,skewX:-30.7,skewY:-33.4,x:65.7,y:347.9,alpha:0.972},0).wait(1).to({scaleY:0.61,skewX:-29.6,skewY:-33.6,x:65.5,y:346.3,alpha:0.959},0).wait(1).to({scaleY:0.63,skewX:-28.4,skewY:-33.8,x:65.3,y:344.8,alpha:0.945},0).wait(1).to({scaleY:0.66,skewX:-27.3,skewY:-34,x:65,y:343.1,alpha:0.931},0).wait(1).to({scaleY:0.68,skewX:-26.2,skewY:-34.2,x:64.8,y:341.6,alpha:0.917},0).wait(1).to({scaleY:0.71,skewX:-25,skewY:-34.4,x:64.7,y:339.9,alpha:0.903},0).wait(1).to({scaleY:0.73,skewX:-23.9,skewY:-34.7,x:64.5,y:338.4,alpha:0.89},0).wait(1).to({scaleY:0.76,skewX:-22.8,skewY:-34.9,x:64.3,y:336.8,alpha:0.876},0).wait(1).to({scaleY:0.78,skewX:-21.6,skewY:-35.1,x:64.1,y:335.1,alpha:0.862},0).wait(1).to({scaleY:0.81,skewX:-20.5,skewY:-35.3,x:63.8,y:333.6,alpha:0.848},0).wait(1).to({scaleY:0.83,skewX:-19.3,skewY:-35.5,x:63.6,y:332,alpha:0.834},0).wait(1).to({scaleY:0.86,skewX:-18.2,skewY:-35.7,x:63.4,y:330.4,alpha:0.821},0).wait(1).to({scaleY:0.88,skewX:-17.1,skewY:-35.9,x:63.2,y:328.8,alpha:0.807},0).wait(1).to({scaleY:0.91,skewX:-15.9,skewY:-36.1,x:63,y:327.2,alpha:0.793},0).wait(1).to({scaleY:0.93,skewX:-14.8,skewY:-36.3,x:62.8,y:325.6,alpha:0.779},0).wait(1).to({scaleY:0.96,skewX:-13.7,skewY:-36.5,x:62.6,y:324.1,alpha:0.766},0).wait(1).to({scaleY:0.98,skewX:-12.5,skewY:-36.7,x:62.3,y:322.4,alpha:0.752},0).wait(1).to({scaleY:1.01,skewX:-11.4,skewY:-36.9,x:62.1,y:320.9,alpha:0.738},0).wait(1).to({scaleY:1.03,skewX:-10.2,skewY:-37.1,x:62,y:319.3,alpha:0.724},0).wait(1).to({scaleY:1.06,skewX:-9.1,skewY:-37.3,x:61.7,y:317.7,alpha:0.71},0).wait(1).to({scaleY:1.08,skewX:-8,skewY:-37.6,x:61.5,y:316.1,alpha:0.697},0).wait(1).to({scaleY:1.11,skewX:-6.8,skewY:-37.8,x:61.3,y:314.5,alpha:0.683},0).wait(1).to({scaleY:1.13,skewX:-5.7,skewY:-38,x:61.1,y:312.9,alpha:0.669},0).wait(1).to({scaleY:1.16,skewX:-4.6,skewY:-38.2,x:60.9,y:311.3,alpha:0.655},0).wait(1).to({scaleY:1.18,skewX:-3.4,skewY:-38.4,x:60.6,y:309.7,alpha:0.641},0).wait(1).to({scaleY:1.21,skewX:-2.3,skewY:-38.6,x:60.4,y:308.1,alpha:0.628},0).wait(1).to({scaleY:1.23,skewX:-1.1,skewY:-38.8,x:60.2,y:306.5,alpha:0.614},0).wait(1).to({scaleY:1.26,skewX:0,skewY:-39,x:60,y:305,alpha:0.6},0).wait(1).to({scaleX:0.99,scaleY:1.26,x:60.1,y:304,alpha:0.595},0).wait(1).to({scaleX:0.98,scaleY:1.27,x:60.3,y:303.2,alpha:0.59},0).wait(1).to({scaleX:0.98,scaleY:1.27,x:60.5,y:302.3,alpha:0.585},0).wait(1).to({scaleX:0.97,scaleY:1.28,x:60.6,y:301.4,alpha:0.58},0).wait(1).to({scaleX:0.96,scaleY:1.28,x:60.9,y:300.6,alpha:0.575},0).wait(1).to({scaleX:0.95,scaleY:1.28,x:61,y:299.7,alpha:0.569},0).wait(1).to({scaleX:0.94,scaleY:1.29,x:61.2,y:298.9,alpha:0.564},0).wait(1).to({scaleX:0.94,scaleY:1.29,x:61.4,y:297.9,alpha:0.559},0).wait(1).to({scaleX:0.93,scaleY:1.3,x:61.6,y:297.1,alpha:0.554},0).wait(1).to({scaleX:0.92,scaleY:1.3,x:61.7,y:296.2,alpha:0.549},0).wait(1).to({scaleX:0.91,scaleY:1.31,x:61.9,y:295.3,alpha:0.544},0).wait(1).to({scaleX:0.9,scaleY:1.31,x:62.1,y:294.5,alpha:0.539},0).wait(1).to({scaleX:0.9,scaleY:1.32,x:62.3,y:293.6,alpha:0.534},0).wait(1).to({scaleX:0.89,scaleY:1.32,x:62.5,y:292.7,alpha:0.529},0).wait(1).to({scaleX:0.88,scaleY:1.32,x:62.6,y:291.9,alpha:0.524},0).wait(1).to({scaleX:0.87,scaleY:1.33,x:62.8,y:291,alpha:0.518},0).wait(1).to({scaleX:0.86,scaleY:1.33,x:62.9,y:290.1,alpha:0.513},0).wait(1).to({scaleX:0.85,scaleY:1.34,x:63.2,y:289.2,alpha:0.508},0).wait(1).to({scaleX:0.85,scaleY:1.34,x:63.3,y:288.4,alpha:0.503},0).wait(1).to({scaleX:0.84,scaleY:1.35,x:63.5,y:287.5,alpha:0.498},0).wait(1).to({scaleX:0.83,scaleY:1.35,x:63.7,y:286.6,alpha:0.493},0).wait(1).to({scaleX:0.82,scaleY:1.35,x:63.9,y:285.8,alpha:0.488},0).wait(1).to({scaleX:0.81,scaleY:1.36,x:64,y:284.9,alpha:0.483},0).wait(1).to({scaleX:0.81,scaleY:1.36,x:64.2,y:284.1,alpha:0.478},0).wait(1).to({scaleX:0.8,scaleY:1.37,x:64.4,y:283.1,alpha:0.473},0).wait(1).to({scaleX:0.79,scaleY:1.37,x:64.6,y:282.3,alpha:0.467},0).wait(1).to({scaleX:0.78,scaleY:1.38,x:64.8,y:281.4,alpha:0.462},0).wait(1).to({scaleX:0.77,scaleY:1.38,x:64.9,y:280.5,alpha:0.457},0).wait(1).to({scaleX:0.77,scaleY:1.38,x:65.1,y:279.7,alpha:0.452},0).wait(1).to({scaleX:0.76,scaleY:1.39,x:65.3,y:278.8,alpha:0.447},0).wait(1).to({scaleX:0.75,scaleY:1.39,x:65.5,y:278,alpha:0.442},0).wait(1).to({scaleX:0.74,scaleY:1.4,x:65.6,y:277.1,alpha:0.437},0).wait(1).to({scaleX:0.73,scaleY:1.4,x:65.8,y:276.2,alpha:0.432},0).wait(1).to({scaleX:0.73,scaleY:1.41,x:66,y:275.3,alpha:0.427},0).wait(1).to({scaleX:0.72,scaleY:1.41,x:66.2,y:274.4,alpha:0.422},0).wait(1).to({scaleX:0.71,scaleY:1.41,x:66.3,y:273.6,alpha:0.416},0).wait(1).to({scaleX:0.7,scaleY:1.42,skewY:-39.1,x:66.5,y:272.7,alpha:0.411},0).wait(1).to({scaleX:0.69,scaleY:1.42,x:66.7,y:271.9,alpha:0.406},0).wait(1).to({scaleX:0.68,scaleY:1.43,x:66.9,y:271,alpha:0.401},0).wait(1).to({scaleX:0.68,scaleY:1.43,x:67.1,y:270.1,alpha:0.396},0).wait(1).to({scaleX:0.67,scaleY:1.44,x:67.2,y:269.3,alpha:0.391},0).wait(1).to({scaleX:0.66,scaleY:1.44,x:67.4,y:268.3,alpha:0.386},0).wait(1).to({scaleX:0.65,scaleY:1.45,x:67.6,y:267.5,alpha:0.381},0).wait(1).to({scaleX:0.64,scaleY:1.45,x:67.8,y:266.6,alpha:0.376},0).wait(1).to({scaleX:0.64,scaleY:1.45,x:67.9,y:265.7,alpha:0.371},0).wait(1).to({scaleX:0.63,scaleY:1.46,x:68.1,y:264.9,alpha:0.365},0).wait(1).to({scaleX:0.62,scaleY:1.46,x:68.3,y:264,alpha:0.36},0).wait(1).to({scaleX:0.61,scaleY:1.47,x:68.5,y:263.2,alpha:0.355},0).wait(1).to({scaleX:0.6,scaleY:1.47,x:68.6,y:262.3,alpha:0.35},0).wait(1).to({scaleX:0.6,scaleY:1.48,x:68.8,y:261.4,alpha:0.345},0).wait(1).to({scaleX:0.59,scaleY:1.48,y:260.9,alpha:0.331},0).wait(1).to({scaleX:0.59,scaleY:1.48,x:68.9,y:260.5,alpha:0.317},0).wait(1).to({scaleX:0.59,x:69,y:260,alpha:0.304},0).wait(1).to({scaleX:0.59,scaleY:1.48,y:259.6,alpha:0.29},0).wait(1).to({scaleX:0.59,scaleY:1.48,x:69.1,y:259.1,alpha:0.276},0).wait(1).to({scaleX:0.59,scaleY:1.48,y:258.7,alpha:0.262},0).wait(1).to({scaleX:0.58,scaleY:1.48,x:69.2,y:258.2,alpha:0.248},0).wait(1).to({scaleX:0.58,scaleY:1.48,y:257.8,alpha:0.235},0).wait(1).to({scaleX:0.58,x:69.3,y:257.3,alpha:0.221},0).wait(1).to({scaleX:0.58,scaleY:1.48,y:256.9,alpha:0.207},0).wait(1).to({scaleX:0.58,scaleY:1.48,y:256.4,alpha:0.193},0).wait(1).to({scaleX:0.58,scaleY:1.49,x:69.4,y:256,alpha:0.179},0).wait(1).to({scaleX:0.57,scaleY:1.49,y:255.5,alpha:0.166},0).wait(1).to({scaleX:0.57,scaleY:1.49,x:69.5,y:255.1,alpha:0.152},0).wait(1).to({scaleX:0.57,scaleY:1.49,x:69.6,y:254.7,alpha:0.138},0).wait(1).to({scaleX:0.57,y:254.2,alpha:0.124},0).wait(1).to({scaleX:0.57,scaleY:1.49,x:69.7,y:253.7,alpha:0.11},0).wait(1).to({scaleX:0.57,scaleY:1.49,y:253.3,alpha:0.097},0).wait(1).to({scaleX:0.56,scaleY:1.49,x:69.8,y:252.8,alpha:0.083},0).wait(1).to({scaleX:0.56,scaleY:1.49,y:252.3,alpha:0.069},0).wait(1).to({scaleX:0.56,scaleY:1.49,y:251.9,alpha:0.055},0).wait(1).to({scaleX:0.56,scaleY:1.49,x:69.9,y:251.5,alpha:0.041},0).wait(1).to({scaleX:0.56,y:251,alpha:0.028},0).wait(1).to({scaleX:0.56,scaleY:1.5,x:70,y:250.6,alpha:0.014},0).wait(1).to({scaleX:0.56,scaleY:1.5,x:70.1,y:250.1,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.4,248.4,233,213);


(lib.copy1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Capa 2
	this.instance = new lib.txt1_1_mc();
	this.instance.parent = this;
	this.instance.setTransform(113.7,18.9,1,1,0,0,0,109.4,9.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:13.9,alpha:1},29).wait(51));

	// Capa 3
	this.instance_1 = new lib.txt1_2_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.1,43.8,1,1,0,0,0,90.9,9.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:38.8,alpha:1},29).wait(42));

	// Capa 1
	this.instance_2 = new lib.txt1_3_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.3,60.1,1,1,0,0,0,121,9.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({y:55.1,alpha:1},29).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,2.1,241,41);


// stage content:
(lib.BannerAd_Master_970x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_494 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(494).call(this.frame_494).wait(1));

	// borde_negro
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("EhLsgG8MCXZAAAIAAN5MiXZAAAg");
	this.shape.setTransform(485,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(495));

	// placa final
	this.instance = new lib.placa_final_mc();
	this.instance.parent = this;
	this.instance.setTransform(770.8,44.9,1.37,1.37,0,0,0,150.2,221.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({_off:false},0).wait(311));

	// zocalo
	this.instance_1 = new lib.zocalo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1112,45,1,1,0,0,0,200,100);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).to({regX:200.1,scaleX:1.24,x:808.1},50,cjs.Ease.get(1)).wait(316));

	// copy1
	this.instance_2 = new lib.copy1_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(143.9,43.2,0.9,0.9,0,0,0,125.4,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(495));

	// Capa 17 copia
	this.instance_3 = new lib.humo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(449,168,1,1,0,0,0,50,378.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).wait(411));

	// Capa 17 copia copia copia copia
	this.instance_4 = new lib.humo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(361.5,192.8,0.73,0.73,0,0,0,50,378.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).wait(436));

	// Capa 17 copia copia copia
	this.instance_5 = new lib.humo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(279,162.8,0.73,0.73,0,0,0,50,378.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).wait(451));

	// Capa 17 copia copia
	this.instance_6 = new lib.humo();
	this.instance_6.parent = this;
	this.instance_6.setTransform(329,198,1,1,0,0,0,50,378.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).wait(466));

	// Capa 17 copia
	this.instance_7 = new lib.humo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(241,180,1,1,0,0,0,50,378.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).wait(481));

	// Capa 17
	this.instance_8 = new lib.humo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(189,168,1,1,0,0,0,50,378.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(495));

	// hombre
	this.instance_9 = new lib.hombre_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(378.1,185.1,0.86,0.86,0,0,0,0.1,208.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:0.9,scaleY:0.9,x:348.1,y:183.7},494).wait(1));

	// Capa 17 copia copia copia copia copia
	this.instance_10 = new lib.humo();
	this.instance_10.parent = this;
	this.instance_10.setTransform(297.5,192.8,0.73,0.73,0,0,0,50,378.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(143).to({_off:false},0).wait(352));

	// Capa 17 copia copia copia copia
	this.instance_11 = new lib.humo();
	this.instance_11.parent = this;
	this.instance_11.setTransform(215,162.8,0.73,0.73,0,0,0,50,378.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(128).to({_off:false},0).wait(367));

	// Capa 17 copia copia copia
	this.instance_12 = new lib.humo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(265,198,1,1,0,0,0,50,378.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(113).to({_off:false},0).wait(382));

	// Capa 17 copia copia
	this.instance_13 = new lib.humo();
	this.instance_13.parent = this;
	this.instance_13.setTransform(375,168,1,1,0,0,0,50,378.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(98).to({_off:false},0).wait(397));

	// Layer_1
	this.instance_14 = new lib.opacity();
	this.instance_14.parent = this;
	this.instance_14.setTransform(485,45);
	this.instance_14.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(495));

	// fondo
	this.instance_15 = new lib.portada_mc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-29,69,1.03,1.03,0,0,0,0,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1,scaleY:1,x:0},494,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(456,21.3,999.6,258.6);
// library properties:
lib.properties = {
	width: 970,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./fondo.jpg?1558050956473", id:"fondo"},
		{src:"./formato_1_300x250.jpg?1558050956473", id:"formato_1_300x250"},
		{src:"./formato_2_300x250.jpg?1558050956473", id:"formato_2_300x250"},
		{src:"./hombre.png?1558050956473", id:"hombre"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;