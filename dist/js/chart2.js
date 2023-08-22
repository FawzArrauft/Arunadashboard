// import ApexCharts from "apexcharts";
// ApexCharts options and config
window.addEventListener("load", function () {
    const options = {
      colors: ["#c0392b"],
      series: [
        {
          name: "Power",
          color: "#c0392b",
          data: [
            { x: "Mon", y: 232 },
            { x: "Tue", y: 113 },
            { x: "Wed", y: 341 },
            { x: "Thu", y: 224 },
            { x: "Fri", y: 322 },
            { x: "Sat", y: 210 },
            { x: "Sun", y: 180 },
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
          shade: "#c0392b",
          gradientToColors: ["#c0392b"],
        }
      },
    };
  
    if (
      document.getElementById("column-chart-2") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("column-chart-2"),
        options
      );
      chart.render();
    }
  });
  