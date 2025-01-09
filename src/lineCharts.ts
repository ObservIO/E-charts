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
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
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
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
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
                },
                {
                    name: 'Search Engine',
                    type: 'line',
                    stack: 'Total',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
    }

    static getGradientLine(): ChartOptions {
        return {
            title: { text: 'Gradient Line Chart' },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: { type: 'value' },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ])
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgb(255, 158, 68)' },
                        { offset: 1, color: 'rgb(255, 70, 131)' }
                    ])
                }
            }]
        };
    }

    static getMultipleAxisLine(): ChartOptions {
        return {
            title: { text: 'Multiple Y-Axes Line Chart' },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'cross' }
            },
            legend: {
                data: ['Temperature', 'Humidity', 'Pressure']
            },
            xAxis: [{
                type: 'category',
                data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']
            }],
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
                    data: [15, 13, 12, 18, 25, 28, 24, 20]
                },
                {
                    name: 'Humidity',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [60, 65, 70, 55, 45, 40, 50, 55]
                },
                {
                    name: 'Pressure',
                    type: 'line',
                    yAxisIndex: 2,
                    data: [1012, 1011, 1014, 1013, 1012, 1011, 1013, 1014]
                }
            ]
        };
    }

    static getStepLine(): ChartOptions {
        return {
            title: { text: 'Step Line Chart' },
            tooltip: { trigger: 'axis' },
            legend: {
                data: ['Step Start', 'Step Middle', 'Step End']
            },
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
        const baseValue = Math.random() * 1000;
        const data = Array.from({ length: 100 }, (_, i) => [
            i,
            baseValue + Math.random() * 200 - 100,
            baseValue + Math.random() * 100,
            baseValue + Math.random() * 300 - 150
        ]);

        return {
            title: { text: 'Confidence Band' },
            xAxis: { type: 'value' },
            yAxis: { type: 'value' },
            series: [{
                type: 'line',
                data: data.map(item => [item[0], item[2]]),
                name: 'Line',
                smooth: true,
                markArea: {
                    data: data.map(item => [{
                        xAxis: item[0],
                        yAxis: item[1]
                    }, {
                        xAxis: item[0],
                        yAxis: item[3]
                    }])
                }
            }]
        };
    }

    static getDynamicLine(): ChartOptions {
        return {
            title: { text: 'Dynamic Line Chart' },
            xAxis: {
                type: 'time',
                splitLine: { show: false }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: { show: false }
            },
            series: [{
                name: 'Dynamic Data',
                type: 'line',
                showSymbol: false,
                data: Array.from({ length: 100 }, (_, i) => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() - 100 + i);
                    return [time, Math.random() * 100];
                })
            }]
        };
    }

    static getZoomLine(): ChartOptions {
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
                type: 'category',
                boundaryGap: false,
                data: Array.from({ length: 1000 }, (_, i) => `Point ${i}`)
            },
            yAxis: { type: 'value', boundaryGap: [0, '100%'] },
            dataZoom: [
                { type: 'inside', start: 0, end: 10 },
                { start: 0, end: 10 }
            ],
            series: [{
                name: 'Data',
                type: 'line',
                symbol: 'none',
                sampling: 'lttb',
                data: Array.from({ length: 1000 }, () => Math.random() * 1000)
            }]
        };
    }

    static getPolarLine(): ChartOptions {
        return {
            title: { text: 'Polar Line Chart' },
            polar: {},
            tooltip: { trigger: 'axis' },
            angleAxis: { type: 'value', startAngle: 0 },
            radiusAxis: {},
            series: [{
                coordinateSystem: 'polar',
                name: 'Line',
                type: 'line',
                data: Array.from({ length: 360 }, (_, i) => [
                    i,
                    Math.sin(i * Math.PI / 180) * 2 + Math.random() * 0.5
                ])
            }]
        };
    }

    static getStackedAreaLine(): ChartOptions {
        return {
            title: { text: 'Stacked Area Chart' },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } }
            },
            legend: {
                data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            },
            toolbox: { feature: { saveAsImage: {} } },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }],
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
                },
                {
                    name: 'Search Engine',
                    type: 'line',
                    stack: 'Total',
                    label: { show: true, position: 'top' },
                    areaStyle: {},
                    emphasis: { focus: 'series' },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
    }

    static getMarkPointLine(): ChartOptions {
        return {
            title: { text: 'Line with Mark Points' },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: { type: 'value' },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line',
                markPoint: {
                    data: [
                        { type: 'max', name: 'Maximum' },
                        { type: 'min', name: 'Minimum' },
                        { type: 'average', name: 'Average' }
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
                            label: { position: 'start', formatter: 'Max' },
                            type: 'max',
                            name: 'Highest Point'
                        }]
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
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: { position: 'start', formatter: 'Max' },
                                type: 'max',
                                name: 'Highest point'
                            }]
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
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10
            }],
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
