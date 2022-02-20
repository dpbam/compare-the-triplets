const a = [5, 6, 7];
const b = [3, 6, 10];

// if a[0] > b[0], alice receives 1 point
// if b[0] > a[0], bob receives 1 point
// if a[0] = b[0], nobody receives a point

function compareTriplets(a, b) {
  let aPoints = 0;
  let bPoints = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aPoints++;
    }
    if (b[i] > a[i]) {
      bPoints++;
    }
  }
  return [aPoints, bPoints];
}
