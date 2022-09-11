

import { EChartsGaugeOption } from "./Echart"

export function getGaugeConfig(gaugeData: any, percentage: boolean = true): EChartsGaugeOption {
  // console.log(gaugeData)
  return {
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
          clip: false
        },
        axisLine: {
          lineStyle: {
            width: 5
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
          show: false
        },
        data: [gaugeData],
        center: ['50%', '60%'],
        title: {
          fontSize: 15,
          offsetCenter: ['0%', '-140%']
        },
        detail: {
          fontSize: 20,
          color: 'inherit',
          formatter: percentage ? '{value}%' : '{value}',
          offsetCenter: ['0%', '0%']
        }
      }
    ]
  }
}
