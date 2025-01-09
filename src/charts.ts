import { AdvancedChartManager } from './advancedCharts';
import { LineChartManager } from './lineCharts';

interface ChartOptions {
    [key: string]: any;
}

class ChartManager {
    private chart: echarts.ECharts;
    private container: HTMLDivElement;

    constructor() {
        this.container = document.getElementById('chartContainer') as HTMLDivElement;
        this.chart = echarts.init(this.container);
        this.initializeEventListeners();
    }

    private initializeEventListeners(): void {
        const select = document.getElementById('chartType') as HTMLSelectElement;
        select.addEventListener('change', () => this.updateChart(select.value));
        window.addEventListener('resize', () => this.chart.resize());
        this.updateChart(select.value);
    }

    private updateChart(chartType: string): void {
        let options: ChartOptions;

        // First check line charts
        if (chartType.startsWith('line-')) {
            const lineType = chartType.substring(5);
            switch (lineType) {
                case 'basic':
                    options = LineChartManager.getBasicLine();
                    break;
                case 'smooth':
                    options = LineChartManager.getSmoothLine();
                    break;
                case 'area':
                    options = LineChartManager.getAreaLine();
                    break;
                case 'stacked':
                    options = LineChartManager.getStackedLine();
                    break;
                case 'gradient':
                    options = LineChartManager.getGradientLine();
                    break;
                case 'multiple-axis':
                    options = LineChartManager.getMultipleAxisLine();
                    break;
                case 'step':
                    options = LineChartManager.getStepLine();
                    break;
                case 'confidence':
                    options = LineChartManager.getConfidenceBand();
                    break;
                case 'dynamic':
                    options = LineChartManager.getDynamicLine();
                    break;
                case 'zoom':
                    options = LineChartManager.getZoomLine();
                    break;
                case 'polar':
                    options = LineChartManager.getPolarLine();
                    break;
                case 'stacked-area':
                    options = LineChartManager.getStackedAreaLine();
                    break;
                case 'markpoint':
                    options = LineChartManager.getMarkPointLine();
                    break;
                case 'temperature':
                    options = LineChartManager.getTemperatureChange();
                    break;
                case 'area-pieces':
                    options = LineChartManager.getAreaPieces();
                    break;
                case 'bump':
                    options = LineChartManager.getBumpChart();
                    break;
                case 'electricity':
                    options = LineChartManager.getElectricityDistribution();
                    break;
                case 'rainfall':
                    options = LineChartManager.getRainfallEvaporation();
                    break;
                case 'aqi':
                    options = LineChartManager.getBeijingAQI();
                    break;
                case 'large-area':
                    options = LineChartManager.getLargeArea();
                    break;
                case 'function':
                    options = LineChartManager.getFunctionPlot();
                    break;
                default:
                    options = LineChartManager.getBasicLine();
            }
        }
        // Then check advanced charts
        else if (chartType in AdvancedChartManager) {
            options = (AdvancedChartManager as any)[`get${chartType.charAt(0).toUpperCase() + chartType.slice(1)}`]();
        }
        // Finally check basic charts
        else {
            options = this.getBasicChartOptions(chartType);
        }

        this.chart.setOption(options, true);
    }

