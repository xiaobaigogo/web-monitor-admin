import * as echarts from 'echarts/core';
import type { LinearGradient } from "./type";


export function getLinerGradientColor(startColor: string, endColor: string): LinearGradient {
  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: startColor
    },
    {
      offset: 1,
      color: endColor
    }
  ])
} 