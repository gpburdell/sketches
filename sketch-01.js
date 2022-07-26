const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080,1080],

};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";

    context.fillRect(100, 100, width, height);
    context.lineWidth = width * 0.01

    let w = width * 0.1;
    let h = height * 0.1;
    let gap = width * 0.03;
    const ix = width * 0.17
    const iy = height *0.17
    const off = width *.02
    let x, y

    // context.beginPath()

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        console.log(i);

        x = ix + (w + gap) * i;
        y = iy + (w + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          console.log(Math.random() > 0.5)
          context.beginPath();
          context.rect(x + off/2, y + off/2, w - off, h - off);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