    private getBasicChartOptions(chartType: string): ChartOptions {
        // Keep only non-line chart implementations here
        switch (chartType) {
            case 'bar':
                return this.getBarChart();
            case 'pie':
                return this.getPieChart();
            case 'bar-background':
                return this.getBarBackground();
            case 'bar-race':
                return this.getBarRace();
            case 'custom-pie':
                return this.getCustomizedPie();
            case 'scatter-nebula':
                return this.getScatterNebula();
            case 'sankey':
                return this.getSankeyDiagram();
            case 'treemap':
                return this.getTreemap();
            case 'sunburst':
                return this.getSunburst();
            case 'globe':
                return this.getGlobe();
            case 'surface-3d':
                return this.getSurface3D();
            case 'map':
                return this.getMapChart();
            case 'candlestick':
                return this.getCandlestick();
            case 'theme-river':
                return this.getThemeRiver();
            case 'basic-bar':
                return this.getBasicBarChart();
            case 'stacked-bar':
                return this.getStackedBarChart();
            case 'horizontal-bar':
                return this.getHorizontalBarChart();
            case 'basic-pie':
                return this.getBasicPieChart();
            case 'doughnut':
                return this.getDoughnutChart();
            case 'rose':
                return this.getRoseChart();
            case 'scatter':
                return this.getScatterChart();
            case 'bubble':
                return this.getBubbleChart();
            case 'radar':
                return this.getRadarChart();
            case 'bump':
                return this.getBumpChart();
            case 'temperature-change':
                return this.getTemperatureChange();
            case 'area-pieces':
                return this.getAreaPieces();
            case 'line-gradient':
                return this.getLineGradient();
            case 'electricity-distribution':
                return this.getElectricityDistribution();
            case 'large-scale-area':
                return this.getLargeScaleArea();
            case 'confidence-band':
                return this.getConfidenceBand();
            case 'rainfall-evaporation':
                return this.getRainfallEvaporation();
            case 'beijing-aqi':
                return this.getBeijingAQI();
            case 'multiple-x-axes':
                return this.getMultipleXAxes();
            case 'time-axis':
                return this.getTimeAxis();
            case 'dynamic-time':
                return this.getDynamicTime();
            case 'function-plot':
                return this.getFunctionPlot();
            case 'bar-3d':
                return this.getBar3D();
            case 'line-race':
                return this.getLineRace();
            case 'line-marklines':
                return this.getLineMarklines();
            case 'line-style':
                return this.getLineStyle();
            case 'line-easing':
                return this.getLineEasing();
            case 'line-category':
                return this.getLineCategory();
            case 'step-line':
                return this.getStepLine();
            case 'log-axis':
                return this.getLogAxis();
            case 'custom-graphic':
                return this.getCustomGraphic();
            case 'click-to-add-points':
                return this.getClickToAddPoints();
            case 'two-value-axes-polar':
                return this.getTwoValueAxesPolar();
            case 'tooltip-data-zoom':
                return this.getTooltipDataZoom();
            case 'draggable-points':
                return this.getDraggablePoints();
            default:
                return LineChartManager.getBasicLine();
        }
    }

    private getBarChart(): ChartOptions {
        return {
            title: {
                text: 'Basic Bar Chart'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        };
    }

    private getPieChart(): ChartOptions {
        return {
            title: {
                text: 'Basic Pie Chart'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }]
        };
    }

    private getBarBackground(): ChartOptions {
        return {
            title: {
                text: 'Bar Background'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
        };
    }

    private getBarRace(): ChartOptions {
        return {
            title: {
                text: 'Bar Race'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        };
    }

    private getCustomizedPie(): ChartOptions {
        return {
            title: {
                text: 'Customized Pie'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'pie',
                radius: ['40%', '70%'],
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }]
        };
    }

    private getScatterNebula(): ChartOptions {
        return {
            title: {
                text: 'Scatter Nebula'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                symbolSize: 20,
                data: [
                    [10.0, 8.04],
                    [8.07, 6.95],
                    [13.0, 7.58],
                    [9.05, 8.81],
                    [11.0, 8.33],
                    [14.0, 7.66],
                    [13.4, 6.81],
                    [10.0, 6.33]
                ],
                type: 'scatter'
            }]
        };
    }

