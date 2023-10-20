// Collatz sequence
// make loop, end at one
// show on graph
const numberInput = document.getElementById("numberInput");
let collatzSequence = [];
let sequence = [];
let steps = [];
const ctx = document.getElementById("collatzChart").getContext('2d');

function setNumber() {
  const startNum = parseFloat(numberInput.value);
  collatzSequence = collatzLoop(startNum, 1);
  createChart(collatzSequence);
}

function collatzLoop(n, i) {
  sequence = [n];
  steps = [i];
  do {
    if (n % 2 === 0) {
      //if even, divide by 2
      n = n / 2;
    } else {
      //if odd, 3n+1
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

// #region chart
// config

// Function to get dynamic max and min values for X and Y axes
function getMinMaxValues(sequence, steps) {
  // Calculate the maximum value for the Y-axis
  const maxY = Math.max(...sequence);
  const minX = Math.min(...sequence);

  // Use the number of data points for the maximum value of the X-axis
  const maxX = steps.length;
  const minY = 0;

  return { maxX, maxY, minX, minY };
}

const initialData = [1,2,3,4];
const chartData = {
  labels: steps,
  datasets: [
    {
      label: "Collatz Sequence",
      data: collatzSequence,
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const chartConfig = {
  type: "line",
  data: chartData,
  options: {
    responsive:true,
    title:{
        display:true,
        text: 'Collatz Sequence',
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        max: 0, // Set a default max value for the X-axis (you can update this dynamically)
        min: 0,
      },
      y: {
        max: 0, // Set a default max value for the Y-axis (you can update this dynamically)
        min: 0,
      },
    },
  },
};

let myLineChart = new Chart(ctx, chartConfig);

// Get dynamic max values for the X and Y axes

// Update the max values in the chart config

// Create the line chart
function createChart(data) {
  const { maxX, maxY, minX, minY } = getMinMaxValues(sequence, steps);
  chartConfig.options.scales.x.max = maxX;
  chartConfig.options.scales.y.max = maxY;
  chartConfig.options.scales.x.min = minX;
  chartConfig.options.scales.y.min = minY;
  // myLineChart = new Chart (ctx, chartConfig);
  chartData.datasets[0].data = data;
  myLineChart.update();
  console.log(chartData.datasets[0].data);
}
// actions

// #endregion chart
