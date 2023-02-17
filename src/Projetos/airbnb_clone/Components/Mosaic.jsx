import img_1 from "../Img/1.svg"
import img_2 from "../Img/2.svg"
import img_3 from "../Img/3.svg"
import img_4 from "../Img/4.svg"
import img_5 from "../Img/5.svg"
import img_6 from "../Img/6.svg"
import img_7 from "../Img/7.svg"
import img_8 from "../Img/8.svg"
import img_9 from "../Img/9.svg"
import "../CSS/Mosaic.css"


export default function Mosaic() {
    return(
        <div className="mosaic">
            <div className="mosaic--container">
                <img src={img_1} alt="" className="mosaic--imgs mosaic--img--01"/>
                <img src={img_2} alt="" className="mosaic--imgs mosaic--img--02"/>
                <img src={img_3} alt="" className="mosaic--imgs mosaic--img--03"/>
                <img src={img_4} alt="" className="mosaic--imgs mosaic--img--04"/>
                <img src={img_5} alt="" className="mosaic--imgs mosaic--img--05"/>
                <img src={img_6} alt="" className="mosaic--imgs mosaic--img--06"/>
                <img src={img_7} alt="" className="mosaic--imgs mosaic--img--07"/>
                <img src={img_8} alt="" className="mosaic--imgs mosaic--img--08"/>
                <img src={img_9} alt="" className="mosaic--imgs mosaic--img--09"/>
            
            </div>
        </div>
    )
}