let map;
let zoom = 1;
let clat = 0;
let clon = 0;
let lat = 31.2304;
let lon = 121.473;

function preload() {
  map = loadImage(
    "https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1Ijoic2lheXVzaCIsImEiOiJja3BjaW1tbm0xN25uMndxbTc2bGx1YjQ0In0.Ngp1ZLHjeBCTBJmb23fqEA"
  );
}

function mercX(lon) {
  lon = radians(lon);
  let a = (256 / PI) * pow(2, zoom);
  let b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  let a = (256 / PI) * pow(2, zoom);
  let b = tan(PI / 4 + lat / 2);
  let c = PI - log(b);
  return a * c;
}

function setup() {
  createCanvas(1024, 512);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(map, 0, 0);

  let cx = mercX(clon);
  let cy = mercY(clat);
  let x = mercX(lon) - cx;
  let y = mercY(lat) - cy;
  fill(255, 0, 255, 200);
  ellipse(x, y, 20, 20);
}
