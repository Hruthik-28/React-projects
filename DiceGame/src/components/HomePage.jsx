import { Link } from "react-router-dom"
import Button from './Button'
import HomePageDiceImg from '../assets/HomePageDiceImg.png'

function HomePage() {
    return (
        <div className="h-[100vh] flex flex-col md:flex-row justify-center items-center border-2">
            <div className="md:w-1/2 sm:h-3/4 h-1/2 mt-10  p-4 flex flex-col justify-between items-center">
                <img src={HomePageDiceImg} alt="HomePageDiceImg" width={400}  className="max-w-full h-auto"/>
            </div>

            <div className="md:w-1/2 p-4 h-70 flex flex-col justify-center">
                <h1 className="text-5xl sm:text-8xl font-bold">DICE GAME</h1>
                <div className="text-center mt-4 ml-20">
                    <Link to={'/gamePage'}>
                        <Button classname='hover:bg-white hover:text-black hover:border hover:border-black'>
                            Play Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default HomePage
