const canvasSketch = require("canvas-sketch");
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random') 

const settings = {
  dimensions: [1080, 1080],
};

const degToRad = (degrees) => {
  return (degrees / 180) * Math.PI;
};

const randomRange = (min,max) =>{
  return Math.random() *(max-min) + min
}
// var linkText = "https://stackoverflow.com";
// var linkX = 15;
// var linkY = 200;
// var linkHeight = 100;
// var linkWidth;
// document.addEventListener("mousemove", on_mousemove, false);
// document.addEventListener("click", on_click, false);
// function on_mousemove(ev) {
//   var x, y;

//   // Get the mouse position relative to the context element.
//   if (ev.layerX || ev.layerX == 0) {
//     //for firefox
//     x = ev.layerX;
//     y = ev.layerY;
//   }
//   x -= document.offsetLeft;
//   y -= document.offsetTop;

//   //is the mouse over the link?
//   if (
//     x >= linkX &&
//     x <= linkX + linkWidth &&
//     y <= linkY &&
//     y >= linkY - linkHeight
//   ) {
//     document.body.style.cursor = "pointer";
//     inLink = true;
//   } else {
//     document.body.style.cursor = "";
//     inLink = false;
//   }
// }

//if the link has been clicked, go to link
// function on_click(e) {
//   if (inLink) {
//     window.location = linkText;
//   }
// }

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    // var img = new Image();
    // img.src = "Picture3.png";
    // //img.addEventListener('load', function(){},false)
    // context.drawImage(img, 10, 10);
    context.fillStyle = "black";

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.1;
    let x,y


    const num = 24;
    const radius = width * 0.3
    
    // context.translate(x, y);

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = 0 + radius *Math.sin(angle)
      y = 0+ radius *Math.cos(angle)

      context.save();      
      context.translate(cx, cy);
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(1,3),random.range(0.2,0.5))
    
      context.beginPath();
      context.rect(-w * .5, -random.range(0.0,h*0.5), w, h);
      context.fill();
      context.restore();

      context.save()
      context.translate(cx,cy)
      context.rotate(angle)

      context.lineWidth =random.range(5,20)

      context.beginPath()
      context.arc(0,0,radius*random.range(0.7,1.3),slice *random.range(1,-8),slice *random.range(1,5))
      context.stroke()

      context.restore()
    }

    // context.translate(100, 400);
    // context.beginPath();
    // context.arc(0, 0, 50, 0, Math.PI * 2);
    // context.fill();

    // context.font = "30px sans-serif";
    // context.fillStyle = "#0000ff";
    // context.fillText(linkText, linkX, linkY);
    // linkWidth = context.measureText(linkText).width;

    //add mouse listeners

    //check if the mouse is over the link and change cursor style
  };
};

canvasSketch(sketch, settings);
