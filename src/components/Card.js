import '../App.css';
export default function Card(props) {

    /*
        props: {
            buttonText: <str>
            movie: {
                id: <int>
                img: <str>
                title: <str>
            }
            btnClick: fn(event)
        }
    */
    
    return(
        <div className="image-container full">
            <img className="image" src={props.movie.img} alt={props.movie.title} />
            <div className="overlay" onClick={() => props.btnClick(props.movie)}>{props.buttonText}</div>
        </div>
    )
}
