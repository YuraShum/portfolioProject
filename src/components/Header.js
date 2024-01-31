import logo from "../images/large.jpg"
export default function Header(){
    return(
        <div className="header">
            <div className="header__logo">
                <img src={logo} style={{borderRadius: '50%'}} alt="logo" />
                <p> Meme Generator</p>
            </div>
            <div className="header__title">
                <p>React Course - Project 3</p>
            </div>
        </div>
    )
}