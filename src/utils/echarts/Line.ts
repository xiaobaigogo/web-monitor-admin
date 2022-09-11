import type { EChartsLineOption } from "./Echart";

import { BaseOption } from "./type";

type LineOption = Pick<BaseOption, 'title' | 'labels' | 'color' | 'datas'>

export function getLineConfig({
  title,
  labels,
  color,
  datas
}: LineOption): EChartsLineOption {
  return {
    title: {
      text: title,
      left: 'center'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: labels
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'axis'
    },
    series: [
      {
        smooth: true,
        data: datas,
        type: 'line',
        lineStyle: {
          width: 0
        },
        zlevel: 1,
        z: 1,
        showSymbol: false,
        areaStyle: {
          opacity: 0.7,
          color
        }
      }
    ]
  }
}


