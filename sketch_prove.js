let sketch = function(p){

p.x = 0;
p.y = 0;

  p.setup = function() {
    p.createCanvas(100, 100);
    p.position(p.x,p.y);
    p.background(234, 100, 100);
  };

  p.draw = function() {
      p.fill(p.color("yellow"));
      p.ellipse(p.mouseX, p.mouseY, 20);
  };
}

for(let i = 0; i < 10; i++){

let myp5 = new p5(sketch);
}






// let multiCanvas = [];
//
// let sketch = function(p){
//
// p.setup = function(){
//   let canvas = p.createCanvas(800,800);
//   p.background(100);
//
//
//   for(let i = 0; i < 5; i++){
//
//       const newCanvas = new Canvas (40*[i],60*[i],40,60);
//
//       multiCanvas.push(newCanvas);
//
//   }
//
//   for(let i = 0; i < 5; i++){
//
//       multiCanvas[i].run();
//   }
//
// };
//
// }
//
//
//
//
//
//
//
//
// class Canvas {
//
//   constructor(x,y,width,height){
//     this.width = width;
//     this.height = height;
//   }
//
//   display(){
//
//     createCanvas(this.width,this.height);
//     position(this.x,this.y);
//     background(random(255));
//
//     }
//
//   run(){
//     this.display();
//   }
//
// }








// noCanvas();
//
//
// for(let j = 0; j < 5 ; j++ ){
//
//
// for(let i = 0; i< 10; i++){
//
//   let element = createElement("span","0");
//
//   element.id("element-"+[i+j]);
//
// }
//
// let element = createElement("br");
//
// }
//
// let zeros = selectAll("span");
//
// zeros.forEach(function(p){
//
// // p.addClass("zero");
//
// p.mouseOver(function(){
//
//
// });
//
//
//
// });
