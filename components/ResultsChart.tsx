import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        BarElement,
        LineElement,
        PointElement,
        Tooltip,
        Legend,

        } from 'chart.js'

import {Chart} from 'react-chartjs-2';

ChartJS.register(
     CategoryScale,
        LinearScale,
        BarElement,
        LineElement,
        PointElement,
        Tooltip,
        Legend,
)


export default function ResultsChart({
  results,
}: {
  results: { wpm: number; accuracy: number }[];
}) {
  const labels = results.map((_, idx) => `Round ${idx + 1}`);
  const data = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'WPM',
        data: results.map(r => r.wpm),
        backgroundColor: '#3b82f6',
        borderRadius: 8,
      },
      {
        type: 'line' as const,
        label: 'Accuracy',
        data: results.map(r => r.accuracy),
        borderColor: '#10b981',
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: '#10b981',
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: { position: 'top' as const },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
}