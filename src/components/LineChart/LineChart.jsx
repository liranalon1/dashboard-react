import { Line } from "react-chartjs-2";

export default function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options = {
          {
            responsive: true,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            stacked: false,
            plugins: {
              title: {
                display: true,
              }
            },
            scales: {
              x: {
                ticks: {
                  color: "#fff"
                }
              },
              y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                  color: "#fff"
                }
              },
              y1: {
                type: 'linear',
                display: true,
                position: 'right',
                ticks: {
                  color: "#fff"
                },
                // grid line settings
                grid: {
                  drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
              },
            }
        }}

      />
    </div>
  );
}