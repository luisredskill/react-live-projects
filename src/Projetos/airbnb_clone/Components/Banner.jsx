import "../CSS/Banner.css"
import Exp1 from "../Img/Exp_1_no_batch.svg"
import Star from "../Img/Star.svg"

export default function Banner() {
    return(
        <div className="banner--container">
            <div className="banner--img--container">
                <img src={Exp1} alt=""  className="banner--img"></img>
                <span className="banner--batch">SOLD OUT</span>
            </div>
            <div className="banner--text--container">
                <div className="banner--rating--container">
                    <img src={Star} alt="" className="banner--rating--star"/>
                    <p>5.0<span className="banner--rating--number">(6) • USA</span></p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="banner--price">From $138</span>/ person</p>
            </div>
        </div>
    )
}