var media = window.matchMedia("(max-width: 739px)");

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Paid out",
      data: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "#000",
      // yAxisID: "left-y-axis",
    },
    {
      label: "Expected",
      data: [1100, 1480, 350, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "#b0b0b0",
      // yAxisID: "right-y-axis",
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          // maxTicksLimit: 500,
        },
      },
      y: {
        position: "right",
        stacked: true,
        ticks: {
          fontStyle: "bold",
          display: true,
          stepSize: 500,
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return "$" + value;
          },
        },
        title: { display: true, text: "Earnings" },
        afterBuildTicks: function (scale) {
          const newTicks = [...scale.ticks];
          newTicks.splice(scale.ticks.length - 1, 1);
          scale.ticks = newTicks;
          // scale.ticks = updateChartTicks(scale);
          return;
        },
      },
    },
  },
};
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

new Chart("chart", config);

$(".left-menu-toggle").click(function () {
  if (media.matches) {
    $(".sidebar").toggleClass("open");
  } else {
    $(".sidebar").animate({ width: "toggle" }, 400);
  }
});

$(".sidebar .close").click(function () {
  $(".sidebar").toggleClass("open");
});

$("#navbar .options .menu").click(function () {
  $(".navbar-sm").toggleClass("active");
  if ($(this).attr("src") === "./assets/vectors/hamburger.svg") {
    $(this).attr("src", "./assets/vectors/close.svg");
  } else {
    $(this).attr("src", "./assets/vectors/hamburger.svg");
  }
});
