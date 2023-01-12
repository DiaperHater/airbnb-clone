import Card from "./Card"
import cardsData from './cardsData'

export default function CardsBlock() {

    const cardElements = cardsData.map( card => {
        return (
            <Card 
                key={card.id}
                image={card.image}
                rating={card.rating}
                count={card.count}
                region={card.region}
                title={card.title}
                priceStartAt={card.priceStartAt}
                state={card.state}
            />               
        )
    } )

    return (
        <div className="wrapper">            
            <div className="cards-block flex space-x-4 overflow-scroll">
                {cardElements}
            </div>
        </div>
    )
}