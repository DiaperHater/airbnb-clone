import heroImage from '../assets/hero-image.jpg'

export default function HeroSection() {
    return(
        <section className="hero py-10">
            <div className="wrapper flex flex-col">
                <img src={heroImage} alt=""  className="w-[400px] max-w-full place-self-center"/>
                <h1 className="text-4xl font-semibold pt-10 pb-4">
                    Online Experiences
                </h1>
                <p className="font-light">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>
    )
}