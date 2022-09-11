
import { EChartsBarOption } from "./Echart";


export function getBarConfig(source: any[][], x: string, y: string, isYC = true): EChartsBarOption {
  let options: any = {
    dataset: {
      source
    },
    tooltip: {
    },
    grid: { containLabel: true },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 10,
      max: 100,
      text: ['High Score', 'Low Score'],
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ['#FD665F', '#FFCE34', '#65B581']
      }
    },
    series: [
      {
        type: 'bar',
        encode: {
          // Map the "amount" column to X axis.
          x,
          // Map the "product" column to Y axis
          y
        }
      }
    ]
  }
  if (isYC) {  // 以y轴为分类轴
    options['yAxis'] = { type: 'category' }
    options['xAxis'] = { name: x }
  } else {  // 以x轴为分类轴
    options['xAxis'] = { type: 'category' }
    options['yAxis'] = { name: y }
  }
  return options
}

