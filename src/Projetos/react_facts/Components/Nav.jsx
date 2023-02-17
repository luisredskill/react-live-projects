import logo from "../Img/logo192.png"

export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav--div">
                <img src={logo} width="40px" alt="" className="nav--div--reactLogo"/>
                <span className="nav--div--reactFacts">ReactFacts</span>
            </div>
            <span className="nav--reactCourse">React Course - Project 1</span>
        </nav>
    )
}