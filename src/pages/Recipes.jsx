import { useState } from "react";
import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
import { recipesData } from "../data/recipes";

const Recipes = () => {
    const [searchItem, setSearchItem] = useState(recipesData.sort(() => Math.random() - 0.5));

    return (
        <div style={{ minHeight: '50vh' }}>
            <PreviousSearches onChange={setSearchItem} />
            <div className="recipes-container">
                {searchItem.length > 0 ? searchItem.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                )) : <h1 className="no-data">Food Is Not Available!</h1>
                }
            </div>
        </div>
    )
}

export default Recipes
