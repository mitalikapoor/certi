import react from "react";
import Sample from "../Assets/Sample.jpg";
import {Link} from "react-router-dom";


function ProjectCard(props) {
    const { id, Title, excerpt, imageUrl } = props;
    return(
        <div>
            <div className="card shadow h-100">
                        <img className="card-img-top" src={Sample} alt="project photo"/>
                        <div className="card-body"> 
                            <h4> Project {Title}
                                <Link to={`/project/${id}`} className="text-dark stretched-link" > </Link>
                            </h4>
                            <p>{excerpt} This is one of my project.</p>
                        </div>
                    </div>
        </div>
    );
}

export default ProjectCard;