var trex, trex_img;
var bordas;

function preload() {
  //pre carregar as imagens,sons,etc

  trex_img = loadAnimation("trex3.png", "trex4.png");
}

function setup() {
  createCanvas(600, 200);

  //configuracoes do trex
  trex = createSprite(50, 100, 20, 20);
  trex.addAnimation("correndo", trex_img);
  trex.scale = 0.5;

  bordas = createEdgeSprites();
}

function draw() {
  background("white");

  if (keyDown("w")) {
    trex.velocityY = -10;
  }

  //gravidade
  trex.velocityY = trex.velocityY + 1;

  trex.collide(bordas);

  drawSprites();
}
