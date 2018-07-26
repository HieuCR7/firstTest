var canvas = document.getElementById('field');
// canvas.width = 100%;
// canvas.height = 500;

var ctx = canvas.getContext('2d');
var imgTree = new Image();
imgTree.src = 'tree.png';

// var x = 100, y = 100;
// function drawCircle(){
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = '#ffffff';
//   ctx.beginPath();
//   ctx.arc(x, y, 50, 0, Math.PI * 2, false);
//   ctx.fill();
//   ctx.closePath();
//   x += 10, y+=10;
// }

function Snow(){
  this.x = Math.round(Math.random() * canvas.width); 
  this.y = Math.round(Math.random() * canvas.height); 
  this.r = Math.round(Math.random()) * 0.5 + 1; 
  // Gió thổi
  this.a = Math.random() * 5;
}

Snow.prototype.update = function(){
  ctx.beginPath();
  ctx.fillStyle = '#ffffff';
  ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();

  // Gió thổi
  this.x += Math.sin(this.a);
  this.a += 0.01;
  if(this.x > canvas.width || this.x < 0){
    this.x = Math.round(Math.random() * canvas.width);
    this.y = 0;
  }

   this.y += 2;
   if(this.y > canvas.height){
    this.y = 0;
   }
}
var totalSnows = 100;
var snows = [];
function drawSnows(){
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(var i = 0; i < totalSnows; i++){
    snows[i].update();
  }
  
}

function drawTextures(){
  ctx.drawImage(imgTree, 180, 45, 30, 30);
}

function merryXmas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTextures();
  drawSnows();
}

window.onload = function(){
  for(var i = 0; i < totalSnows; i++){
    snows.push(new Snow());
  }
  setInterval(merryXmas, 50);
  // setInterval(drawCircle, 50);
} 