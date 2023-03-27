const app = Vue.createApp({
  data() {
      return {
        taiwanCountry: [],
        CountryName: '',
        options5:'',
        SoftwareOptions:'',
        HardwareOptions:'',
        ServeOptions:'',
        OptionsCircle:'',
        LineOptions:'',
        iteration:11,
        trigoStrength:3,
      }
  },
  methods: {
    draw:function(mapData) {
      var _this = this;
      let svg = d3.select('svg');
      
      let projection = d3.geoMercator()
          .center([123, 24])
          .scale(5500);
      let path = d3.geoPath(projection);

      // 定義 Zoom 行為
      const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on('zoom', () => {
              svg.call(d3.zoom().on("zoom", function () {
                svg.attr("transform", d3.zoomTransform(this))
              }))
      });

      // 將 Zoom 行為應用到 svg 元素上
      svg.call(zoom);

      d3.select('g.counties')
          .selectAll("path")
          .data(topojson.feature(mapData, mapData.objects["COUNTY_MOI_1090820"]).features)
          .enter().append("path")
          .attr("d", path)
          .attr("class", function(d) { return d.properties['COUNTYNAME']; }) //取縣市名
          .on("mouseover", function(d) {
            _this.CountryName = this.className.baseVal;

            // console.log(d3.select(this)['_groups'][0]);
            // d3.select(this).style("fill", d3.select(this).attr('stroke')).attr('opacity', 0.3);
          })                  

      d3.select('path.county-borders')
      .attr("d", path(topojson.mesh(mapData, mapData.objects["COUNTY_MOI_1090820"], function (a, b) { return a !== b; })));
        
    },

    Chart:function(){
      var options = {
        series: [
          {
            data: [10, 20, 15, 30, 35, 30, 45, 59, 30, 35, 25, 29, 15]
          }
        ],
        chart: {
          type: "area",
          height: 200,
          background: "#19191E",
          dropShadow: {
            enabled: true,
            color: "#000"
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          colors: ["#FFFFFF"]
        },
        stroke: {
          curve: "smooth",
          width: 3,
          fill: {
            type: "gradient",
            color: "#0085FF",
            gradient: {
              type: "horizontal",
              colorStops: [
                [
                  {
                    offset: 0,
                    color: "#0085FF",
                    opacity: 1
                  },
                  {
                    offset: 33,
                    color: "#FF2E92",
                    opacity: 1
                  },
                  {
                    offset: 80,
                    color: "#FFAC2F",
                    opacity: 1
                  },
                  {
                    offset: 99,
                    color: "#FFFFFF",
                    opacity: 1
                  }
                ]
              ]
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            type: "vertical",
            colorStops: [
              [
                {
                  offset: 0,
                  color: "#F48116",
                  opacity: 1.0
                },
                {
                  offset: 70,
                  color: "#6510F8",
                  opacity: 0.2
                },
                {
                  offset: 97,
                  color: "#6510F8",
                  opacity: 0.0
                }
              ]
            ]
          }
        },
        xaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            style: {
              colors: "#aaa"
            }
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        grid: {
          borderColor: "#222226"
        },
        legend: {
          horizontalAlign: "left"
        },
        theme: {
          mode: "dark"
        }
      };
      
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
      
    },

    SoftwareChart:function(){
      var _this = this;
      
      _this.SoftwareOptions = {
        series: [{
          name: 'software',
          data: [11, 44, 31, 46, 40, 55, 92, 32, 38, 22, 40, 30]
        }],
        chart: {
          height: 40,
          width:250,
          type: 'area',
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true
          }
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          curve: 'smooth'
        },
        fill: {
          colors: ['#F44336']
        },
        xaxis: {
          type: 'numeric',
          lines: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        yaxis: [{
          y: 0,
          offsetX: 0,
          offsetY: 0,
          labels: {
            show: false,
          },
          padding: {
            left: 0,
            right: 0
          },
        }],
        tooltip: {
          x: {
            show: false,
            format: 'dd/MM/yy HH:mm'
          },
        },
      };

    },

    HardwareChart:function(){
      var _this = this;
      
      _this.HardwareOptions = {
        series: [{
          name: 'hardware',
          data: [21, 18, 13, 42, 55, 18, 32, 34, 51, 92, 33, 41]
        }],
        chart: {
          height: 40,
          width:250,
          type: 'area',
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true
          }
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          curve: 'smooth'
        },
        fill: {
          colors: ['#E91E63']
        },
        xaxis: {
          type: 'numeric',
          lines: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        yaxis: [{
          y: 0,
          offsetX: 0,
          offsetY: 0,
          labels: {
            show: false,
          },
          padding: {
            left: 0,
            right: 0
          },
        }],
        tooltip: {
          x: {
            show: false,
            format: 'dd/MM/yy HH:mm'
          },
        },
      };
    },

    ServeChart:function(){
      var _this = this;
      
      _this.ServeOptions = {
        series: [{
          name: 'hardware',
          data: [21, 18, 13, 42, 55, 18, 32, 34, 51, 92, 33, 41]
        }],
        chart: {
          height: 40,
          width:250,
          type: 'area',
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true
          }
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          curve: 'smooth'
        },
        fill: {
          colors: ['#9C27B0']
        },
        xaxis: {
          type: 'numeric',
          lines: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        yaxis: [{
          y: 0,
          offsetX: 0,
          offsetY: 0,
          labels: {
            show: false,
          },
          padding: {
            left: 0,
            right: 0
          },
        }],
        tooltip: {
          x: {
            show: false,
            format: 'dd/MM/yy HH:mm'
          },
        },
      };
    },

    CircleChart:function(){
      var _this = this;
      _this.OptionsCircle = {
        chart: {
          type: "radialBar",
          height: 250,
          offsetX: 0
        },
        plotOptions: {
          radialBar: {
            inverseOrder: false,
            hollow: {
              margin: 5,
              size: "48%",
              background: "transparent"
            },
            track: {
              show: true,
              background: "#40475D",
              strokeWidth: "10%",
              opacity: 1,
              margin: 3 // margin is in pixels
            }
          }
        },
        series: [71, 63],
        labels: ["Device 1", "Device 2"],
        legend: {
          show: true,
          position: "left",
          offsetX: -30,
          offsetY: -10,
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%";
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        }
      }
    },

    LineChart:function(){
      var _this = this;
      _this.LineOptions = {
        chart: {
          height: 350,
          type: "line",
          stacked: true,
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000
            }
          },
          dropShadow: {
            enabled: true,
            opacity: 0.3,
            blur: 5,
            left: -7,
            top: 22
          },
          events: {
            animationEnd: function (chartCtx) {
              const newData1 = chartCtx.w.config.series[0].data.slice();
              newData1.shift();
              const newData2 = chartCtx.w.config.series[1].data.slice();
              newData2.shift();
              window.setTimeout(function () {
                chartCtx.updateOptions(
                  {
                    series: [
                      {
                        data: newData1
                      },
                      {
                        data: newData2
                      }
                    ],
                    subtitle: {
                      text: parseInt(_this.getRandom() * Math.random()).toString()
                    }
                  },
                  false,
                  false
                );
              }, 300);
            }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight",
          width: 5
        },
        grid: {
          padding: {
            left: 0,
            right: 0
          }
        },
        markers: {
          size: 0,
          hover: {
            size: 0
          }
        },
        series: [
          {
            name: "Running",
            data: _this.generateMinuteWiseTimeSeries(
              new Date("12/12/2016 00:20:00").getTime(),
              12,
              {
                min: 30,
                max: 110
              }
            )
          },
          {
            name: "Waiting",
            data: _this.generateMinuteWiseTimeSeries(
              new Date("12/12/2016 00:20:00").getTime(),
              12,
              {
                min: 30,
                max: 110
              }
            )
          }
        ],
        xaxis: {
          type: "datetime",
          range: 2700000
        },
        title: {
          text: "Processes",
          align: "left",
          style: {
            fontSize: "12px"
          }
        },
        subtitle: {
          text: "20",
          floating: true,
          align: "right",
          offsetY: 0,
          style: {
            fontSize: "22px"
          }
        },
        legend: {
          show: true,
          floating: true,
          horizontalAlign: "left",
          onItemClick: {
            toggleDataSeries: false
          },
          position: "top",
          offsetY: -33,
          offsetX: 60
        }
      };
      
    },

    getRangeRandom: function (yrange) {
      return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    },

    generateMinuteWiseTimeSeries:function(baseval, count, yrange) {
      var _this = this;
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var y =
          (Math.sin(i / _this.trigoStrength) * (i / _this.trigoStrength) +
            i / _this.trigoStrength +
            1) *
          (_this.trigoStrength * 2);
    
        series.push([x, y]);
        baseval += 300000;
        i++;
      }
      return series;
    },

    getRandom:function() {
      var _this = this;
      var i = _this.iteration;
      return (
        (Math.sin(i / _this.trigoStrength) * (i / _this.trigoStrength) +
          i / _this.trigoStrength +
          1) *
        (_this.trigoStrength * 2)
      );
    },

  },
  watch: {

  },
  mounted: function () {
      var _this = this;
      fetch('./wwwroot/js/COUNTY_MOI_1090820.json').then(res => res.json()).then(result => {
        _this.taiwanCountry = result
        this.draw(_this.taiwanCountry)
        // document.getElementById('app').onmouseover = function(e){
        //   console.log(this.className);
        // }

        // $(path).addEventListener('mouseover', function () {
        //   this.className = 'highlight';
        // })
    })
    window.onload = function(){
              // _this.Chart();

              window.Apex = {
                chart: {
                  foreColor: "#fff",
                  toolbar: {
                    show: false
                  }
                },
                colors: ["#FCCF31", "#17ead9", "#f02fc2"],
                stroke: {
                  width: 3
                },
                dataLabels: {
                  enabled: false
                },
                grid: {
                  borderColor: "#40475D"
                },
                xaxis: {
                  axisTicks: {
                    color: "#333"
                  },
                  axisBorder: {
                    color: "#333"
                  }
                },
                fill: {
                  type: "gradient",
                  gradient: {
                    gradientToColors: ["#F55555", "#6078ea", "#6094ea"]
                  }
                },
                tooltip: {
                  theme: "dark",
                  x: {
                    formatter: function (val) {
                      return moment(new Date(val)).format("HH:mm:ss");
                    }
                  }
                },
                yaxis: {
                  decimalsInFloat: 2,
                  opposite: true,
                  labels: {
                    offsetX: -10
                  }
                }
              };


              _this.SoftwareChart();
              _this.HardwareChart();
              _this.ServeChart();

              _this.CircleChart();
              _this.LineChart();

              //上方資訊
              var SoftwareChart = new ApexCharts(document.querySelector("#SoftwareChart"), _this.SoftwareOptions);
              SoftwareChart.render();

              var HardwareChart = new ApexCharts(document.querySelector("#HardwareChart"), _this.HardwareOptions);
              HardwareChart.render();

              var ServeChart = new ApexCharts(document.querySelector("#ServeChart"), _this.ServeOptions);
              ServeChart.render();
              //左邊資訊
              var CircleChart = new ApexCharts(document.querySelector("#circlechart"), _this.OptionsCircle);
              CircleChart.render();
              
              var LineChart = new ApexCharts(document.querySelector("#linechart"), _this.LineOptions);
              LineChart.render();

              //Random數據
              window.setInterval(function () {
                _this.iteration++;

                LineChart.updateSeries([
                  {
                    data: [
                      ...LineChart.w.config.series[0].data,
                      [LineChart.w.globals.maxX + 300000, _this.getRandom()]
                    ]
                  },
                  {
                    data: [
                      ...LineChart.w.config.series[1].data,
                      [LineChart.w.globals.maxX + 300000, _this.getRandom()]
                    ]
                  }
                ]);
                
                CircleChart.updateSeries([
                  _this.getRangeRandom({ min: 10, max: 100 }),
                  _this.getRangeRandom({ min: 10, max: 100 })
                ]);
              }, 3000);




              // var chart5 = new ApexCharts(document.querySelector("#chart5"), _this.options5);
              // chart5.render();
    }

  },
});

