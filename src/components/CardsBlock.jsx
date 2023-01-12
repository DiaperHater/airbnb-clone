import Card from "./Card"
import cardsData from './cardsData'

export default function CardsBlock() {

    const cardElements = cardsData.map( cardData => {
        return (
            <Card key={cardData.id} data={cardData}/>               
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