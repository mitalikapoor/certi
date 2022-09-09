import React, { Component } from "react";

class Recommendation extends Component{
    constructor()  { 
        super();
        this.state = {
            name: "",
            email: "",
            Company: "",
            designation: "",
            Recom: "",
        };
    }

    VarChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    } 

    render(){
        
        return(
            <div className="container py-6 my-5 text-center">
                <br />
                <br />
                <h1 className="font-weight-light  ">
                <span className="text-info"> Thank you!</span> for taking your time.
                </h1>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form action="/certi" method="GET">
                            <label htmlFor="name">
                                Name<span className="text-danger">*</span> 
                            </label>
                            <input type="text" name="name" className="form-control" onChange={this.VarChange} />

                            <label htmlFor="email">Email <span className="text-danger">*</span></label>
                            <input type="email" name="email" className="form-control" onChange={this.VarChange} />

                            <label htmlFor="Company">Company Name <span className="text-danger">*</span></label>
                            <input type="text" name="Company" className="form-control" onChange={this.VarChange}  />

                            <label htmlFor="designation">Designation <span className="text-danger">*</span></label>
                            <input type="text" name="designation" className="form-control" onChange={this.VarChange} />

                            <label htmlFor="DOJ">Date of Joining<span className="text-danger">*</span></label>
                            <input type="date" name="DOJ" className="form-control" rows="5" onChange={this.VarChange} ></input>
                            <br />
                            <br />
                            
                            <button type="submit" className="btn btn-danger" >Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default Recommendation;