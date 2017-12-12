const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const backgroundImg = new Image();
backgroundImg.src = "https://static3.scirra.net/images/newstore/products/1506/4.png";

const heroImg = new Image();
heroImg.src = "https://s3.amazonaws.com/gameartpartnersimagehost/wp-content/uploads/2016/03/Adventure-Boy-Featured-Game-Art.png";

const jumpSound = new Audio();
jumpSound.src = "";
// const snowballs = {
	// x: Math.random() * canvas.width,
	// y: Math.random() * canvas.height,
	// radius: Math.random() * 15 + 2
// };

const hero = {
	x:		canvas.width / 2,
	y:		canvas.height - 100,
	image:	heroImg,
	width:	200,
	height:	200,
	yDelta:	0,
}

const rectX = [-400, canvas.width];
const index = Math.round(Math.random());
const chooseX = rectX[index];

const rect = {
	x: 		chooseX,
	y:		canvas.height - 30,
	width:	130,
	height:	15,
	xd: 	5,
}

const draw = function()
{
	ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(hero.image, hero.x, hero.y, hero.width, hero.height);
	ctx.clearRect(rect.x, rect.y, rect.width, rect.height);
		ctx.fillStyle = "yellow";
		ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
};

const maxJump = canvas.height - hero.y / 2;

const updateGame = function() 
{ //jump

	if(hero.yDelta !== 0)
	{
		hero.y = hero.y - hero.yDelta;
	}
	if(hero.y < maxJump) {
		hero.yDelta = -hero.yDelta;
	}
	else if(hero.y > canvas.height - hero.height)
	{
		hero.y = canvas.height - hero.height;
	}
	//stacks
	
	if(index === 0) {
		rect.x += rect.xd;
		if(rect.x > canvas.width / 2){
		rect.x = canvas.width / 2;
	}
		}
		else if(index === 1) {
			rect.x += -rect.xd;
			if(rect.x < canvas.width / 2){
		rect.x = canvas.width / 2;
	}
		}
		
		//collision
		
		if(hero.y + hero.height > rect.y) {
		rect.x = rect.x + 0;
	}
	else if(hero.x < rect.x + rect.width && hero.x + hero.width > rect.x) {
		
	}
};

// const update = funcion() {
		
	// if(index === 0) {
		// rect.x += rect.xd;
		// if(rect.x > canvas.width / 2){
		// rect.x = canvas.width / 2;
	// }
		// }
		// else if(index === 1) {
			// rect.x += -rect.xd;
			// if(rect.x < canvas.width / 2){
		// rect.x = canvas.width / 2;
	// }
		// }
		// rect.y += 10;
// }

const loop = function() 
{
	requestAnimationFrame(loop);
	draw();
	updateGame();
	// update();
};

loop();

const upKey = 38;

document.addEventListener("keydown", function(event){
		if(event.keyCode === upKey)
		{
			if(hero.yDelta <= 0) {
			hero.yDelta = 3;
		}
	}
}, false);



