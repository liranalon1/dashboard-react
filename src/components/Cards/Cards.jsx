import "./Cards.scss";
import CardItem from "@/components/CardItem/CardItem";

export default function Cards({items}) {
    return (
        items.length ?
        <div className="cards-wrapper">
            <div className="cards grid">
                {
                    items.map((item, index) => {
                        return <CardItem item={item} key={index}/>
                    })            
                }
            </div>
        </div>
        :
        null
    )
}