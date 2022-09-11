import type { EChartsPieOption } from "./Echart";

import { BaseOption } from "./type"

type PieOption = Partial<Pick<BaseOption, 'title'|'datas'|'color'|'labelColor'>>

// itemcolor, labelcolor, 
export function getPieConfig({
  title,
  datas,
  color = '#c23531',
  labelColor = 'rgba(0, 0, 0, 0.9)'
}: PieOption): EChartsPieOption {
  return {
    title: {
      text: title,
      left: 'center',
      top: 20,
      textStyle: {
        color: 'rgba(0,0,0,0.5)'
      }
    },

    tooltip: {
      trigger: 'item'
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0.8, 1]
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: datas,
        roseType: 'radius',
        label: {
          color: labelColor
        },
        labelLine: {
          lineStyle: {
            color: labelColor
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        itemStyle: {
          color,
        }
      }
    ]
  };
}

