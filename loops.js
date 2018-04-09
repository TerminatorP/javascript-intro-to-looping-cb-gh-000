function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    arr.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
}

function whileLoop(arr) {
  while (arr > 0) {
    console.log(--arr);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}
function doWhileLoop(arr) {
  do {
    arr.pop();
  } while (arr.length > 0 && maybeTrue());
}
