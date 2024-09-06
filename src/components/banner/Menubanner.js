import "./menuebanner.css"

function Menubanner(props){
        return(
                <>
                <section className="sec-banner">
                        <div className="container">
                                <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                                <h3>{props.title} </h3>
                                        </div>
                                </div>
                        </div>
                </section>
                </>
        )
}

export default Menubanner;