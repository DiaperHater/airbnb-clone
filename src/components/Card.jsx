import image from '../assets/swimmer.png'
import redStartIcon from '../assets/icon-red-star.svg'


export default function Card() {
    return(
        <div className="w-[176px] space-y-2 relative">
            <span className="min-w-[60px] p-1 bg-gray-200 rounded text-[10px] uppercase absolute top-[6px] left-[6px]">SOLD OUT</span>
            <img src={image} alt="" className="w-full h-[235px] rounded-lg" />
            <div className="flex space-x-1">
                <img src={redStartIcon} alt="" className="w-[14px]" />
                <span className="text-xs font-light">5.0</span>
                <span className="text-xs font-light text-[#918E9B]">(6)・USA</span>
            </div>
            <p className="text-xs font-light">
                Life lessons with Katie Zaferes
            </p>
            <p className="text-xs font-light">
                <span className="font-bold">From $136</span> / person
            </p>
        </div>
    )
}