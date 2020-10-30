// let capture;
let d = 0;

function setup() {
  // createCanvas(windowWidth, windowHeight)
  // capture = createCapture(VIDEO);
  // capture.hide();

  let inp = createInput('');
  inp.input(myInputEvent);

  }

function mouseWheel() {
  if (event.deltaY > 0) {
    d = d - 10;
  } else {
    d = d + 10;
  }
}


function myInputEvent() {

createElement("span",this.value());


}


function draw() {
  // if (capture.loadedmetadata) {
  //   for(let j = 0; j < height/100; j++){
  //   for (let i = 0; i < width / 100; i++) {
  //     image(capture, i*100, j*100, 100, 100);
  //   }
  // }
  // }

  console.log(d);

}
