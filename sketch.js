let capture;
let videoColors;
let hexColors;
// let bright = 0;

const w= 55;
const h = 30;
let textW, textH;

let element;
let myText = [];
let myBr = [];

let myDiv;


function setup() {

  frameRate(5);
  noCanvas();


  capture = createCapture(VIDEO);

  capture.size(w, h);
  capture.hide();

  console.log(windowHeight);
  console.log(windowWidth);

  myDiv = createElement("div");
  myDiv.style("margin-top","7%");

  document.bgColor = "black";
  }


function draw() {


  // videoColors = capture.get(10,10);
  // console.log(videoColors);
  //
  //
  //
  // for (let i = 0; i < 3; i++) {
  //
  //   // console.log(videoColors[i]);
  //   bright += videoColors[i];
  //   // console.log(bright);
  //
  // }
  //
  // hexColors = hex(bright / 3);
  // // console.log(hexColors);
  // bright = 0;

  if(windowWidth<3/2*windowHeight){

    textW = 0.018 * windowWidth;
    textH = textW / 3 * 2 / 26;
    console.log(textW + " "+ textH);

  }else{

    textH = 0.0011*windowHeight;
    textW = textH / 2 * 3 * 16;
    console.log(textW + " "+ textH);

  }


  removeText();

  createText();

  }


function createText() {


  for (let j = 0; j <h; j++) {

    for (let i = 0; i < w; i++) {

      element = createElement("span", "O");

      element.style("font-size", textW + "px");
      element.style("background-color", "black");



      videoColors = capture.get(i, j);

      hexColors = rgbToHex(videoColors[0],videoColors[1],videoColors[2]);

      console.log(hexColors);



      element.style("color", hexColors);
      element.style("line-height",  textH);

      if(i===0){

        element.style("margin-left",  "15%");

      }


      myText.push(element);


    }

    let br = createElement("br");
    myBr.push(br);

  }




}


function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}



function removeText() {


  for (let k = 0; k < myText.length; k++) {
    myText[k].remove();
  }

  for (let k = 0; k < myBr.length; k++) {
    myBr[k].remove();
  }



}
