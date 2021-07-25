class component{
	constructor(num, width, height, color, x, y){
		this.num=num;
		this.width=width;
		this.height=height;
		this.color=color;
		this.x=x;
		this.y=y;
		this.speedX=0;
		this.speedY=0;
	}
	update() {
		var cx=myArea.cx;
		cx.fillStyle=this.color;
		cx.fillRect(this.x,this.y,this.width,this.height);
	}
	
}

function pallone(x,y,r,color) {
	this.x=x;
	this.y=y;
	this.r=r;
	this.speedX=0;
	this.speedY=0;
	this.update=function() {
		var cx=myArea.cx;
		cx.beginPath();
		cx.arc(this.x,this.y,this.r,0,2*Math.PI);
		cx.stroke();
	}
}


class gestisciArea{
    constructor(boh){
	 this.canvas=document.getElementById("mycanvas");
	 this.canvas.width=840;
	 this.canvas.height=500;
	 this.cx=this.canvas.getContext("2d");
	 this.cx.drawImage(bgcanvas,0,0,840,500);
	 this.x;
	 this.y;
	 //disegna gli attori;
	}
    listen(dao){
      if(dao instanceof component){
	this.interval = setInterval(funupdate, 60, this, dao);
	window.addEventListener('mouseup', function (e) {
	   finespostaplayer(dao);
	});
	window.addEventListener('touchend', function (e) {
	   finespostaplayer(dao);
	});
	window.addEventListener('mousemove', function (e) {
            myArea.x = e.pageX;
            myArea.y = e.pageY;
        });
        window.addEventListener('touchstart', function (e) {
            myArea.x = e.touches[0].screenX;
            myArea.y = e.touches[0].screenY;
        });
	
      }
	else
  	 {
	   this.interval=setInterval(calciapalla,60,this,dao);
	   window.addEventListener('mouseup', function (e) {
	   finespostaplayer();
	});
	window.addEventListener('touchend', function (e) {
	   finespostaplayer();
	});
	window.addEventListener('mousemove', function (e) {
            myArea.x = e.pageX;
            myArea.y = e.pageY;
        });
        window.addEventListener('touchmove', function (e) {
            myArea.x = e.touches[0].screenX;
            myArea.y = e.touches[0].screenY;
        });
	}
     }
     nolisten(){
	clearInterval(this.interval);
	}
     clear(){
	this.cx.clearRect(0,0,this.canvas.width,this.canvas.height);
	this.cx.drawImage(bgcanvas,0,0,840,500);
	}
     /*update(component){
	//var comp=this.component;
	this.clear;
	document.getElementById("luchina").innerHTML=this.x;
	if(this.x && this.y){
	  component.x=this.x;
	  component.y=this.y;
	}
	component.update;
	}*/
}


function startArea(){
	myArea= new gestisciArea("");
	palla= new pallone(420,250,10,"black");
	palla.update();	
	for(let i=0;i<frm['n'];i++){
		let j=i.toString();
		red.push(new component(i,frm[j].w,frm[j].h,frm[j].c,frm[j].x,frm[j].y));
		red[i].update();
	}
}

function iniziospostaplayer(dao){
	myArea.listen(dao);		
}

function finespostaplayer(){
	myArea.nolisten();
}

function funupdate(area, component){
	area.clear();
	for(let i=0;i<frm['n'];i++){
		if(i!=component.num) red[i].update();
	}
	palla.update();
	document.getElementById("luchino").innerHTML=area.x;
	document.getElementById("luchina").innerHTML=area.y;
	if(area.x && area.y){
	  component.x=area.x;
	  component.y=area.y;
	}
	component.update();
}

function calciapalla(area, component){
	area.clear();
	for(let i=0;i<frm['n'];i++) red[i].update();
	document.getElementById("luchino").innerHTML=area.x;
	document.getElementById("luchina").innerHTML=area.y;
	if(area.x && area.y){
	  component.x=area.x;
	  component.y=area.y;
	}
	component.update();
}

var frm={
	'0':{'w':25,'h':25,'c':'red','x':49,'y':240},
	'1':{'w':25,'h':25,'c':'red','x':242,'y':239},
	'2':{'w':25,'h':25,'c':'red','x':307,'y':117},
	'3':{'w':25,'h':25,'c':'red','x':307,'y':353},
	'4':{'w':25,'h':25,'c':'red','x':381,'y':238},
	'5':{'w':25,'h':25,'c':'blue','x':767,'y':240},
	'6':{'w':25,'h':25,'c':'blue','x':572,'y':239},
	'7':{'w':25,'h':25,'c':'blue','x':517,'y':117},
	'8':{'w':25,'h':25,'c':'blue','x':507,'y':353},
	'9':{'w':25,'h':25,'c':'blue','x':434,'y':238},
	'n':10,
	'p':{'w':25,'h':25,'c':'white','x':434,'y':238}
};
var bgcanvas = document.createElement("img");
bgcanvas.src = "img/campocalcio.jpg";
var red=[];
var myArea;
var pallone;
