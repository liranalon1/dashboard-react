import "./CardItem.scss";
import { numberWithCommas } from "@/helpers";

export default function CardItem({item}) {

    function handleItemList(){
        var template = [];
        for (const [key, value] of Object.entries(item)) {
            template.push(
                <li>
                    <p className="flex">
                        <label>{key === "timestamp" ? "Date" : key}</label>
                        <span>{key === "timestamp" ? value : numberWithCommas(value)}</span>
                    </p>
                </li>
            );
        }
        
        return template;
    }

    return (
        <>
        <div className={`card`}>
            <div className="card-content">
                <ul className="flex">
                    {handleItemList()}
                </ul>
            </div>
        </div>        
        </>
    )
}