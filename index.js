// const file  = data.json
const blueColor = "hsl(186, 34%, 60%)";
const pinkColor = "hsl(10, 79%, 65%)";
const xValues = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
const barColors = [
  pinkColor,
  pinkColor,
  blueColor,
  pinkColor,
  pinkColor,
  pinkColor,
  pinkColor,
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    yAxes: [
      {
        display: false, // Hide the vertical axis
      },
    ],
    grid: {
      display: false,
    },
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
  // options: {
  //   scales: {

  //   },
  // },
  // grid: {
  //   display: false,
  // },
  // border: {
  //   display: false,
  // },
  // //   options: {
  //     scales: {
  //         yAxes: [{
  //             display: false // Hide the vertical axis
  //         }]
  //     }
  // }
});

/* */
