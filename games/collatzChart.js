//v2
const numberInput = document.getElementById("numberInput");
let collatzSequence = [];
let steps = [];
const ctx = document.getElementById("collatzChart").getContext("2d");
let myLineChart;

function setNumber() {
  const startNum = parseFloat(numberInput.value);
  collatzSequence = collatzLoop(startNum, 1);
  createChart(collatzSequence, steps);
}

function collatzLoop(n, i) {
  const sequence = [n];
  steps = [i];
  do {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    i++;
    steps.push(i);
    sequence.push(n);
  } while (n != 1);
  console.log(sequence);
  console.log(steps);
  return sequence;
}

function createChart(data, xAxisData) {
  if (myLineChart) {
    myLineChart.destroy();
  }

  myLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xAxisData,
      datasets: [
        {
          label: "Collatz Sequence",
          data: data,
          fill: false,
          borderColor: "rgb(255, 0, 0)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          type: "linear",
          position: "bottom",
        },
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
    title:{
      display: true,
      fullSize: true,
      text: 'Collatz Sequence'

    },

      }
    },
  });
}

createChart(myLineChart, steps);
