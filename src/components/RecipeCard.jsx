import CustomImage from "./CustomImage"
import { toast } from 'react-toastify';

const RecipeCard = ({ recipe }) => {

    const recipeDetails = () => {
        toast.info('The project is in progress...', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt="" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a className="view-btn" href="#!" onClick={recipeDetails}>VIEW RECIPE</a>
            </div>
        </div>
    )
}

export default RecipeCard
