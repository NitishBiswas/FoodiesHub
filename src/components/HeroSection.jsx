import { useNavigate } from "react-router-dom"
import { images } from "../data/gallery-images";
import CustomImage from "./CustomImage"

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
                <button className="btn" onClick={() => navigate('/recipes')}>explore now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                ))}
            </div>
        </div>
    )
}

export default HeroSection;
