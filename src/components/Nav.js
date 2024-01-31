import logo from "../images/world.png"


export default function Nav() {
    return(
        <div className="nav">
            <img src= {logo} width="35" height="35" />
            <p> my travel journal.</p>
        </div>
    );
}