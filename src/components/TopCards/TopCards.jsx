import "./TopCards.scss";
import { numberWithCommas, getMonthName } from "@/helpers";
import { useState } from "react";


import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "@/components/LineChart/LineChart";

Chart.register(CategoryScale);

export default function TopCards({items}) {
    const [chartData, setChartData] = useState({
        labels: items.map((data) => getMonthName(data.timestamp)), 
        datasets: [
          {
            label: "Clicks",
            data: items.map((data) => data.clicks),
            borderColor: "#dfc65e",
            backgroundColor: "#dfc65e",
            borderWidth: 1,
          },
          {
            label: "Conversions",
            data: items.map((data) => data.conversions),
            borderColor: "#23cef9",
            backgroundColor: "#23cef9",
            borderWidth: 1,
          },
          {
            label: "Impressions",
            data: items.map((data) => data.impressions),
            borderColor: "#fd6185",
            backgroundColor: "#fd6185",
            borderWidth: 1
          }
        ]
      });

    const totalImpressions = items.reduce((acc, object) => acc + object.impressions, 0);
    const totalClicks = items.reduce((acc, object) => acc + object.clicks, 0);
    const totalCost = items.reduce((acc, object) => acc + object.cost, 0);
    

    return (
        <div className="top-cards grid">
            <div className="card">
                <LineChart chartData={chartData} />
            </div>
            <div className="card flex center">
                <div className="total-wrap flex">
                    <span>{numberWithCommas(totalImpressions)}</span>
                    <h4>Total Impressions</h4>
                </div>
            </div>
            <div className="card flex center">
                <div className="total-wrap flex">
                    <span>{numberWithCommas(totalClicks)}</span>
                    <h4>Total Clicks</h4>
                </div>
            </div>
            <div className="card flex center">
                <div className="total-wrap flex">
                    <span>${numberWithCommas(totalCost)}</span>
                    <h4>Total Cost</h4>
                </div>
            </div>
        </div>
    )
}