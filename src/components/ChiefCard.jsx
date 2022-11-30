import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { toast } from 'react-toastify';

const ChiefCard = ({ chief }) => {

    const clickedSocialLink = () => {
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
        <div className="chief-card">
            <img src={chief.img} alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
                <p className="cheif-icons">
                    <FontAwesomeIcon icon={faFacebook} onClick={clickedSocialLink} style={{ cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faTwitter} onClick={clickedSocialLink} style={{ cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faInstagram} onClick={clickedSocialLink} style={{ cursor: 'pointer' }} />
                </p>
            </div>
        </div>
    )
}

export default ChiefCard
