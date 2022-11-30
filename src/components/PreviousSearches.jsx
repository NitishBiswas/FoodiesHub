import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons"
import { recipesData } from "../data/recipes";
import { useState } from "react";

const PreviousSearches = ({ onChange }) => {
    const [searchItem, setSearchItem] = useState('');

    const filterRecipes = (search) => {
        setSearchItem(search);
        const filteredRecipes = recipesData.filter(recipe => {
            if (search === '') {
                return recipe;
            } else if (recipe.title.toLowerCase().includes(search.toLowerCase())) {
                return recipe;
            } else {
                return null;
            }
        })
        onChange(filteredRecipes)
    }

    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup']

    return (
        <div className="previous-searches section">
            <h2>Previous Searches</h2>
            <div className="previous-searches-container">
                {searches.map((search, index) => (<div onClick={() => filterRecipes(search)} key={index} style={{ animationDelay: index * .1 + "s" }} className="search-item">
                    {search}
                </div>))}
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search ..." value={searchItem} onChange={e => filterRecipes(e.target.value)} />
                <button className="btn" onClick={() => filterRecipes('')}>
                    {searchItem !== '' ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faSearch} />}
                </button>
            </div>
        </div>
    )
}

export default PreviousSearches
