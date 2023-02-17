import "../CSS/Nav.css"
import airbnb from "../Img/airbnb_logo.svg"

export default function Nav() {
    return(
        <nav>
            <img src={airbnb} alt="" className="nav--logo"/>
        </nav>
    )
}