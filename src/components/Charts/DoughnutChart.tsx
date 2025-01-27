import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions, TooltipItem } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: FC = () => {
  const data = {
    labels: ["Salary", "Bonus", "Tips"],
    datasets: [
      {
        label: "Income Distribution",
        data: [80, 20, 50],
        backgroundColor: [
          "rgba(247, 101, 163, 1)",
          "rgba(161, 85, 185, 1)",
          "rgba(99, 171, 253, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        align: "center",
        labels: {
          usePointStyle: true,
          padding: 20,
          boxWidth: 15,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"doughnut">) => {
            const label = tooltipItem.label || "";
            const raw = tooltipItem.raw || 0;
            return `${label}: $${raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex w-full h-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
