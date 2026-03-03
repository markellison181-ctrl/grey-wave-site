const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const fs = require('fs');
const path = require('path');

// Configuration
const width = 800;
const height = 500;
const backgroundColor = '#ffffff';
const navy = '#0f1c2e';
const gold = '#ffd634';

// Initialize chart renderer
const chartJSNodeCanvas = new ChartJSNodeCanvas({
    width,
    height,
    backgroundColor,
    plugins: {
        modern: ['chartjs-plugin-datalabels']
    }
});

// Chart 1: Provincial Vacancy Rates (Bar Chart)
async function generateVacancyRatesChart() {
    const configuration = {
        type: 'bar',
        data: {
            labels: ['Alberta', 'Ontario', 'BC*', 'Saskatchewan', 'Atlantic'],
            datasets: [{
                label: 'Vacancy Rate (%)',
                data: [1.2, 2.4, 2.3, 3.1, 2.8],
                backgroundColor: gold,
                borderColor: navy,
                borderWidth: 2,
                borderRadius: 4,
                borderSkipped: false
            }]
        },
        options: {
            responsive: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Canadian Seniors Housing Vacancy Rates by Province, Q4 2025',
                    font: {
                        size: 20,
                        weight: 'bold',
                        family: 'Inter, Arial, sans-serif'
                    },
                    color: navy,
                    padding: 20
                },
                subtitle: {
                    display: true,
                    text: 'Source: CMHC Housing Market Data',
                    font: {
                        size: 12,
                        family: 'Inter, Arial, sans-serif'
                    },
                    color: '#666666',
                    padding: {
                        bottom: 10
                    }
                },
                legend: {
                    display: false
                },
                datalabels: {
                    display: true,
                    color: navy,
                    font: {
                        weight: 'bold',
                        size: 14
                    },
                    formatter: (value) => value + '%'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        color: navy,
                        font: {
                            family: 'Inter, Arial, sans-serif'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Vacancy Rate (%)',
                        color: navy,
                        font: {
                            weight: 'bold',
                            family: 'Inter, Arial, sans-serif'
                        }
                    },
                    grid: {
                        color: 'rgba(15, 28, 46, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: navy,
                        font: {
                            family: 'Inter, Arial, sans-serif'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            layout: {
                padding: 20
            }
        },
        plugins: [{
            id: 'customCanvasBackgroundColor',
            beforeDraw: (chart, args, options) => {
                const {ctx} = chart;
                ctx.save();
                ctx.globalCompositeOperation = 'destination-over';
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, chart.width, chart.height);
                ctx.restore();
            }
        }]
    };

    const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);
    const outputPath = '/Users/markellison/.openclaw/workspace/projects/grey-wave-site/public/charts/vacancy-rates.png';
    fs.writeFileSync(outputPath, imageBuffer);
    console.log('✓ Generated vacancy-rates.png');
}

// Chart 2: 75+ Population Growth (Line Chart)
async function generatePopulationGrowthChart() {
    const configuration = {
        type: 'line',
        data: {
            labels: ['2025', '2027', '2030', '2033', '2035'],
            datasets: [{
                label: '75+ Population (Millions)',
                data: [3.2, 3.6, 4.2, 4.8, 5.1],
                borderColor: navy,
                backgroundColor: gold + '20',
                borderWidth: 4,
                fill: true,
                pointBackgroundColor: gold,
                pointBorderColor: navy,
                pointBorderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 10,
                tension: 0.4
            }]
        },
        options: {
            responsive: false,
            plugins: {
                title: {
                    display: true,
                    text: "Canada's 75+ Population Projection",
                    font: {
                        size: 20,
                        weight: 'bold',
                        family: 'Inter, Arial, sans-serif'
                    },
                    color: navy,
                    padding: 20
                },
                subtitle: {
                    display: true,
                    text: 'Source: Statistics Canada',
                    font: {
                        size: 12,
                        family: 'Inter, Arial, sans-serif'
                    },
                    color: '#666666',
                    padding: {
                        bottom: 10
                    }
                },
                legend: {
                    display: false
                },
                datalabels: {
                    display: true,
                    color: navy,
                    font: {
                        weight: 'bold',
                        size: 14
                    },
                    formatter: (value) => value + 'M',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderColor: navy,
                    borderWidth: 1,
                    borderRadius: 4,
                    padding: 4
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 2.5,
                    max: 5.5,
                    ticks: {
                        callback: function(value) {
                            return value + 'M';
                        },
                        color: navy,
                        font: {
                            family: 'Inter, Arial, sans-serif'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Population (Millions)',
                        color: navy,
                        font: {
                            weight: 'bold',
                            family: 'Inter, Arial, sans-serif'
                        }
                    },
                    grid: {
                        color: 'rgba(15, 28, 46, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: navy,
                        font: {
                            family: 'Inter, Arial, sans-serif'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Year',
                        color: navy,
                        font: {
                            weight: 'bold',
                            family: 'Inter, Arial, sans-serif'
                        }
                    },
                    grid: {
                        color: 'rgba(15, 28, 46, 0.1)'
                    }
                }
            },
            layout: {
                padding: 20
            }
        },
        plugins: [{
            id: 'customCanvasBackgroundColor',
            beforeDraw: (chart, args, options) => {
                const {ctx} = chart;
                ctx.save();
                ctx.globalCompositeOperation = 'destination-over';
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, chart.width, chart.height);
                ctx.restore();
            }
        }]
    };

    const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);
    const outputPath = '/Users/markellison/.openclaw/workspace/projects/grey-wave-site/public/charts/population-growth.png';
    fs.writeFileSync(outputPath, imageBuffer);
    console.log('✓ Generated population-growth.png');
}

