let map;

function preload() {
  map = loadImage(
    "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4241,37.78,14.25,0,60/600x600?access_token=pk.eyJ1Ijoic2lheXVzaCIsImEiOiJja3BjaW1tbm0xN25uMndxbTc2bGx1YjQ0In0.Ngp1ZLHjeBCTBJmb23fqEA"
  );
}

function setup() {
  createCanvas(600, 600);
  image(map, 0, 0);
}

function draw() {}
