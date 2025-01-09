interface ChartOptions {
    [key: string]: any;
}

export class AdvancedChartManager {
    // Bar Charts
    static getBarBackground(): ChartOptions {
        return {
            title: { text: 'Bar with Background' },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: { type: 'value' },
            series: [{
                type: 'bar',
                data: [120, 200, 150, 80, 70, 110, 130],
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
        };
    }

    static getBarRace(): ChartOptions {
        return {
            title: { text: 'Bar Race Animation' },
            xAxis: { type: 'value' },
            yAxis: {
                type: 'category',
                data: ['Brazil', 'Indonesia', 'USA', 'India', 'China'],
                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300
            },
            series: [{
                realtimeSort: true,
                type: 'bar',
                data: [300, 400, 500, 600, 700],
                label: {
                    show: true,
                    position: 'right'
                }
            }]
        };
    }

    // Pie Charts
    static getCustomizedPie(): ChartOptions {
        return {
            title: { text: 'Customized Pie' },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            series: [{
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
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

    // Scatter Charts
    static getScatterNebula(): ChartOptions {
        const data = new Array(1000).fill(0).map(() => [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 50  // size
        ]);
        return {
            title: { text: 'Scatter Nebula' },
            xAxis: { type: 'value' },
            yAxis: { type: 'value' },
            series: [{
                type: 'scatter',
                symbolSize: function (data: number[]) {
                    return data[2];
                },
                itemStyle: {
                    opacity: 0.7
                },
                data: data
            }]
        };
    }

    // Advanced Charts
    static getSankeyDiagram(): ChartOptions {
        return {
            title: { text: 'Sankey Diagram' },
            series: {
                type: 'sankey',
                layout: 'none',
                emphasis: {
                    focus: 'adjacency'
                },
                data: [
                    { name: 'a' },
                    { name: 'b' },
                    { name: 'c' },
                    { name: 'd' },
                    { name: 'e' }
                ],
                links: [
                    { source: 'a', target: 'b', value: 5 },
                    { source: 'a', target: 'c', value: 3 },
                    { source: 'b', target: 'd', value: 8 },
                    { source: 'c', target: 'e', value: 7 }
                ]
            }
        };
    }

    static getTreemap(): ChartOptions {
        return {
            title: { text: 'Treemap' },
            series: [{
                type: 'treemap',
                data: [{
                    name: 'nodeA',
                    value: 10,
                    children: [{
                        name: 'nodeAa',
                        value: 4
                    }, {
                        name: 'nodeAb',
                        value: 6
                    }]
                }, {
                    name: 'nodeB',
                    value: 20,
                    children: [{
                        name: 'nodeBa',
                        value: 20
                    }]
                }]
            }]
        };
    }

    static getSunburst(): ChartOptions {
        return {
            title: { text: 'Sunburst Chart' },
            series: {
                type: 'sunburst',
                data: [{
                    name: 'Root',
                    children: [{
                        name: 'Category A',
                        value: 4,
                        children: [{
                            name: 'A1',
                            value: 2
                        }, {
                            name: 'A2',
                            value: 2
                        }]
                    }, {
                        name: 'Category B',
                        value: 6,
                        children: [{
                            name: 'B1',
                            value: 3
                        }, {
                            name: 'B2',
                            value: 3
                        }]
                    }]
                }],
                radius: [0, '90%'],
                label: {
                    rotate: 'radial'
                }
            }
        };
    }

    // 3D Charts
    static getGlobe(): ChartOptions {
        return {
            title: { text: '3D Globe' },
            globe: {
                baseTexture: '/path/to/world.topo.bmp',
                heightTexture: '/path/to/world.topo.bmp',
                displacementScale: 0.1,
                environment: '/path/to/starfield.jpg',
                shading: 'realistic',
                realisticMaterial: {
                    roughness: 0.2,
                    metalness: 0
                },
                postEffect: {
                    enable: true,
                    SSAO: {
                        enable: true,
                        radius: 2
                    }
                },
                temporalSuperSampling: {
                    enable: true
                },
                light: {
                    main: {
                        intensity: 2,
                        shadow: true
                    },
                    ambient: {
                        intensity: 0
                    },
                    ambientCubemap: {
                        texture: '/path/to/pisa.hdr',
                        exposure: 1,
                        diffuseIntensity: 0.5
                    }
                }
            },
            series: []
        };
    }

    static getSurface3D(): ChartOptions {
        const data: number[][] = [];
        for (let i = 0; i <= 50; i++) {
            for (let j = 0; j <= 50; j++) {
                const x = (i / 50) * 10 - 5;
                const y = (j / 50) * 10 - 5;
                const z = Math.sin(Math.sqrt(x * x + y * y));
                data.push([x, y, z]);
            }
        }
        return {
            title: { text: '3D Surface' },
            tooltip: {},
            grid3D: {
                viewControl: {
                    projection: 'orthographic'
                }
            },
            xAxis3D: { type: 'value' },
            yAxis3D: { type: 'value' },
            zAxis3D: { type: 'value' },
            series: [{
                type: 'surface',
                wireframe: {
                    show: false
                },
                data: data
            }]
        };
    }

    // Geographic Visualizations
    static getMapChart(): ChartOptions {
        return {
            title: { text: 'World Map' },
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}'
            },
            visualMap: {
                min: 0,
                max: 1000,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered']
                }
            },
            series: [{
                type: 'map',
                map: 'world',
                roam: true,
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    { name: 'China', value: 100 },
                    { name: 'United States', value: 200 },
                    { name: 'Brazil', value: 300 },
                    { name: 'Russia', value: 400 },
                    { name: 'India', value: 500 }
                ]
            }]
        };
    }

    // Candlestick Charts
    static getCandlestick(): ChartOptions {
        return {
            title: { text: 'Candlestick Chart' },
            xAxis: {
                data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
            },
            yAxis: { type: 'value' },
            series: [{
                type: 'candlestick',
                data: [
                    [20, 34, 10, 38],
                    [40, 35, 30, 50],
                    [31, 38, 33, 44],
                    [38, 15, 5, 42]
                ]
            }]
        };
    }

    // Theme River
    static getThemeRiver(): ChartOptions {
        return {
            title: { text: 'Theme River' },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'line', lineStyle: { color: 'rgba(0,0,0,0.2)', width: 1, type: 'solid' } }
            },
            legend: { data: ['DQ', 'TY', 'SS'] },
            singleAxis: {
                top: 50,
                bottom: 50,
                axisTick: {},
                axisLabel: {},
                type: 'time',
                axisPointer: {
                    animation: true,
                    label: { show: true }
                },
                splitLine: { show: true, lineStyle: { type: 'dashed', opacity: 0.2 } }
            },
            series: [{
                type: 'themeRiver',
                emphasis: { itemStyle: { shadowBlur: 20, shadowColor: 'rgba(0, 0, 0, 0.8)' } },
                data: [
                    ['2015/11/08', 10, 'DQ'],
                    ['2015/11/09', 15, 'DQ'],
                    ['2015/11/10', 35, 'DQ'],
                    ['2015/11/08', 35, 'TY'],
                    ['2015/11/09', 36, 'TY'],
                    ['2015/11/10', 37, 'TY'],
                    ['2015/11/08', 21, 'SS'],
                    ['2015/11/09', 25, 'SS'],
                    ['2015/11/10', 27, 'SS']
                ]
            }]
        };
    }
}
