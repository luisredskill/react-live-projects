import "./Home.css"


export default function Home() {
    return(
        <div className="home--container">
            <h1>Site template temporário para fácil acesso aos projetos.</h1>
            <div className="link--list">
                <a href="/">Home</a>
                <a href="#/ReactFacts">React Facts</a>
                <a href="#/BusinessCard">Business Card</a>
                <a href="#/AirbnbClone">Airbnb Clone</a>
            </div>
        </div>
    )
}