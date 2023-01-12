import Card from "./Card"
import swimmerImage from "../assets/swimmer.png"
import weddingImage from "../assets/wedding.png"
import bikeImage from "../assets/bike.png"

export default function CardsBlock() {
    return (
        <div className="wrapper">            
            <div className="cards-block flex space-x-4 overflow-scroll">
                <Card 
                    image={swimmerImage}
                    rating="5.0"
                    count={6}
                    region="USA"
                    title="Life lessons with Katie Zaferes"
                    priceStartAt={136}
                    status="sold out"
                />
                <Card 
                    image={weddingImage}
                    rating="5.0"
                    count={30}
                    region="USA"
                    title="Learn wedding photography"
                    priceStartAt={125}
                    status="ONLINE"
                />
                <Card 
                    image={bikeImage}
                    rating="4.8"
                    count={2}
                    region="USA"
                    title="Group Mountain Biking"
                    priceStartAt={50}
                />
            </div>
        </div>
    )
}