import { chiefs } from "../data/chiefs"
import ChiefCard from "./ChiefCard"

const ChiefsSection = () => {
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />)}
            </div>
        </div>
    )
}

export default ChiefsSection
