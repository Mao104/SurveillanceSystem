const app = Vue.createApp({
  data() {
      return {
        taiwanCountry: [],
        CountryName: '',
        options5:'',
        OptionsSoftware:'',
        OptionsHardware:'',
        OptionsServe:'',
        OptionsCircle:'',
        OptionsLine:'',
        OptionsProgress1:'',
        OptionsProgress2:'',
        OptionsProgress3:'',
        OptionsColumn:'',
        OptionsArea:'',
        seriesData:[],
        iteration:11, //設定迭代次數
        CarCountiteration:120, //設定迭代次數
        trigoStrength:3,  //三角函數強度
        
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
      
      _this.OptionsSoftware = {
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
      
      _this.OptionsHardware = {
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
      
      _this.OptionsServe = {
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
        title: {
          text: "設備服務占比", //設定主標題(text)
          align: "right", //設定對齊方式(align)
          style: {
            fontSize: "16px", //設定標題樣式(fontSize)
            fontWeight:  'bold',
          }
        },
        labels: ["軟體設備", "硬體設備"],
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
      _this.OptionsLine = {
        chart: {
          height: 250, // 設定圖表高度
          type: "line",  // 設定圖表類型為線圖
          stacked: true, // 設定堆疊顯示
          animations: { // 設定動畫
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000
            }
          },
          dropShadow: { // 設定陰影效果
            enabled: true,
            opacity: 0.3,
            blur: 5,
            left: -7,
            top: 22
          },
          events: {
            animationEnd: function (chartCtx) { // 當動畫結束時觸發
              const newData1 = chartCtx.w.config.series[0].data.slice(); // 取得第一條線的資料
              newData1.shift(); // 刪除第一筆資料
              const newData2 = chartCtx.w.config.series[1].data.slice(); // 取得第二條線的資料
              newData2.shift(); // 刪除第一筆資料
              window.setTimeout(function () { // 設定延遲更新圖表
                chartCtx.updateOptions(
                  {
                    series: [ // 更新資料
                      {
                        data: newData1
                      },
                      {
                        data: newData2
                      }
                    ],
                    subtitle: { // 更新副標題
                      text: parseInt(_this.getRandom() * Math.random()).toString()
                    }
                  },
                  false,
                  false
                );
              }, 300);
            }
          },
          toolbar: { // 設定工具列
            show: false
          },
          zoom: { // 設定縮放
            enabled: false
          }
        },
        dataLabels: { // 設定數據標籤
          enabled: false
        },
        stroke: { // 設定線條樣式
          curve: "straight",
          width: 5
        },
        grid: {   // 設定網格樣式
          padding: {
            left: 0,
            right: 0
          }
        },
        markers: { // 設定標記樣式
          size: 0,
          hover: {
            size: 0
          }
        },
        series: [ // 設定資料系列
          {
            name: "入口1",
            data: _this.generateMinuteWiseTimeSeries( // 產生隨機資料
              new Date("12/12/2016 00:20:00").getTime(),
              12,
              {
                min: 30,
                max: 110
              }
            )
          },
          {
            name: "入口2",
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
          type: "datetime", // 設定x軸類型(type)為datetime
          range: 2700000 //設定時間範圍(range)為2700000，單位為毫秒(ms)
        },
        title: {
          text: "即時收益", //設定主標題(text)
          align: "left", //設定對齊方式(align)
          style: {
            fontSize: "16px", //設定標題樣式(fontSize)
            fontWeight:  'bold',
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

    ProgressChart1:function(){
      var _this = this;
      _this.OptionsProgress1 = {
        chart: {
          height: 50,
          type: "bar",
          stacked: true,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "20%",
            colors: {
              backgroundBarColors: ["#40475D"]
            }
          }
        },
        stroke: {
          width: 0
        },
        series: [
          {
            name: "Process 1",
            data: [44]
          }
        ],
        title: {
          floating: true,
          offsetX: -10,
          offsetY: 5,
          text: "機車占比"
        },
        subtitle: {
          floating: true,
          align: "right",
          offsetY: 0,
          text: "44%",
          style: {
            fontSize: "20px"
          }
        },
        tooltip: {
          enabled: false
        },
        xaxis: {
          categories: ["Process 1"]
        },
        yaxis: {
          max: 100
        },
        fill: {
          opacity: 1
        }
      };
    },

    ProgressChart2:function(){
      var _this = this;
      _this.OptionsProgress2 = {
        chart: {
          height: 50,
          type: "bar",
          stacked: true,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "20%",
            colors: {
              backgroundBarColors: ["#40475D"]
            }
          }
        },
        colors: ["#17ead9"],
        stroke: {
          width: 0
        },
        series: [
          {
            name: "Process 2",
            data: [80]
          }
        ],
        title: {
          floating: true,
          offsetX: -10,
          offsetY: 5,
          text: "大型車占比"
        },
        subtitle: {
          floating: true,
          align: "right",
          offsetY: 0,
          text: "80%",
          style: {
            fontSize: "20px"
          }
        },
        tooltip: {
          enabled: false
        },
        xaxis: {
          categories: ["Process 2"]
        },
        yaxis: {
          max: 100
        },
        fill: {
          type: "gradient",
          gradient: {
            inverseColors: false,
            gradientToColors: ["#6078ea"]
          }
        }
      };
    },

    ProgressChart3:function(){
      var _this = this;
      _this.OptionsProgress3 = {
        chart: {
          height: 50,
          type: "bar",
          stacked: true,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "20%",
            colors: {
              backgroundBarColors: ["#40475D"]
            }
          }
        },
        colors: ["#f02fc2"],
        stroke: {
          width: 0
        },
        series: [
          {
            name: "Process 3",
            data: [74]
          }
        ],
        fill: {
          type: "gradient",
          gradient: {
            gradientToColors: ["#6094ea"]
          }
        },
        title: {
          floating: true,
          offsetX: -10,
          offsetY: 5,
          text: "小型車占比"
        },
        subtitle: {
          floating: true,
          align: "right",
          offsetY: 0,
          text: "74%",
          style: {
            fontSize: "20px"
          }
        },
        tooltip: {
          enabled: false
        },
        xaxis: {
          categories: ["Process 3"]
        },
        yaxis: {
          max: 100
        }
      };
    },

    ColumnChart:function(){
      var _this = this;
      _this.OptionsColumn = {
        chart: {
          height: 230,
          type: "bar",
          animations: {
            enabled: false
          },
          events: {
            animationEnd: function (chartCtx) {
              const newData = chartCtx.w.config.series[0].data.slice();
              newData.shift();
              window.setTimeout(function () {
                chartCtx.updateOptions(
                  {
                    series: [
                      {
                        data: newData
                      }
                    ],
                    xaxis: {
                      min: chartCtx.minX,
                      max: chartCtx.maxX
                    },
                    subtitle: {
                      text:
                        parseInt(_this.getRangeRandom({ min: 1, max: 20 })).toString() + "%"
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
          width: 0
        },
        series: [
          {
            name: "車輛數",
            data: _this.generateCarCount(
              new Date("12/12/2016 00:20:00").getTime(),
              120,
              {
                min: 120,
                max: 600
              }
            )
          }
        ],
        title: {
          text: "停車場尖峰時刻表",
          align: "left",
          style: {
            fontSize: "16px"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.5,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
          }
        },
        xaxis: {
          type: "datetime",
          range: 2700000
        },
        legend: {
          show: true
        }
      };
    },

    AreaChart:function(){
      var _this = this;
      
      _this.OptionsArea = {
        series: [
          {
            name: "收益 (K) ",
            data: [
              { x: "1月", y: 10 },
              { x: "2月", y: 20 },
              { x: "3月", y: 15 },
              { x: "4月", y: 30 },
              { x: "5月", y: 35 },
              { x: "6月", y: 30 },
              { x: "7月", y: 45 },
              { x: "8月", y: 79 },
              { x: "9月", y: 30 },
              { x: "10月", y: 35 },
              { x: "11月", y: 25 },
              { x: "12月", y: 29 }
            ]
          }
        ],
        chart: {
          type: "area",
          height: 200,
          background: "none",
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
          tooltip: {
            enabled: false,
          },
          max: 100
        },
        title: {
          text: "月收益", //設定主標題(text)
          align: "left", //設定對齊方式(align)
          style: {
            fontSize: "16px", //設定標題樣式(fontSize)
            fontWeight:  'bold',
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
        },
        tooltip: {
          theme: "dark",
          x: {
            formatter: (value) => value + "月"
          }
        },

      };
    },

    CandlestickChart:function(){
      var _this = this;
      _this.OptionsCandlestick = {
        series: [
          {
            data: _this.generateRandomData() // 初始蠟燭資料
          }
        ],
        chart: {
          type: "candlestick",
          height: 250 // 設定圖表的類型和高度
        },
        title: {
          text: "Realtime 蠟燭圖",
          align: 'left'
        },
        xaxis: {
          type: "datetime"// 設定 x 軸為時間類型
        },
        yaxis: {
          tooltip: {
            enabled: true// 啟用 y 軸的工具提示
          }
        },
      }
    },

    generateData:function (baseval, count) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        var z = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
        var a = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        series.push([x, y, z, a]);
        baseval += 2000;
        i++;
      }
      return series;
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

    generateCarCount:function(baseval, count, yrange) {
      var _this = this;
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var CarCount = (Math.sin(i / _this.trigoStrength) * (i / _this.trigoStrength) + i / _this.trigoStrength + 1) * (_this.trigoStrength * 2);
        var y = Math.floor(CarCount);
    
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
       ( (Math.sin(i / _this.trigoStrength) * (i / _this.trigoStrength) +
          i / _this.trigoStrength +
          1) *
        (_this.trigoStrength * 2) )
      );
    },

    getCarCount:function(){
      var _this = this;
      var i = _this.CarCountiteration;
      var CarCount =  (Math.sin(i / _this.trigoStrength) * (i / _this.trigoStrength) + i / _this.trigoStrength + 1) * (_this.trigoStrength * 2)
      return (
       ( Math.floor(CarCount))
      );
    },
    //隨機產生K棒資料
    generateRandomData:function() {
      const data = []; // 建立一個空陣列用於存放蠟燭資料
      const now = new Date().getTime(); // 取得目前的時間戳記

      for (let i = 0; i < 10; i++) {
        const timestamp = now - i * 3000;// 根據索引 i 計算出時間戳記，每次間隔 10 秒
        const open = Math.random() * 100;// 生成一個隨機的開盤價
        const close = Math.random() * 100;// 生成一個隨機的最高價，相對於開盤價增加不超過 10 的範圍
        const high = Math.max(open, close) + Math.random() * 10;// 生成一個隨機的最低價，相對於開盤價減少不超過 10 的範圍
        const low = Math.min(open, close) - Math.random() * 10;// 生成一個隨機的收盤價，相對於開盤價增加不超過 20 的範圍

        data.push({
          x: timestamp,
          y: [
            open,
            high,
            low,
            close
          ],
        });
      }

      return data;// 回傳生成的蠟燭資料陣列
    },
    //更新K棒資料
    updateData:function(chart) {
      var _this = this;
      const series = chart.w.globals.series;// 取得圖表的 series 資料
      const newData = _this.generateRandomData();// 生成新的隨機蠟燭資料
      series[0].data = newData; // 將新的資料更新到 series 中的第一個系列
      chart.updateSeries(series);// 更新圖表的系列資料
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
    });
    window.onload = function(){
      var chartData = [];
      _this.seriesData = [{data: chartData}];
      var lastDate = Date.now();
      var lastClose = 30;

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
      _this.ProgressChart1();
      _this.ProgressChart2();
      _this.ProgressChart3();

      _this.ColumnChart();
      _this.AreaChart();
      _this.CandlestickChart();

      //上方資訊
      var SoftwareChart = new ApexCharts(document.querySelector("#SoftwareChart"), _this.OptionsSoftware);
      SoftwareChart.render();

      var HardwareChart = new ApexCharts(document.querySelector("#HardwareChart"), _this.OptionsHardware);
      HardwareChart.render();

      var ServeChart = new ApexCharts(document.querySelector("#ServeChart"), _this.OptionsServe);
      ServeChart.render();
      //左側資訊
      var CircleChart = new ApexCharts(document.querySelector("#circlechart"), _this.OptionsCircle);
      CircleChart.render();
      
      var LineChart = new ApexCharts(document.querySelector("#linechart"), _this.OptionsLine);
      LineChart.render();

      var ProgressChart1 = new ApexCharts(document.querySelector("#progress1"),_this.OptionsProgress1);
      ProgressChart1.render();

      var ProgressChart2 = new ApexCharts(document.querySelector("#progress2"),_this.OptionsProgress2);
      ProgressChart2.render();

      var ProgressChart3 = new ApexCharts(document.querySelector("#progress3"),_this.OptionsProgress3);
      ProgressChart3.render();
      //右側資訊
      var ColumnChart = new ApexCharts(document.querySelector("#columnchart"),_this.OptionsColumn);
      ColumnChart.render();

      var AreaChart = new ApexCharts(document.querySelector("#areachart"),_this.OptionsArea);
      AreaChart.render();

      var CandlestickChart = new ApexCharts(document.querySelector("#candlestickchart"),_this.OptionsCandlestick);
      CandlestickChart.render();

      //Random數據
      window.setInterval(function () {
        _this.iteration++;
        _this.CarCountiteration++;
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

        var p1Data = _this.getRangeRandom({ min: 10, max: 100 });
        ProgressChart1.updateOptions({
          series: [
            {
              data: [p1Data]
            }
          ],
          subtitle: {
            text: p1Data + "%"
          }
        });
      
        var p2Data = _this.getRangeRandom({ min: 10, max: 100 });
        ProgressChart2.updateOptions({
          series: [
            {
              data: [p2Data]
            }
          ],
          subtitle: {
            text: p2Data + "%"
          }
        });
      
        var p3Data = _this.getRangeRandom({ min: 10, max: 100 });
        ProgressChart3.updateOptions({
          series: [
            {
              data: [p3Data]
            }
          ],
          subtitle: {
            text: p3Data + "%"
          }
        });

        ColumnChart.updateSeries([
          {
            data: [
              ...ColumnChart.w.config.series[0].data,
              [ColumnChart.w.globals.maxX + 300000, _this.getCarCount()]
            ]
          }
        ]);
      }, 3000);

      //candlestickchart Realtime
      setInterval(function() {
        _this.updateData(CandlestickChart);
      }, 3000);
    }

  },
});

