import { useState } from "react";

function Contactform() {

        const [email, setemail] = useState("");
        const [show, setshow] = useState(true);

        const changeEmail =(event) =>{
                setemail(event.target.value);
        }

        const formSub =(event) =>{
                event.preventDefault();
                if (email.length == ""){
                        setshow(false);
                        return;
                }
                console.log(email);
                setshow(true);
        }

        return(
                <>
                <form onSubmit={formSub}>
                        <div className="form-control">
                                <input placeholder="Your Name" />
                        </div>
                        <div className="form-control">
                                <input placeholder="Your Email" onChange={changeEmail} />
                                {!show && <p>This field is required</p>}
                        </div>
                        <div className="form-control">
                                <input placeholder="Phone Number" />
                        </div>
                        <div className="form-control">
                                <textarea placeholder="Your Message"></textarea>                                                                                                     
                                </div>
                                <button>submit</button>
                </form>
                </>
        )
}

export default Contactform;