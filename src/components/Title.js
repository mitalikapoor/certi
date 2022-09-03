import react from "react";
import Mitali from "../Assets/Mitali.jpeg"

function Title(Kapoor){
   // const Name = "Mitali Kapoor";
   const {Name} = Kapoor;
    return( 
    <div>
        <div className="container  ">
            <div className="row text-center align-items-center my-5 py-5">
                <div className="col-12 col-md-6">
                    <img src={Mitali}
                    className="img-fluid rounded-circle w-75" 
                    alt="mitali Kapoor"/>
                </div>
                <div className="col-12 col-md-6">
                    <div className="font-weight-light" style={{ fontSize: "50px" }}>
                        Hi, I am <span className="text-primary">{Name}</span>.
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Title;