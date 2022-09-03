import react from "react";
import ProjectCard from "./ProjectCard";
import Sample from "../Assets/Sample.jpg";

function ProjectSection() {
    const Project = [
        {   id: 1,
            title: "1",
            imageUrl: {Sample},
            excerpt: "This is my project about....",
        },
        {
            id: 2,
            title: "2",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg" ,
            excerpt: "This is my project about....",
        },
        {
            id: 3,
            title: "3",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg" ,
            excerpt: "This is my project about....",
        },
    ]

    return(
        <div>
            <div className="container text-center py-5">
                <h1 className="font-weight-light">
                    My  <span className="text-info">Projects</span> 
                </h1>
                <div className="lead">I build Project, just like this website.</div>
                <div className="row my-5 pt-3">
                { Project.map((project) => (
                        <div key={project.id} className="col-12 col-md-4 my-2">
                            <ProjectCard
                                title={Project.title}
                                excerpt={Project.excerpt}
                                imageUrl={Project.imageUrl}
                                />
                        </div>))
                }
                </div>
            </div>

        </div>
    );
}

export default ProjectSection;