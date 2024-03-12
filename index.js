/* 
Functionalities
View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day's bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page
- **Bonus**: See dynamically generated bars based on the data provided in the local JSON file

*/
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
    title: {
      display: true,
      // text: "World Wine Production 2018",
    },
  },
});
