// import ApexCharts from "apexcharts";
// ApexCharts options and config
window.addEventListener("load", function () {
  const options = {
    colors: ["#2ecc71"],
    series: [
      {
        name: "Power",
        color: "#2ecc71",
        data: [
          { x: "Mon", y: 232 },
          { x: "Tue", y: 113 },
          { x: "Wed", y: 341 },
          { x: "Thu", y: 224 },
          { x: "Fri", y: 522 },
          { x: "Sat", y: 530 },
          { x: "Sun", y: 598 },
        ],
      },
    ],
    chart: {
      type: "area",
      height: "100%",
      width: "100%",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
      dropshadow: {
        show: false,
      },
      zoom: {
        enabled: false,
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadiusApplication: "end",
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 1,
        right: 1,
        top: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-200",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opactiyTo: 0,
        shade: "#2ecc71",
        gradientToColors: ["#2ecc71"],
      }
    },
  };

  if (
    document.getElementById("column-chart") &&
    typeof ApexCharts !== "undefined"
  ) {
    const chart = new ApexCharts(
      document.getElementById("column-chart"),
      options
    );
    chart.render();
  }
});
