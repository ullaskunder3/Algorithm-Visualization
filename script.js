let values = [];

let i = 0;
let j = 0;

function setup() {
  //System variable that stores the width & height of the inner window and maps to window.innerWidth & window.innerHeight.
  createCanvas(windowWidth, windowHeight);

  values = new Array(width);

  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    values[i] = noise(i/100.0)*height;
    
  }
}

function draw() {
  colorValue = Math.floor(Math.random()*256);
  background(255, colorValue, colorValue);

  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    console.log('finished');
    noLoop();
  }
  i++;

  for (let i = 0; i < values.length; i++) {
    stroke(0);
    line(i, height, i, height - values[i]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}