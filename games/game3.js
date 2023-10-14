// Collatz sequence
// make loop, end at one
// show on graph
const numberInput = document.getElementById("numberInput");
const collatzSequence = [];

function setNumber() {
  const startNum = parseFloat(numberInput.value);
  collatzLoop(startNum);
}

function collatzLoop(n) {
  const sequence = [n];
  do {
    if (n % 2 === 0) {
      //if even, divide by 2
      n = n / 2;
    } else {
      //if odd, 3n+1
      n = 3 * n + 1;
    }
    sequence.push(n);
  } while (n != 1);
  return sequence;
}


//chart config
const ctx = document.getElementById('collatzChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Collatz Sequence',
      data: collatzSequence,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
