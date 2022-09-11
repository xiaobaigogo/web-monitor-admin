const express = require('express')
const app = express()

app.all('*', (req, res, next) => {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method == 'OPTIONS')
    res.sendStatus(200); //让options尝试请求快速结束
  else
    next();
})

app.get('/query_pv', (req, res) => {
  const data =
  {
    "url:www.baidu.com": [
      {
        x: Date.now() - 1000 * 60 * 60 * 1,
        y: 20
      }, {
        x: Date.now() - 1000 * 60 * 60 * 2, // 某年某月某日
        y: 30
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 3,
        y: 40
      }, {
        x: Date.now() - 1000 * 60 * 60 * 4, // 某年某月某日
        y: 30
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 5,
        y: 20
      }, {
        x: Date.now() - 1000 * 60 * 60 * 6, // 某年某月某日
        y: 35
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 3,
        y: 60
      }, {
        x: Date.now() - 1000 * 60 * 60 * 5, // 某年某月某日
        y: 100
      }
    ],
    "url:www.qq.com": [
      {
        x: Date.now() - 1000 * 60 * 60 * 1,
        y: 20
      }, {
        x: Date.now() - 1000 * 60 * 60 * 2, // 某年某月某日
        y: 30
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 3,
        y: 40
      }, {
        x: Date.now() - 1000 * 60 * 60 * 4, // 某年某月某日
        y: 30
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 5,
        y: 20
      }, {
        x: Date.now() - 1000 * 60 * 60 * 6, // 某年某月某日
        y: 35
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 3,
        y: 60
      }, {
        x: Date.now() - 1000 * 60 * 60 * 5, // 某年某月某日
        y: 100
      }
    ],
    "url:www.try.com": [
      {
        x: Date.now() - 1000 * 60 * 60 * 1,
        y: 20
      }, {
        x: Date.now() - 1000 * 60 * 60 * 2, // 某年某月某日
        y: 30
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 3,
        y: 40
      }, {
        x: Date.now() - 1000 * 60 * 60 * 4, // 某年某月某日
        y: 30
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 5,
        y: 20
      }, {
        x: Date.now() - 1000 * 60 * 60 * 6, // 某年某月某日
        y: 35
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 3,
        y: 60
      }, {
        x: Date.now() - 1000 * 60 * 60 * 5, // 某年某月某日
        y: 100
      }
    ]
  }

  res.json(data)
})

app.get('/performance', (req, res) => {
  const data = {
    sources: [
      ['score打分', '耗时/毫秒', 'performance类型'],
      [89.3, 0, 'connectTime'],
      [57.1, 0, 'domContentLoaded'],
      [74.4, 0, 'domContentLoadedTime'],
      [50.1, 100, 'domReadyTime'],
      [89.7, 99, 'firstContentfulPaint'],
      [68.1, 99, 'firstPaint'],
      [19.6, 101, 'largestContentfulPaint'],
      [10.6, 0, 'parseDNSTime'],
      [32.7, 1, 'responseTime'],
      [32.7, 86, 'timeToInteractive']
    ],
    x: '耗时/毫秒',
    y: 'performance类型',
    isYC: true
  }

  const head = {
    ttfbTime: 3,
    parseDOMTime: 96,
    loadTime: 179
  }

  res.json({ head, data })
})

app.get('/device', (req, res) => {
  const data = {
    'deviceType': [{
      value: 335, // 数量
      name: 'mobile' // 类型中对应的某种类型
    },
    {
      value: 111, // 数量
      name: 'Pc' // 类型中对应的某种类型
    },
    {
      value: 111, // 数量
      name: 'Pad' // 类型中对应的某种类型
    },
    ],

    'browseType': [
      {
        value: 100,
        name: 'Safari'
      },
      {
        value: 356,
        name: 'Chrome'
      },
      {
        value: 157,
        name: 'IE'
      },
      {
        value: 200,
        name: 'Edge'
      },
      {
        value: 23,
        name: 'Firefox'
      }, {
        value: 0,
        name: 'Firefox Focus'
      },
      {
        value: 100,
        name: 'Chromium'
      }
    ]
  }
  res.json(data)
})

app.get('/error', (req, res) => {
  const data = {
    "possibility": {
      "健康状况": 80,
      "js异常": 30,
      "静态资源加载异常": 40,
      "接口异常": 90,
    },
    "error": {
      "js-error": [
        {
          x: Date.now() - 1000 * 60 * 60 * 1,
          y: 20
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 2, // 某年某月某日
          y: 30
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 3,
          y: 40
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 4, // 某年某月某日
          y: 30
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 5,
          y: 20
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 6, // 某年某月某日
          y: 35
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 3,
          y: 60
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 5, // 某年某月某日
          y: 100
        }
      ],
      "resources-error": [
        {
          x: Date.now() - 1000 * 60 * 60 * 1,
          y: 20
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 2, // 某年某月某日
          y: 30
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 3,
          y: 40
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 4, // 某年某月某日
          y: 30
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 5,
          y: 20
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 6, // 某年某月某日
          y: 35
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 3,
          y: 60
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 5, // 某年某月某日
          y: 100
        }
      ],
      "interface-error": [
        {
          x: Date.now() - 1000 * 60 * 60 * 1,
          y: 20
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 2, // 某年某月某日
          y: 30
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 3,
          y: 40
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 4, // 某年某月某日
          y: 30
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 5,
          y: 20
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 6, // 某年某月某日
          y: 35
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 3,
          y: 60
        },
        {
          x: Date.now() - 1000 * 60 * 60 * 5, // 某年某月某日
          y: 100
        }
      ]
    }
  }

  res.json(data)
})

app.get('/tmperror', (req, res) => {
  const gaugeData = [
    {
      value: 100,
      name: 'Perfect',
      // title: {
      //   offsetCenter: ['0%', '-120%']
      // },
      // detail: {
      //   valueAnimation: true,
      //   offsetCenter: ['0%', '0%']
      // }
    }
  ];

  option = {
    series: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          // itemStyle: {
          //   borderWidth: 1,
          //   // borderColor: '#464646'
          // }
        },
        axisLine: {
          lineStyle: {
            width: 20
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData,
        title: {
          fontSize: 50,
          // offsetCenter: ['0%', '0%']
        },
        detail: {
          // width: 50,
          // height: 14,
          fontSize: 100,
          color: 'inherit',
          borderColor: 'inherit',
          borderRadius: 20,
          offsetCenter: ['0%', '0%'],
          // borderWidth: 1,
          formatter: '{value}%'
        }
      }
    ]
  };

  res.json(option)
})

app.listen('3000', () => {
  console.log('listen')
})