// 获取页面中的元素
var wrap = $(".wrap");
var leftBar = $(".left_bar");
var slide = $(".slide");
var mask = $(".mask");
var width = slide.width();
var spans = $(".info_a").find('span');
var spanMe = $(".user").find('span');
var spanGithub = $(".github").find('span');
var me = $(".slide_content .me"); 
var github = $(".slide_content .github"); 
console.log(width);
// 当点击左边侧栏的时候开始转动
leftBar.on("click",function(){
	wrap.css('transform',"translateX("+width+"px) rotateY(30deg)");
	mask.css("display","block");
});
// 点击遮罩层使其恢复
mask.on("click",function(){
	wrap.css('transform',"none");
	mask.css("display","none");
})
// 绑定鼠标经过左边侧栏时候标签a背景变色
spans.on("mouseenter",function(){
	$(this).css({"background":"#ccc",color:"#ff0000"});
}).on("mouseout",function(){
	$(this).css({"background":"silver",color:"green"});
})
spanMe.on("click",function(){
	me.css({'display':"block"}).siblings().css({"display":"none"});
})
spanGithub.on("click",function(){
	github.css({'display':"block"}).siblings().css({"display":"none"});
})
// 画布
// var windowWidth = $('html').width();
var option = {
		id: "#canvas",
		height: 600,
		width: 700,	
	}
	 var stage = new Stage(option);
     // 底盘
	 var arr1 = [{x2:370,y2:460,long:167,short:62,rotateAngle:0,startAngle:-1.5707963267948966,endAngle:4.71238898038469,fill:true,fillStyle:"rgba(156,218,241,0.8)"}];
	 arr1.forEach(function(v){
	 	stage.add(new Stage.ellipse(v)); 
	 });

	 // 尾巴
	 var arr8 = [{x1:309,y1:370,x2:279,y2:385,x3:238,y3:370},{x2:228,y2:365,x3:208,y3:340},{x2:198,y2:325,x3:178,y3:320},{x2:158,y2:315,x3:178,y3:310},{x2:203,y2:300,x3:224,y3:330},{x2:264,y2:370,x3:314,y3:338,fill:true}];
	 arr8.forEach(function(v){
	 	stage.add(new Stage.quadraticCurve(v));
	 })
	 // 尾巴上的椭圆
	 var arr9 = [{x2:314,y2:350,long:10,short:5,rotateAngle:0,startAngle:-1.5707963267948966,endAngle:4.71238898038469,stroke:true,fill:true,fillStyle:"rgba(156,218,241,0.8)"},{x2:289,y2:358,long:8,short:4,rotateAngle:0.01,startAngle:-1.5707963267948966,endAngle:4.71238898038469,stroke:true,fill:true,fillStyle:"rgba(156,218,241,0.8)"},{x2:266,y2:358,long:6,short:4,rotateAngle:0.2,startAngle:-1.5707963267948966,endAngle:4.71238898038469,stroke:true,fill:true,fillStyle:"rgba(156,218,241,0.8)"},{x2:243,y2:350,long:5,short:3,rotateAngle:0.5,startAngle:-1.5707963267948966,endAngle:4.71238898038469,stroke:true,fill:true,fillStyle:"rgba(156,218,241,0.8)"},{x2:223,y2:335,long:5,short:3,rotateAngle:0.6,startAngle:-1.5707963267948966,endAngle:4.71238898038469,stroke:true,fill:true,fillStyle:"rgba(156,218,241,0.8)"},{x2:208,y2:320,long:4,short:2,rotateAngle:0.6,startAngle:-1.5707963267948966,endAngle:4.71238898038469,stroke:true,fill:true,fillStyle:"rgba(156,218,241,0.8)"},{x2:188,y2:310,long:3,short:2,rotateAngle:0.4,startAngle:-1.5707963267948966,endAngle:4.71238898038469,stroke:true,fill:true,fillStyle:"rgba(156,218,241,0.8)"}]
	 arr9.forEach(function(v){
	 	stage.add(new Stage.ellipse(v));
	 })
	 // 主体
	 var arr2=[{x1:200,y1:10,x2:240,y2:15,x3:280,y3:40},{x2:360,y2:20,x3:425,y3:40},{x2:450,y2:15,x3:490,y3:10},{x2:510,y2:45,x3:487,y3:80},{x2:528,y2:105,x3:523,y3:216},{x2:523,y2:281,x3:407,y3:306},{x2:432,y2:316,x3:432,y3:366},{x2:432,y2:366,x3:432,y3:426},{x2:432,y2:437,x3:454,y3:448},{x2:474,y2:453,x3:454,y3:458},{x2:414,y2:453,x3:414,y3:433},{x2:414,y2:433,x3:414,y3:363},{x2:414,y2:348,x3:404,y3:341},{x2:404,y2:341,x3:404,y3:451},{x2:404,y2:458,x3:414,y3:465},{x2:434,y2:473,x3:414,y3:478},{x2:384,y2:478,x3:378,y3:448},{x2:378,y2:448,x3:378,y3:338},{x2:373,y2:333,x3:368,y3:338},{x2:368,y2:338,x3:368,y3:451},{x2:368,y2:476,x3:338,y3:481},{x2:323,y2:481,x3:338,y3:467},{x2:346,y2:464,x3:346,y3:459},{x2:346,y2:459,x3:346,y3:347},{x2:336,y2:347,x3:336,y3:367},{x2:336,y2:367,x3:336,y3:387},{x2:336,y2:387,x3:336,y3:449},{x2:336,y2:474,x3:296,y3:483},{x2:286,y2:483,x3:296,y3:473},{x2:306,y2:466,x3:309,y3:453},{x2:309,y2:453,x3:309,y3:363},{x2:309,y2:323,x3:334,y3:308},{x2:204,y2:288,x3:204,y3:223},{x2:194,y2:127,x3:219,y3:83},{x2:189,y2:63,x3:200,y3:10,fill:true}];
	 	arr2.forEach(function(v){
	 		stage.add(new Stage.quadraticCurve(v));
	 	})
	 	// 脸
	 	var arr3 = [{x1:235,y1:200,x2:235,y2:278,x3:313,y3:278},{x2:313,y2:278,x3:410,y3:278},{x2:488,y2:278,x3:488,y3:200},{x2:488,y2:145,x3:433,y3:145},{x2:413,y2:145,x3:353,y3:150},{x2:343,y2:150,x3:273,y3:145},{x2:233,y2:145,x3:235,y3:200,fill:true,fillStyle:"#f4cbb2"}];
	 	arr3.forEach(function(v){
	 		stage.add(new Stage.quadraticCurve(v));
	 	})
	 	// 额头上的阴影
	 	var arr4 = [{x1:488,y1:200,x2:488,y2:145,x3:433,y3:145},{x2:413,y2:145,x3:353,y3:150},{x2:343,y2:150,x3:273,y3:145},{x2:233,y2:145,x3:235,y3:200},{x2:233,y2:135,x3:313,y3:157},{x2:353,y2:162,x3:393,y3:157},{x2:443,y2:145,x3:478,y3:162,fill:true,fillStyle:'rgba(100,100,100,0.2)'}];
	 	arr4.forEach(function(v){
	 		stage.add(new Stage.quadraticCurve(v));
	 	});
	 	// 鼻子
	 	var arr5 = [{x1:360,y1:240,x2:360,y2:240,radius:7,startAngle:0,endAngle:6.283185307179586,fill:true,fillStyle:"#ad5c51"}];
	 	arr5.forEach(function(v){
	 		stage.add(new Stage.circle(v));
	 	});
	 	// 嘴
	 	var arr6 = [{x1:345,y1:255,x2:360,y2:270,x3:375,y3:255,stroke:true,strokeStyle:"#ad5c51",lineWidth:3}]
	 	arr6.forEach(function(v){
	 		stage.add(new Stage.quadraticCurve(v));
	 	});
	 	// 胡须
	 	var arr7 =[{x1:205,y1:220,x2:141,y2:210,x3:77,y3:232,stroke:true},{x1:205,y1:235,x2:135,y2:230,x3:75,y3:255,stroke:true},{x1:520,y1:220,x2:584,y2:210,x3:648,y3:232,stroke:true},{x1:520,y1:235,x2:584,y2:230,x3:648,y3:255,stroke:true}];
	 	arr7.forEach(function(v){
	 		stage.add(new Stage.quadraticCurve(v));
	 	})
	 stage.render();

	 // 眼睛
	 var stage2 = new Stage(option);
	 var eyeHeight = 0,
            eyeWidth = 0;
     var index = 0,flag = true;
     var positionX = 0,
            positionY = 0;
     var arr10 = [],
     	arr11 = [];
	 setInterval(function(){
	 	 if(eyeHeight <45){
            eyeHeight+=10;
            eyeWidth += 5;
            flag = false;
        } else {
            eyeHeight = 45;
            eyeWidth = 28;
            index ++;
            flag = true;
        }
        if(index>40){
            index = 0;
            eyeHeight = 0;
            eyeWidth = 0;
            flag = false;
        }
        if(flag){
            if(positionY < 20){
                positionX+=0.3;
                positionY+=3;
            }
        	}else {
        	    positionX = 0;
        	    positionY = 0;
        	}
	 	arr10 = [{x2:288,y2:210,long:eyeWidth,short:eyeHeight,rotateAngle:0,startAngle:-1.5707963267948966,endAngle:4.71238898038469,fill:true,fillStyle:"#fff",clearRect:true},{x2:290,y2:210,long:eyeWidth/28*20,short:eyeHeight/45*30,rotateAngle:0,startAngle:-1.5707963267948966,endAngle:4.71238898038469,fill:true,fillStyle:"#ad5c51"},{x2:438,y2:210,long:eyeWidth,short:eyeHeight,rotateAngle:0,startAngle:-1.5707963267948966,endAngle:4.71238898038469,fill:true,fillStyle:"#fff"},{x2:436,y2:210,long:eyeWidth/28*20,short:eyeHeight/45*30,rotateAngle:0,startAngle:-1.5707963267948966,endAngle:4.71238898038469,fill:true,fillStyle:"#ad5c51"}];
	 	arr11 = [{x1:283,y1:197,x2:283+positionX,y2:197+positionY,radius:eyeHeight/45*7,startAngle:0,endAngle:6.283185307179586,fill:true,fillStyle:"#fff"},{x1:430,y1:197,x2:430+positionX,y2:197+positionY,radius:eyeHeight/45*7,startAngle:0,endAngle:6.283185307179586,fill:true,fillStyle:"#fff"}];
	 	 arr10.forEach(function(v){
		 	stage2.add(new Stage.ellipse(v));
		 })
	 	arr11.forEach(function(v){
	 		stage2.add(new Stage.circle(v));
	 	})
	 	stage2.render();
	 	stage2.shapes = [];
	 },50);