import * as echarts from 'echarts/core';
import {
  DatasetComponent,
  DatasetComponentOption,
  GridComponent,
  GridComponentOption,
  VisualMapComponent,
  VisualMapComponentOption,

  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import {
  BarChart,
  BarSeriesOption,

  GaugeChart,
  GaugeSeriesOption,

  LineChart,
  LineSeriesOption,

  PieChart,
  PieSeriesOption
} from 'echarts/charts'

import {
  CanvasRenderer
} from 'echarts/renderers'

import {
  UniversalTransition,
  LabelLayout
} from 'echarts/features'

echarts.use(
  [DatasetComponent, GridComponent, VisualMapComponent, BarChart, TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, UniversalTransition, PieChart, CanvasRenderer, LabelLayout, GaugeChart]
);

export type EChartsLineOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
>

export type EChartsPieOption = echarts.ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | VisualMapComponentOption
  | PieSeriesOption
>


export type EChartsBarOption = echarts.ComposeOption<
  | DatasetComponentOption
  | GridComponentOption
  | VisualMapComponentOption
  | BarSeriesOption
>

export type EChartsGaugeOption = echarts.ComposeOption<
  | GaugeSeriesOption
>

export type EChartsOption = EChartsLineOption | EChartsPieOption | EChartsBarOption | EChartsGaugeOption

export default echarts