// Chart 3: Development Cost Comparison (Horizontal Bar Chart)
async function generateDevelopmentCostsChart() {
    const configuration = {
        type: 'bar',
        data: {
            labels: ['BC', 'Ontario', 'Alberta', 'Atlantic'],
            datasets: [{
                label: 'Cost per Suite ($K)',
                data: [540, 420, 350, 280],
                backgroundColor: gold,
                borderColor: navy,
                borderWidth: 2,
                borderRadius: 4,
                borderSkipped: false
            }]
        },
        options: {
            responsive: false,
            indexAxis: 'y', // This makes it horizontal
            plugins: {
                title: {
                    display: true,
                    text: 'Seniors Housing Development Cost per Suite by Region',
                    font: {
                        size: 20,
                        weight: 'bold',
                        family: 'Inter, Arial, sans-serif'
                    },
                    color: navy,
                    padding: 20
                },
                legend: {
                    display: false
                },
                datalabels: {
                    display: true,
                    color: navy,
                    font: {
                        weight: 'bold',
                        size: 14
                    },
                    formatter: (value) => '$' + value + 'K',
                    anchor: 'end',
                    align: 'right'
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 600,
                    ticks: {
                        callback: function(value) {
                            return '$' + value + 'K';
                        },
                        color: navy,
                        font: {
                            family: 'Inter, Arial, sans-serif'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Development Cost per Suite (Thousands)',
                        color: navy,
                        font: {
                            weight: 'bold',
                            family: 'Inter, Arial, sans-serif'
                        }
                    },
                    grid: {
                        color: 'rgba(15, 28, 46, 0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: navy,
                        font: {
                            family: 'Inter, Arial, sans-serif'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            layout: {
                padding: 20
            }
        },
        plugins: [{
            id: 'customCanvasBackgroundColor',
            beforeDraw: (chart, args, options) => {
                const {ctx} = chart;
                ctx.save();
                ctx.globalCompositeOperation = 'destination-over';
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, chart.width, chart.height);
                ctx.restore();
            }
        }]
    };

    const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);
    const outputPath = '/Users/markellison/.openclaw/workspace/projects/grey-wave-site/public/charts/development-costs.png';
    fs.writeFileSync(outputPath, imageBuffer);
    console.log('✓ Generated development-costs.png');
}

// Generate all charts
async function generateAllCharts() {
    try {
        console.log('🎨 Generating data visualization charts for James Baxter website...\n');
        
        await generateVacancyRatesChart();
        await generatePopulationGrowthChart();
        await generateDevelopmentCostsChart();
        
        console.log('\n✅ All charts generated successfully!');
        console.log('📁 Files saved to: /Users/markellison/.openclaw/workspace/projects/grey-wave-site/public/charts/');
    } catch (error) {
        console.error('❌ Error generating charts:', error);
        process.exit(1);
    }
}

// Run the generation
generateAllCharts();