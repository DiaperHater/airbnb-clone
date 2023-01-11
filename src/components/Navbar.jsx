import logo from '../assets/logo.svg'

export default function Navbar() {
    return(
        <header className="navbar py-[22px] shadow-md">
            <div className="wrapper">
                <img src={logo} alt="" className="w-[82px]"/>
            </div>
        </header>
    )
}