import React from 'react'
import Blog from './Blog';

 function BlogSection() {
  return (
    <div className="container text-center my-5">
        <br />
        <br />
        <h1 className="text-Muted">
            Latest <span className="text-info">Blogs</span>
        </h1>
        <div className="lead">I write blogs, read few...</div>
        <div className="row my-5 pt-5">
            <Blog Title="Blog 1" Body="This is the First Blog, have a look at it" />
            <Blog Title="Blog 2" Body="This is the Second Blog , have a look at it" />
            <Blog Title="Blog 1" Body="This is the First Blog, have a look at it" />
            <Blog Title="Blog 2" Body="This is the Second Blog , have a look at it" />
        
        </div>
    </div>
  )
}

export default BlogSection;
