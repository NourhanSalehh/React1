function Card(props){
        return(
                <>
                <div className="card" >
                        <img src={props.img} className="card-img-top" alt="sushi"/>
                        <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.des}</p>
                                <div className="card-order">
                                        <h5 className="card-price">{props.price}</h5>
                                        <a href="/" className="btn btn-primary">buy</a>
                                </div>
                        </div>
                </div>
                </>
        )
}

export default Card;