    private getSankeyDiagram(): ChartOptions {
        return {
            title: {
                text: 'Sankey Diagram'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'sankey',
                data: [
                    { name: 'A' },
                    { name: 'B' },
                    { name: 'C' },
                    { name: 'D' },
                    { name: 'E' },
                    { name: 'F' }
                ],
                links: [
                    { source: 'A', target: 'B', value: 10 },
                    { source: 'B', target: 'C', value: 15 },
                    { source: 'C', target: 'A', value: 20 },
                    { source: 'D', target: 'E', value: 25 },
                    { source: 'E', target: 'F', value: 30 },
                    { source: 'F', target: 'D', value: 35 }
                ]
            }]
        };
    }

    private getTreemap(): ChartOptions {
        return {
            title: {
                text: 'Treemap'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'treemap',
                data: [
                    { name: 'A', value: 10 },
                    { name: 'B', value: 15 },
                    { name: 'C', value: 20 },
                    { name: 'D', value: 25 },
                    { name: 'E', value: 30 },
                    { name: 'F', value: 35 }
                ]
            }]
        };
    }

    private getSunburst(): ChartOptions {
        return {
            title: {
                text: 'Sunburst'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'sunburst',
                data: [
                    { name: 'A', value: 10 },
                    { name: 'B', value: 15 },
                    { name: 'C', value: 20 },
                    { name: 'D', value: 25 },
                    { name: 'E', value: 30 },
                    { name: 'F', value: 35 }
                ]
            }]
        };
    }

    private getGlobe(): ChartOptions {
        return {
            title: {
                text: 'Globe'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'map3D',
                map: 'world',
                data: [
                    { name: 'A', value: 10 },
                    { name: 'B', value: 15 },
                    { name: 'C', value: 20 },
                    { name: 'D', value: 25 },
                    { name: 'E', value: 30 },
                    { name: 'F', value: 35 }
                ]
            }]
        };
    }

    private getSurface3D(): ChartOptions {
        return {
            title: {
                text: 'Surface 3D'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'surface',
                data: [
                    [10, 10, 10],
                    [20, 20, 20],
                    [30, 30, 30],
                    [40, 40, 40],
                    [50, 50, 50],
                    [60, 60, 60]
                ]
            }]
        };
    }

    private getMapChart(): ChartOptions {
        return {
            title: {
                text: 'Map Chart'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'map',
                map: 'china',
                data: [
                    { name: 'A', value: 10 },
                    { name: 'B', value: 15 },
                    { name: 'C', value: 20 },
                    { name: 'D', value: 25 },
                    { name: 'E', value: 30 },
                    { name: 'F', value: 35 }
                ]
            }]
        };
    }

    private getCandlestick(): ChartOptions {
        return {
            title: {
                text: 'Candlestick'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [
                    [120, 200, 150, 80],
                    [200, 300, 250, 180],
                    [300, 400, 350, 280],
                    [400, 500, 450, 380],
                    [500, 600, 550, 480],
                    [600, 700, 650, 580],
                    [700, 800, 750, 680]
                ],
                type: 'candlestick'
            }]
        };
    }

    private getThemeRiver(): ChartOptions {
        return {
            title: {
                text: 'Theme River'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [
                    [120, 200, 150, 80],
                    [200, 300, 250, 180],
                    [300, 400, 350, 280],
                    [400, 500, 450, 380],
                    [500, 600, 550, 480],
                    [600, 700, 650, 580],
                    [700, 800, 750, 680]
                ],
                type: 'themeRiver'
            }]
        };
    }

    private getBasicBarChart(): ChartOptions {
        return {
            title: {
                text: 'Basic Bar Chart'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        };
    }

    private getStackedBarChart(): ChartOptions {
        return {
            title: {
                text: 'Stacked Bar Chart'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Direct', 'Email', 'Union Ads']
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Direct',
                    type: 'bar',
                    stack: 'total',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Email',
                    type: 'bar',
                    stack: 'total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Union Ads',
                    type: 'bar',
                    stack: 'total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                }
            ]
        };
    }

    private getHorizontalBarChart(): ChartOptions {
        return {
            title: {
                text: 'Horizontal Bar Chart'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        };
    }

    private getBasicPieChart(): ChartOptions {
        return {
            title: {
                text: 'Basic Pie Chart'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }]
        };
    }

    private getDoughnutChart(): ChartOptions {
        return {
            title: {
                text: 'Doughnut Chart'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'pie',
                radius: ['40%', '70%'],
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }]
        };
    }

    private getRoseChart(): ChartOptions {
        return {
            title: {
                text: 'Rose Chart'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                type: 'pie',
                radius: ['30%', '75%'],
                roseType: 'area',
                data: [
                    { value: 40, name: 'rose 1' },
                    { value: 38, name: 'rose 2' },
                    { value: 32, name: 'rose 3' },
                    { value: 30, name: 'rose 4' },
                    { value: 28, name: 'rose 5' },
                    { value: 26, name: 'rose 6' }
                ]
            }]
        };
    }

    private getScatterChart(): ChartOptions {
        return {
            title: {
                text: 'Scatter Chart'
            },
            xAxis: {},
            yAxis: {},
            series: [{
                symbolSize: 20,
                data: [
                    [10.0, 8.04],
                    [8.07, 6.95],
                    [13.0, 7.58],
                    [9.05, 8.81],
                    [11.0, 8.33],
                    [14.0, 7.66],
                    [13.4, 6.81],
                    [10.0, 6.33]
                ],
                type: 'scatter'
            }]
        };
    }

    private getBubbleChart(): ChartOptions {
        return {
            title: {
                text: 'Bubble Chart'
            },
            xAxis: {},
            yAxis: {},
            series: [{
                type: 'scatter',
                data: [
                    [[28604, 77, 17096869], 'Australia'],
                    [[31163, 77.4, 27662440], 'Canada'],
                    [[1516, 68, 1154605773], 'China'],
                    [[13670, 74.7, 10582082], 'Cuba'],
                    [[28599, 75, 4986705], 'Finland']
                ],
                symbolSize: function (data: number[]) {
                    return Math.sqrt(data[2]) / 5e2;
                }
            }]
        };
    }

    private getRadarChart(): ChartOptions {
        return {
            title: {
                text: 'Radar Chart'
            },
            radar: {
                indicator: [
                    { name: 'Sales', max: 6500 },
                    { name: 'Administration', max: 16000 },
                    { name: 'IT', max: 30000 },
                    { name: 'Customer Support', max: 38000 },
                    { name: 'Development', max: 52000 },
                    { name: 'Marketing', max: 25000 }
                ]
            },
            series: [{
                type: 'radar',
                data: [
                    {
                        value: [4200, 3000, 20000, 35000, 50000, 18000],
                        name: 'Budget'
                    },
                    {
                        value: [5000, 14000, 28000, 26000, 42000, 21000],
                        name: 'Actual'
                    }
                ]
            }]
        };
    }

    private getBumpChart(): ChartOptions {
        return {
            title: {
                text: 'Bump Chart (Ranking)'
            },
            xAxis: {
                type: 'category',
                data: ['2015', '2016', '2017', '2018', '2019']
            },
            yAxis: {
                type: 'category',
                data: ['1st', '2nd', '3rd', '4th', '5th'],
                inverse: true
            },
            series: [{
                type: 'line',
                smooth: true,
                data: [1, 3, 2, 5, 1],
                lineStyle: { width: 4 },
                symbolSize: 12
            }, {
                type: 'line',
                smooth: true,
                data: [2, 1, 4, 3, 2],
                lineStyle: { width: 4 },
                symbolSize: 12
            }]
        };
    }

    private getTemperatureChange(): ChartOptions {
        return {
            title: {
                text: 'Temperature Change'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            series: [{
                data: [10, 11, 13, 11, 12, 12, 9],
                type: 'line',
                smooth: true,
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                }
            }]
        };
    }

    private getAreaPieces(): ChartOptions {
        return {
            title: {
                text: 'Area Pieces'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                type: 'line',
                smooth: 0.6,
                symbol: 'none',
                lineStyle: {
                    color: '#5470C6',
                    width: 5
                },
                markLine: {
                    symbol: ['none', 'none'],
                    label: { show: false },
                    data: [{ yAxis: 100 }, { yAxis: 150 }, { yAxis: 200 }]
                },
                areaStyle: {},
                data: [150, 230, 224, 218, 135, 147, 260]
            }]
        };
    }

    private getLineGradient(): ChartOptions {
        return {
            title: {
                text: 'Line Gradient'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(128, 255, 165)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(1, 191, 236)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                }
            }]
        };
    }

    private getElectricityDistribution(): ChartOptions {
        return {
            title: {
                text: 'Distribution of Electricity'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['Hydro', 'Wind', 'Solar', 'Coal', 'Gas']
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Hydro',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Wind',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Solar',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [150, 232, 201, 154, 190, 330, 410]
                }
            ]
        };
    }

    private getLargeScaleArea(): ChartOptions {
        const data: number[] = [];
        for (let i = 0; i < 1000; i++) {
            data.push(Math.random() * 1000);
        }
        return {
            title: {
                text: 'Large Scale Area Chart'
            },
            tooltip: {
                trigger: 'axis',
                position: function (pt: number[]) {
                    return [pt[0], '10%'];
                }
            },
            xAxis: {
                type: 'category',
                data: Array.from({length: 1000}, (_, i) => `Point ${i}`)
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10
            }],
            series: [{
                name: 'Data',
                type: 'line',
                smooth: true,
                symbol: 'none',
                areaStyle: {},
                data: data
            }]
        };
    }

    private getConfidenceBand(): ChartOptions {
        const base = new Array(1000).fill(0).map((_, i) => i);
        const data = base.map(b => Math.sin(b / 100) * 1000 + b);
        const upperBound = data.map(d => d + Math.random() * 200);
        const lowerBound = data.map(d => d - Math.random() * 200);
        
        return {
            title: {
                text: 'Confidence Band'
            },
            xAxis: {
                type: 'category',
                data: base
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                type: 'line',
                data: data,
                name: 'Data'
            }, {
                name: 'Confidence Band',
                type: 'line',
                data: upperBound,
                lineStyle: {
                    opacity: 0
                },
                stack: 'confidence-band',
                symbol: 'none'
            }, {
                name: 'Confidence Band',
                type: 'line',
                data: lowerBound,
                lineStyle: {
                    opacity: 0
                },
                areaStyle: {
                    color: '#ccc',
                    opacity: 0.3
                },
                stack: 'confidence-band',
                symbol: 'none'
            }]
        };
    }

    private getRainfallEvaporation(): ChartOptions {
        return {
            title: {
                text: 'Rainfall vs Evaporation'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Rainfall', 'Evaporation']
            },
            xAxis: {
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: 'Rainfall',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            }, {
                name: 'Evaporation',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            }]
        };
    }

    private getBeijingAQI(): ChartOptions {
        return {
            title: {
                text: 'Beijing AQI'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                type: 'value',
                name: 'AQI'
            },
            visualMap: {
                top: 50,
                right: 10,
                pieces: [{
                    gt: 0,
                    lte: 50,
                    color: '#93CE07'
                }, {
                    gt: 50,
                    lte: 100,
                    color: '#FBDB0F'
                }, {
                    gt: 100,
                    lte: 150,
                    color: '#FC7D02'
                }, {
                    gt: 150,
                    lte: 200,
                    color: 'red'
                }, {
                    gt: 200,
                    lte: 300,
                    color: '#AA069F'
                }, {
                    gt: 300,
                    color: '#AC3B2A'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: {
                name: 'Beijing AQI',
                type: 'line',
                data: [55, 75, 125, 85, 95, 145, 165, 135, 165, 185, 110, 85],
                markLine: {
                    silent: true,
                    lineStyle: {
                        color: '#333'
                    },
                    data: [{
                        yAxis: 50
                    }, {
                        yAxis: 100
                    }, {
                        yAxis: 150
                    }, {
                        yAxis: 200
                    }, {
                        yAxis: 300
                    }]
                }
            }
        };
    }

    private getMultipleXAxes(): ChartOptions {
        return {
            title: {
                text: 'Multiple X Axes'
            },
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['2015', '2016']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    position: 'bottom'
                }
            ],
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '2015',
                    type: 'line',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name: '2016',
                    type: 'line',
                    data: [3.0, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                }
            ]
        };
    }

    private getTimeAxis(): ChartOptions {
        let baseTime = +new Date(2024, 0, 1);
        const oneDay = 24 * 3600 * 1000;
        const data = [[baseTime, Math.random() * 300]];
        
        for (let i = 1; i < 100; i++) {
            baseTime += oneDay;
            const now = new Date(baseTime);
            data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
        }

        return {
            title: {
                text: 'Area Chart with Time Axis'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params: any) {
                    const date = new Date(params[0].value[0]);
                    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' : ' + params[0].value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: 'Value',
                type: 'line',
                showSymbol: false,
                areaStyle: {},
                data: data
            }]
        };
    }

    private getDynamicTime(): ChartOptions {
        return {
            title: {
                text: 'Dynamic Data + Time Axis'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params: any) {
                    params = params[0];
                    const date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: 'Real-time Data',
                type: 'line',
                showSymbol: false,
                data: (function () {
                    let now = new Date();
                    let res = [];
                    let value = Math.random() * 1000;
                    for (let i = 0; i < 1000; i++) {
                        res.unshift({
                            name: now.toString(),
                            value: [
                                now.toLocaleString(),
                                Math.round(value)
                            ]
                        });
                        now = new Date(+now - 1000);
                        value = value + Math.random() * 21 - 10;
                    }
                    return res;
                })()
            }]
        };
    }

    private getFunctionPlot(): ChartOptions {
        const data: number[][] = [];
        for (let i = -90; i <= 90; i += 0.1) {
            const theta = i * Math.PI / 180;
            const r = Math.sin(2 * theta) * Math.cos(2 * theta);
            data.push([r * Math.cos(theta), r * Math.sin(theta)]);
        }

        return {
            title: {
                text: 'Function Plot'
            },
            tooltip: {
                formatter: function (params: any) {
                    return '(' + params.value[0].toFixed(2) + ', ' + params.value[1].toFixed(2) + ')';
                }
            },
            xAxis: {
                type: 'value',
                min: -1,
                max: 1
            },
            yAxis: {
                type: 'value',
                min: -1,
                max: 1
            },
            series: [{
                type: 'line',
                data: data,
                showSymbol: false
            }]
        };
    }

    private getBar3D(): ChartOptions {
        return {
            title: {
                text: '3D Bar Chart'
            },
            tooltip: {},
            visualMap: {
                max: 100,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
            xAxis3D: {
                type: 'category',
                data: ['A', 'B', 'C', 'D', 'E']
            },
            yAxis3D: {
                type: 'category',
                data: ['1', '2', '3', '4', '5']
            },
            zAxis3D: {
                type: 'value'
            },
            grid3D: {
                boxWidth: 100,
                boxHeight: 100,
                boxDepth: 100,
                viewControl: {
                    projection: 'orthographic'
                }
            },
            series: [{
                type: 'bar3D',
                data: [
                    [0, 0, 20], [1, 0, 40], [2, 0, 60], [3, 0, 80], [4, 0, 100],
                    [0, 1, 40], [1, 1, 60], [2, 1, 80], [3, 1, 100], [4, 1, 20],
                    [0, 2, 60], [1, 2, 80], [2, 2, 100], [3, 2, 20], [4, 2, 40],
                    [0, 3, 80], [1, 3, 100], [2, 3, 20], [3, 3, 40], [4, 3, 60],
                    [0, 4, 100], [1, 4, 20], [2, 4, 40], [3, 4, 60], [4, 4, 80]
                ].map(item => ({
                    value: [item[0], item[1], item[2]]
                })),
                shading: 'lambert',
                label: {
                    show: false
                }
            }]
        };
    }

    private getLineRace(): ChartOptions {
        return {
            title: {
                text: 'Line Race'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                right: 10
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: Array.from({length: 30}, (_, i) => `Day ${i + 1}`)
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Team A',
                    type: 'line',
                    data: Array.from({length: 30}, () => Math.floor(Math.random() * 100 + 50))
                },
                {
                    name: 'Team B',
                    type: 'line',
                    data: Array.from({length: 30}, () => Math.floor(Math.random() * 100 + 50))
                },
                {
                    name: 'Team C',
                    type: 'line',
                    data: Array.from({length: 30}, () => Math.floor(Math.random() * 100 + 50))
                },
                {
                    name: 'Team D',
                    type: 'line',
                    data: Array.from({length: 30}, () => Math.floor(Math.random() * 100 + 50))
                },
                {
                    name: 'Team E',
                    type: 'line',
                    data: Array.from({length: 30}, () => Math.floor(Math.random() * 100 + 50))
                }
            ]
        };
    }

    private getLineMarklines(): ChartOptions {
        return {
            title: {
                text: 'Line with Marklines'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line',
                markPoint: {
                    data: [
                        { type: 'max', name: 'Maximum' },
                        { type: 'min', name: 'Minimum' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: 'Average' },
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                position: 'start',
                                formatter: 'Max'
                            },
                            type: 'max',
                            name: 'Highest point'
                        }]
                    ]
                }
            }]
        };
    }

    private getLineStyle(): ChartOptions {
        return {
            title: {
                text: 'Line Style and Item Style'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line',
                smooth: true,
                symbolSize: 10,
                lineStyle: {
                    color: '#5470C6',
                    width: 4,
                    type: 'dashed'
                },
                itemStyle: {
                    borderWidth: 3,
                    borderColor: '#EE6666',
                    color: 'yellow'
                }
            }]
        };
    }

    private getLineEasing(): ChartOptions {
        return {
            title: {
                text: 'Line Easing Visualizing'
            },
            xAxis: {
                type: 'category',
                data: Array.from({length: 100}, (_, i) => i)
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: Array.from({length: 100}, (_, i) => Math.sin(i * Math.PI / 50) * 100),
                type: 'line',
                smooth: true,
                animation: true,
                animationDuration: 3000,
                animationEasing: 'cubicInOut'
            }]
        };
    }

    private getLineCategory(): ChartOptions {
        return {
            title: {
                text: 'Line Y Category'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['Very Poor', 'Poor', 'Fair', 'Good', 'Excellent']
            },
            series: [{
                data: [4, 3, 2, 1, 0],
                type: 'line',
                smooth: true,
                symbolSize: 10,
                label: {
                    show: true,
                    position: 'right'
                }
            }]
        };
    }

    private getStepLine(): ChartOptions {
        return {
            title: {
                text: 'Step Line Chart'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: 'Step Start',
                type: 'line',
                step: 'start',
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: 'Step Middle',
                type: 'line',
                step: 'middle',
                data: [220, 282, 201, 234, 290, 430, 410]
            }, {
                name: 'Step End',
                type: 'line',
                step: 'end',
                data: [450, 432, 401, 454, 590, 530, 510]
            }]
        };
    }

    private getLogAxis(): ChartOptions {
        return {
            title: {
                text: 'Log Axis'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function(params: any) {
                    return params[0].value[0] + ': ' + params[0].value[1].toFixed(2);
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            yAxis: {
                type: 'log',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [{
                data: Array.from({length: 100}, (_, i) => [i, Math.pow(10, Math.random() * 3)]),
                type: 'line',
                smooth: true
            }]
        };
    }

    private getCustomGraphic(): ChartOptions {
        return {
            title: {
                text: 'Custom Graphic Component'
            },
            graphic: [{
                type: 'group',
                left: 'center',
                top: 'center',
                children: [{
                    type: 'rect',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    shape: {
                        width: 300,
                        height: 100
                    },
                    style: {
                        fill: '#fff',
                        stroke: '#999',
                        lineWidth: 2,
                        shadowBlur: 8,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3,
                        shadowColor: 'rgba(0,0,0,0.3)'
                    }
                }, {
                    type: 'text',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    style: {
                        fill: '#333',
                        text: 'Custom Graphic',
                        font: '20px Microsoft YaHei'
                    }
                }]
            }],
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        };
    }

    private getClickToAddPoints(): ChartOptions {
        return {
            title: {
                text: 'Click to Add Points'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'value',
                min: 0,
                max: 10
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 10
            },
            series: [{
                type: 'line',
                smooth: true,
                data: [[1, 1], [3, 4], [6, 3], [8, 7]],
                symbolSize: 10
            }]
        };
    }

    private getTwoValueAxesPolar(): ChartOptions {
        return {
            title: {
                text: 'Two Value-Axes in Polar'
            },
            polar: {
                center: ['50%', '54%']
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            angleAxis: {
                type: 'value',
                startAngle: 0
            },
            radiusAxis: {
                min: 0
            },
            series: [{
                coordinateSystem: 'polar',
                name: 'line',
                type: 'line',
                data: Array.from({length: 360}, (_, i) => [i, 2 * Math.sin(i * Math.PI / 180) + 2])
            }]
        };
    }

    private getTooltipDataZoom(): ChartOptions {
        return {
            title: {
                text: 'Tooltip and DataZoom on Mobile'
            },
            tooltip: {
                trigger: 'axis',
                position: function (pt: number[]) {
                    return [pt[0], '10%'];
                }
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'time',
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 20
            }, {
                start: 0,
                end: 20
            }],
            series: [{
                name: 'Random Data',
                type: 'line',
                smooth: true,
                symbol: 'none',
                areaStyle: {},
                data: Array.from({length: 1000}, (_, i) => {
                    const date = new Date();
                    date.setDate(date.getDate() + i);
                    return [date, Math.random() * 300];
                })
            }]
        };
    }

    private getDraggablePoints(): ChartOptions {
        return {
            title: {
                text: 'Draggable Points'
            },
            tooltip: {
                triggerOn: 'none',
                formatter: function (params: any) {
                    return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
                }
            },
            grid: {
                top: '8%',
                bottom: '12%'
            },
            xAxis: {
                min: 0,
                max: 20,
                type: 'value',
                axisLine: { onZero: false }
            },
            yAxis: {
                min: 0,
                max: 20,
                type: 'value',
                axisLine: { onZero: false }
            },
            series: [{
                id: 'a',
                type: 'line',
                smooth: true,
                symbolSize: 20,
                data: [[4, 8], [8, 12], [12, 4], [16, 16]],
                markLine: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                }
            }]
        };
    }
}

// Initialize the chart manager when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChartManager();
});
