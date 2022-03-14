//aqui se crean las variables
var sea,seaImage;
var ship,ship1,ship2,ship3,ship4;
var shipAnimation

//asqui se añaden las imagenes al codigo
function preload(){
seaImage = loadImage("sea.png");
shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  //aqui se crea el canvas y su tamaño
  createCanvas(400,400);
  //aqui se crean los sprites del mar y del barco, asi como de sus imagenes, animaciones, tamaño y velocidad
  sea = createSprite(200,200);
  sea.addImage(seaImage);
  ship = createSprite(180,300,300,300);
  ship.addAnimation("animation",shipAnimation);
  ship.scale=0.2;
  sea.velocityX=-4;
  }

  //aqui se crea el fondo,su color,una funcion que hace que el fondo se repita infinitamente,y la funcion para dibujar todo en el lienzo
function draw() {
  background("blue");
    drawSprites();
    if (sea.x <0) {
      sea.x = sea.width/2;
  
  }
}