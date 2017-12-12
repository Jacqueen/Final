const canvas = document.getElementById("game");
canvas.width = 800;
canvas.height = window.innerHeight + 100;
const ctx = canvas.getContext("2d");

const gameBackgroundImg = new Image();
gameBackgroundImg.src = "http://2.bp.blogspot.com/-qPkn4_otdyw/TqK7M9Lj6ZI/AAAAAAAAH6E/HNT8rzA-_gQ/s1600/scary_wallpaper_zombie_picture_05.jpg";

const heroImg = new Image();
heroImg.src = "http://assets.stickpng.com/thumbs/5854072e03ee951554d75d2c.png";

const gameData = {
	hero: {
		x: 			200,
		y: 			315,
		width: 		170,
		height: 	170,
		image: 		heroImg,
		Xdelta: 	1,
		Ydelta: 	0,
	},
};



const draw = function() {
	const hero = gameData.hero;
	ctx.drawImage(gameBackgroundImg, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(hero.image, hero.x, hero.y, hero.width, hero.height);
	
};

const gameUptade = function(){
	
};

const loop = function(){
	requestAnimationFrame(loop);
	draw();
	gameUptade();
};

loop();



	const leftKey = 37;
	const upKey = 38;
	const rightKey = 39;
	
	
	
	document.addEventListener('keydown', function(event){
		
		if(event.keyCode === rightKey) {
			
			const hero = gameData.hero;
			hero.x = hero.x + 5;
			
			if(hero.x > canvas.width) {
				hero.x = -hero.width;
			}
			
		}
		
		else if(event.keyCode === leftKey){
			
			const hero = gameData.hero;
			hero.x = hero.x - 5;
			
			if(hero.x + hero.width < 0) {
				hero.x = canvas.width;
			}
			
		}
		
	}, false);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

