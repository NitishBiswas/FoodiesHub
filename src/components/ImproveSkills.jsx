import { list } from '../data/skill-list';
import { toast } from 'react-toastify';

const ImproveSkills = () => {

    const signup = () => {
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
        <div className="section improve-skills">
            <div className="col img">
                <img src={require("../img/gallery/img_10.jpg")} alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve Your Culinary Skills</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn" onClick={signup}>singup now</button>
            </div>
        </div>
    )
}

export default ImproveSkills
