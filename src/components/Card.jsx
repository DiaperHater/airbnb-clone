import redStartIcon from '../../public/assets/images/icon-red-star.svg'


export default function Card(props) {

    const {image, rating, count, region, title, priceStartAt, openSpots} = props

    const stateText = (openSpots === 0) ? 'sold out' 
        : (region.toLowerCase() === 'online') ? 'online' 
        : undefined

    return(
        <div className="w-[176px] space-y-2 relative shrink-0">
            <img src={ `/assets/images/${image}` } alt="" className="w-full h-[235px] rounded-lg" />
            { 
                stateText && 
                <span className="min-w-[60px] max-w-[120px] p-1 bg-gray-200 rounded text-[10px] uppercase absolute top-[6px] left-[6px] text-center">{stateText}</span> 
            }
            <div className="flex space-x-1">
                <img src={redStartIcon} alt="" className="w-[14px]" />
                <span className="text-xs font-light">{rating}</span>
                <span className="text-xs font-light text-[#918E9B]">({count})・{region}</span>
            </div>
            <p className="text-xs font-light">
                {title}
            </p>
            { 
                priceStartAt 
                &&
                <p className="text-xs font-light">
                    <span className="font-bold">From ${priceStartAt}</span> / person
                </p>
            }
        </div>
    )
}