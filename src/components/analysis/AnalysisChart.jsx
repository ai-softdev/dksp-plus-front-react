import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'
import i18n from "../../locales/i18n.js";

const AnalysisChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                datasets: [{
                    label: 'Динамика выручки',
                    data: [12, 19, 3, 5, 2, 3, 10, 5, 4, 4, 9,1],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Расходы на рекламу',
                    data: [7, 11, 5, 8, 3, 7, 11, 5, 8, 3, 6, 3],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2
                }
                    ]
            },
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                stacked: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Ключевые показатели деятельности компании'
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false,
                        },
                    },
                }
            },
        });

        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div className={'container'}>
            <canvas ref={chartRef} className={'py-10'}></canvas>
        </div>
    );
};

export default AnalysisChart;
