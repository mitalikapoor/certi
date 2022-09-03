import React from 'react'
import Photo from "../Assets/Sample.jpg"

export default function Blog(BlogInfo) {
   
    const{Title, Body } = BlogInfo;

  return (
    <div className="col-12 col-md-4 my-2">
        <div className="card shadow h-100">
            <img className="card-img-top" src={Photo} alt="blog photo"/>
            <div className="card-body text-justify"> 
                <h4> 
                    <a href="form.html" className="text-dark" > {Title}</a>
                </h4>
                <p>{Body}</p>
            </div>  
        </div>
    </div>
  )
}
