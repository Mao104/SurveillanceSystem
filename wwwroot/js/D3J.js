const app = Vue.createApp({
  data() {
      return {
        taiwanCountry: [],
        CountryName: '',
        options5:'',
        options8:'',
        options7:'',
        options6:'',
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

    Chart8:function(){
      var _this = this;
      
      _this.options8 = {
        series: [{
          name: 'software',
          data: [11, 44, 31, 46, 40, 55, 92, 32, 38, 22, 40, 30]
        }],
        chart: {
          height: 60,
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

    Chart7:function(){
      var _this = this;
      
      _this.options7 = {
        series: [{
          name: 'hardware',
          data: [21, 18, 13, 42, 55, 18, 32, 34, 51, 92, 33, 41]
        }],
        chart: {
          height: 60,
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

    Chart6:function(){
      var _this = this;
      
      _this.options6 = {
        series: [{
          name: 'hardware',
          data: [21, 18, 13, 42, 55, 18, 32, 34, 51, 92, 33, 41]
        }],
        chart: {
          height: 60,
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
              _this.Chart8();
              _this.Chart7();
              _this.Chart6();
              var chart8 = new ApexCharts(document.querySelector("#chart8"), _this.options8);
              chart8.render();
              var chart7 = new ApexCharts(document.querySelector("#chart7"), _this.options7);
              chart7.render();
              var chart6 = new ApexCharts(document.querySelector("#chart6"), _this.options6);
              chart6.render();
              // var chart5 = new ApexCharts(document.querySelector("#chart5"), _this.options5);
              // chart5.render();
    }

  },
});

