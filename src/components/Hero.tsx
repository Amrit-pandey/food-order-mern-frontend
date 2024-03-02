import hero from '../assets/background.png'

const Hero = () => {
    return(
        <div>
            <img src={hero} alt="hero.png" className='w-full max-h-[750px] object-cover'/>
        </div>
    )
}

export default Hero