(function(window){
	function Shape(){
	// return new Shape.fn.init(option);
}
	Shape.fn=Shape.prototype = {
	// 初始化
	init:function(){
		var ctx = this.json.context;
		var lineWidth = this.json.lineWidth || 1;
		var strokeStyle = this.json.strokeStyle || "#000";
		var fillStyle = this.json.fillStyle || "#000";
		var setLineDash = this.json.setLineDash || [];
		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = strokeStyle;
		ctx.fillStyle = fillStyle;
		ctx.setLineDash(setLineDash);
	},
	// 开始绘画
	begin:function(){
		var ctx = this.json.context;
		var cas = this.json.cas;

		if(this.json.clearRect){
			ctx.clearRect(0,0,cas.width,cas.height);
		}
		if(this.json.x1){
			ctx.save();
			ctx.beginPath();
			return;		
		}
		if(this.json.startAngle){
			ctx.save();
			ctx.beginPath();
		}
		// ctx.clearRect(0,0,ctx.width,ctx.height);

	},
	// 结束
	end:function(){
		var ctx = this.json.context;
		if(this.json.stroke){
			ctx.stroke();
		};
		if(this.json.fill){
			ctx.fill();	
		};
		if(this.json.x1){
			ctx.restore();
			return;		
		};
		if(this.json.startAngle){
			ctx.restore();		
		};

	},
	//画
	draw:function () {
		this.begin();
		this.init();
		this.drawing();
		this.end();						
	}
}
function Line(json){
	this.json = json;
	this.drawing = function(){
		var ctx = this.json.context;
		if(this.json.x1){
			ctx.moveTo(this.json.x1,this.json.y1);		
		}
		ctx.lineTo(this.json.x2,this.json.y2);		
	}
}
function quadraticCurve(json){
	this.json = json;
	this.drawing = function(){
		var ctx = this.json.context;
		if(this.json.x1){
		ctx.moveTo(this.json.x1,this.json.y1);		
		}
		ctx.quadraticCurveTo(this.json.x2,this.json.y2,this.json.x3,this.json.y3);		
	}
}
function ellipse(json){
	this.json = json;
	this.drawing = function(){
		var ctx = this.json.context;
		if(this.json.x1){
			ctx.moveTo(this.json.x1,this.json.y1);		
		}
		ctx.ellipse(this.json.x2,this.json.y2,this.json.long,this.json.short,this.json.rotateAngle,this.json.startAngle,this.json.endAngle);		
	}
}
function circle(json){
	this.json = json;
	this.drawing = function(){
		var ctx = this.json.context;
		if(this.json.x1){
			ctx.moveTo(this.json.x1,this.json.y1);
		}
		ctx.arc(this.json.x2,this.json.y2,this.json.radius,this.json.startAngle,this.json.endAngle);
	}
}

Line.prototype = Shape.fn;
quadraticCurve.prototype = Shape.fn;
ellipse.prototype = Shape.fn;
circle.prototype = Shape.fn;

function Stage(option){
	var parent = document.querySelector(option.id);
	var canvas = document.createElement("canvas");
	this.context = canvas.getContext("2d");
	parent.appendChild(canvas);
	canvas.width = option.width || 300;
	canvas.height = option.height || 150;
	this.shapes = [];
	this.add = function(shape){
		shape.json.context = this.context;
		shape.json.cas = canvas;
		this.shapes.push(shape)
	};
	this.render = function(){
		this.shapes.forEach(function(v){
			v.draw();
		})
	}
}

Stage.line = Line;
Stage.quadraticCurve = quadraticCurve;
Stage.ellipse = ellipse;
Stage.circle = circle;

window.Stage = window.S =Stage;


})(window);