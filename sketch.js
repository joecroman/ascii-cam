const density = "   Ñ@#W$9876543210?!abc;:+=-,._   ";
let source;


function setup() {
  createCanvas(1664, 936);
  source = createCapture(VIDEO);
  source.size(96,54);
}

function draw() {
  background(0);
  //noBackground();
  
  let w = width / source.width;
  let h = height / source.height;
  
  source.loadPixels();
  
  for (let i = 0; i < source.width; i++) {
    for (let j = 0; j < source.height; j++) {
      const pixelIndex = (i + j * source.width) * 4; 
      let r = source.pixels[pixelIndex + 0];
      let g = source.pixels[pixelIndex + 1];
      let b = source.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      
      noStroke();
      fill((255*0.66) + (avg*0.34));
      
      const len = density.length;
      const charIndex = floor(map(avg, 0 , 255, len, 0));
      //square(i * w, j * h, w);
      textFont('Courier');
      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
    }
  }
  
}
