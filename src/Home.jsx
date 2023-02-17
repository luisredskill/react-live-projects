import "./Home.css"

export default function Home() {
    return(
        <div className="home--container">
            <h1>Site template temporário para fácil acesso aos projetos.</h1>
            <div className="link--list">
                <a href="/react-live-projects/ReactFacts">React Facts</a>
                <a href="/react-live-projects/BusinessCard">Business Card</a>
                <a href="/react-live-projects/AirbnbClone">Airbnb Clone</a>
            </div>
        </div>
    )
}