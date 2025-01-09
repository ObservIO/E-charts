interface ChartOptions {
    [key: string]: any;
}

export class LineChartManager {
    static getBasicLine(): ChartOptions {
        return {
            title: { text: 'Basic Line Chart' },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: { type: 'value' },
            series: [{
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }]
        };
    }

    static getSmoothLine(): ChartOptions {
        return {
            title: { text: 'Smooth Line Chart' },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: { type: 'value' },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        };
    }

    static getAreaLine(): ChartOptions {
        return {
            title: { text: 'Area Line Chart' },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: { type: 'value' },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        };
    }

    static getStackedLine(): ChartOptions {
        return {
            title: { text: 'Stacked Line Chart' },
            tooltip: { trigger: 'axis' },
            legend: { data: ['Email', 'Union Ads', 'Video Ads', 'Direct'] },
            grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: { type: 'value' },
            series: [
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Union Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Direct',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320]
                }
            ]
        };
    }

    static getGradientLine(): ChartOptions {
        return {
            title: { text: 'Gradient Line Chart' },
            tooltip: { trigger: 'axis' },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: { type: 'value' },
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
                        { offset: 0, color: 'rgb(128, 255, 165)' },
                        { offset: 1, color: 'rgb(1, 191, 236)' }
                    ])
                },
                emphasis: {
                    focus: 'series'
                }
            }]
        };
    }

    static getMultipleAxisLine(): ChartOptions {
        return {
            title: { text: 'Multiple Y-Axes Line Chart' },
            tooltip: { trigger: 'axis' },
            legend: { data: ['Temperature', 'Humidity', 'Pressure'] },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: [
                {
                    type: 'value',
                    name: 'Temperature',
                    position: 'left',
                    axisLabel: { formatter: '{value} °C' }
                },
                {
                    type: 'value',
                    name: 'Humidity',
                    position: 'right',
                    axisLabel: { formatter: '{value} %' }
                },
                {
                    type: 'value',
                    name: 'Pressure',
                    position: 'right',
                    offset: 80,
                    axisLabel: { formatter: '{value} hPa' }
                }
            ],
            series: [
                {
                    name: 'Temperature',
                    type: 'line',
                    data: [20, 22, 25, 21, 23, 20, 18],
                    yAxisIndex: 0
                },
                {
                    name: 'Humidity',
                    type: 'line',
                    data: [60, 55, 50, 65, 58, 62, 68],
                    yAxisIndex: 1
                },
                {
                    name: 'Pressure',
                    type: 'line',
                    data: [1015, 1013, 1012, 1016, 1015, 1014, 1013],
                    yAxisIndex: 2
                }
            ]
        };
    }

    static getStepLine(): ChartOptions {
        return {
            title: { text: 'Step Line Chart' },
            tooltip: { trigger: 'axis' },
            legend: { data: ['Step Start', 'Step Middle', 'Step End'] },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: { type: 'value' },
            series: [
                {
                    name: 'Step Start',
                    type: 'line',
                    step: 'start',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Step Middle',
                    type: 'line',
                    step: 'middle',
                    data: [220, 282, 201, 234, 290, 430, 410]
                },
                {
                    name: 'Step End',
                    type: 'line',
                    step: 'end',
                    data: [450, 432, 401, 454, 590, 530, 510]
                }
            ]
        };
    }

    static getConfidenceBand(): ChartOptions {
        const baseValue = [];
        const uncertainty = [];
        for (let i = 0; i < 100; i++) {
            const base = Math.sin(i / 5) * (i / 5 - 10) + i / 6;
            baseValue.push([i, base]);
            uncertainty.push([i, base - Math.random() * 3, base + Math.random() * 3]);
        }

        return {
            title: { text: 'Confidence Band' },
            tooltip: { trigger: 'axis' },
            xAxis: { type: 'value' },
            yAxis: { type: 'value' },
            series: [
                {
                    name: 'Base Line',
                    type: 'line',
                    data: baseValue,
                    smooth: true
                },
                {
                    name: 'Uncertainty',
                    type: 'line',
                    data: uncertainty,
                    smooth: true,
                    lineStyle: { opacity: 0 },
                    areaStyle: {
                        opacity: 0.3,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgb(55, 162, 255)' },
                            { offset: 1, color: 'rgb(116, 21, 219)' }
                        ])
                    }
                }
            ]
        };
    }

    static getDynamicLine(): ChartOptions {
        const data: number[] = [];
        let now = new Date();
        let value = Math.random() * 1000;

        for (let i = 0; i < 1000; i++) {
            data.push(value);
            value = value + Math.random() * 21 - 10;
        }

        return {
            title: { text: 'Dynamic Line Chart' },
            tooltip: { trigger: 'axis' },
            xAxis: {
                type: 'category',
                data: Array.from({ length: 1000 }, (_, i) => i)
            },
            yAxis: { type: 'value' },
            series: [{
                type: 'line',
                data: data,
                animation: false,
                lineStyle: { width: 1 }
            }]
        };
    }

    static getZoomLine(): ChartOptions {
        const data: [string, number][] = [];
        let now = new Date();
        let value = Math.random() * 1000;

        for (let i = 0; i < 1000; i++) {
            data.push([now.toISOString(), value]);
            now = new Date(+now + 86400000);
            value = value + Math.random() * 21 - 10;
        }

        return {
            title: { text: 'Large Scale Line Chart with Zoom' },
            tooltip: { trigger: 'axis' },
            toolbox: {
                feature: {
                    dataZoom: { yAxisIndex: 'none' },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'time',
                boundaryGap: false
            },
            yAxis: { type: 'value', boundaryGap: [0, '100%'] },
            dataZoom: [
                { type: 'inside', start: 0, end: 20 },
                { start: 0, end: 20 }
            ],
            series: [{
                name: 'Value',
                type: 'line',
                smooth: true,
                symbol: 'none',
                areaStyle: {},
                data: data
            }]
        };
    }

    static getPolarLine(): ChartOptions {
        const data: number[][] = [];
        for (let i = 0; i <= 360; i++) {
            const t = (i / 180) * Math.PI;
            const r = Math.sin(2 * t) * Math.cos(2 * t);
            data.push([r, i]);
        }

        return {
            title: { text: 'Polar Line Chart' },
            tooltip: { trigger: 'axis' },
            polar: {},
            angleAxis: { type: 'value', startAngle: 0 },
            radiusAxis: {},
            series: [{
                coordinateSystem: 'polar',
                name: 'Line',
                type: 'line',
                data: data
            }]
        };
    }

    static getStackedAreaLine(): ChartOptions {
        return {
            title: { text: 'Stacked Area Chart' },
            tooltip: { trigger: 'axis' },
            legend: { data: ['Email', 'Union Ads', 'Video Ads', 'Direct'] },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [{ type: 'value' }],
            series: [
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: { focus: 'series' },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Union Ads',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: { focus: 'series' },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video Ads',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: { focus: 'series' },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Direct',
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    emphasis: { focus: 'series' },
                    data: [320, 332, 301, 334, 390, 330, 320]
                }
            ]
        };
    }

    static getMarkPointLine(): ChartOptions {
        return {
            title: { text: 'Line with Mark Points' },
            tooltip: { trigger: 'axis' },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: { type: 'value' },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: 'Average' },
                        [
                            { coord: [0, 820], symbol: 'none' },
                            { coord: [6, 1320], symbol: 'none' }
                        ]
                    ]
                }
            }]
        };
    }

    static getTemperatureChange(): ChartOptions {
        return {
            title: { text: 'Temperature Change' },
            tooltip: { trigger: 'axis' },
            legend: { data: ['Highest', 'Lowest'] },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: { type: 'value', axisLabel: { formatter: '{value} °C' } },
            series: [
                {
                    name: 'Highest',
                    type: 'line',
                    data: [10, 11, 13, 11, 12, 12, 9, 10, 11, 14, 12, 11],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: { data: [{ type: 'average', name: 'Avg' }] }
                },
                {
                    name: 'Lowest',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0, -2, 4, 5, 3, 1],
                    markPoint: {
                        data: [{ name: 'Lowest', value: -2, xAxis: 1, yAxis: -1.5 }]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Avg' },
                            [
                                { symbol: 'none', x: '90%', yAxis: 'max' },
                                {
                                    symbol: 'circle',
                                    label: { position: 'start', formatter: 'Max' },
                                    type: 'max',
                                    name: 'Highest point'
                                }
                            ]
                        ]
                    }
                }
            ]
        };
    }

    static getAreaPieces(): ChartOptions {
        return {
            title: { text: 'Area Pieces' },
            tooltip: { trigger: 'axis' },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: Array.from({ length: 24 }, (_, i) => i + ':00')
            },
            yAxis: { type: 'value', boundaryGap: [0, '100%'] },
            series: [{
                type: 'line',
                smooth: true,
                data: Array.from({ length: 24 }, () => Math.round(Math.random() * 100)),
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgb(255, 158, 68)' },
                        { offset: 1, color: 'rgb(255, 70, 131)' }
                    ])
                },
                markArea: {
                    itemStyle: { color: 'rgba(255, 173, 177, 0.4)' },
                    data: [[{
                        name: 'Morning Peak',
                        xAxis: '07:00'
                    }, {
                        xAxis: '10:00'
                    }], [{
                        name: 'Evening Peak',
                        xAxis: '17:00'
                    }, {
                        xAxis: '21:00'
                    }]]
                }
            }]
        };
    }

    static getBumpChart(): ChartOptions {
        const categories = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];
        const dataLength = 10;
        const data = categories.map(category => {
            return {
                name: category,
                type: 'line',
                smooth: true,
                emphasis: { focus: 'series' },
                data: Array.from({ length: dataLength }, () => Math.floor(Math.random() * 100))
            };
        });

        return {
            title: { text: 'Bump Chart (Ranking Over Time)' },
            tooltip: { trigger: 'axis' },
            legend: { data: categories },
            xAxis: {
                type: 'category',
                data: Array.from({ length: dataLength }, (_, i) => `Round ${i + 1}`)
            },
            yAxis: { type: 'value', inverse: true },
            series: data
        };
    }

    static getElectricityDistribution(): ChartOptions {
        return {
            title: { text: 'Electricity Distribution' },
            tooltip: { trigger: 'axis' },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: Array.from({ length: 24 }, (_, i) => `${i}:00`)
            },
            yAxis: { type: 'value' },
            series: [{
                name: 'Usage',
                type: 'line',
                smooth: true,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ])
                },
                emphasis: { focus: 'series' },
                data: Array.from({ length: 24 }, () => Math.round(Math.random() * 300))
            }]
        };
    }

    static getRainfallEvaporation(): ChartOptions {
        return {
            title: { text: 'Rainfall vs Evaporation' },
            tooltip: { trigger: 'axis' },
            legend: { data: ['Rainfall', 'Evaporation'] },
            xAxis: {
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: { type: 'value' },
            series: [
                {
                    name: 'Rainfall',
                    type: 'line',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: 'Evaporation',
                    type: 'line',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                }
            ]
        };
    }

    static getBeijingAQI(): ChartOptions {
        return {
            title: { text: 'Beijing AQI' },
            tooltip: { trigger: 'axis' },
            xAxis: {
                type: 'category',
                data: Array.from({ length: 31 }, (_, i) => `${i + 1}`)
            },
            yAxis: { type: 'value' },
            series: [{
                name: 'Beijing AQI',
                type: 'line',
                smooth: true,
                data: Array.from({ length: 31 }, () => Math.round(Math.random() * 300)),
                markLine: {
                    silent: true,
                    data: [{
                        yAxis: 50,
                        lineStyle: { color: '#green' }
                    }, {
                        yAxis: 100,
                        lineStyle: { color: '#yellow' }
                    }, {
                        yAxis: 150,
                        lineStyle: { color: '#orange' }
                    }, {
                        yAxis: 200,
                        lineStyle: { color: '#red' }
                    }]
                }
            }]
        };
    }

    static getLargeArea(): ChartOptions {
        const data = [];
        let now = new Date();
        let value = Math.random() * 1000;
        
        for (let i = 0; i < 1000; i++) {
            now = new Date(+now + 86400000);
            value = value + Math.random() * 21 - 10;
            data.push([+now, Math.round(value)]);
        }

        return {
            title: { text: 'Large Scale Area Chart' },
            tooltip: { trigger: 'axis' },
            xAxis: {
                type: 'time',
                boundaryGap: false
            },
            yAxis: { type: 'value', boundaryGap: [0, '100%'] },
            dataZoom: [
                { type: 'inside', start: 0, end: 10 },
                { start: 0, end: 10 }
            ],
            series: [{
                name: 'Value',
                type: 'line',
                smooth: true,
                symbol: 'none',
                areaStyle: {},
                data: data
            }]
        };
    }

    static getFunctionPlot(): ChartOptions {
        const data = [];
        for (let i = -100; i <= 100; i += 0.1) {
            data.push([i, Math.sin(i) * Math.cos(i)]);
        }

        return {
            title: { text: 'Function Plot' },
            tooltip: { trigger: 'axis' },
            xAxis: { type: 'value', minInterval: 1 },
            yAxis: { type: 'value', minInterval: 0.1 },
            series: [{
                type: 'line',
                showSymbol: false,
                data: data
            }]
        };
    }
}
