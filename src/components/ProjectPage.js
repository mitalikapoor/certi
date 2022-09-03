import React from 'react'
import { useParams } from 'react-router-dom';

function ProjectPage(props) {
    let { id } = useParams();
    return <div className='my-5 py-5' style={{ fontSize: "50px" }}>
             Now showing post {id}
           </div>;
  }

  export default ProjectPage;
