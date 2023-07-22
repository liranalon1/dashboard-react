import "./Total.scss";
import { numberWithCommas } from "@/helpers";

export default function Total({items}) {
    const totalImpressions = items.reduce((acc, object) => acc + object.impressions, 0);
    const totalClicks = items.reduce((acc, object) => acc + object.clicks, 0);
    const totalCost = items.reduce((acc, object) => acc + object.cost, 0);
    

    return (
        <div className="total-cards-wrap">
            <ul className="grid">
                <li className="card flex">
                    <span>{numberWithCommas(totalImpressions)}</span>
                    <h4>Total Impressions</h4>
                </li>
                <li className="card flex">
                    <span>{numberWithCommas(totalClicks)}</span>
                    <h4>Total Clicks</h4>
                </li>                
                <li className="card flex">
                    <span>${numberWithCommas(totalCost)}</span>
                    <h4>Total Cost</h4>
                </li>                
            </ul>
        </div>
    )
}