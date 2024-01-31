import twit from '../images/twiter.png'
import fecebook from '../images/facebook.png'
import inst from '../images/instagram.jpg'
import git from '../images/git.png'

export default function Footer(){
    return(
    <footer className="footer__img">
        <img src={twit} width= '50px' />
        <img src={fecebook} width= '50px'/>
        <img src={inst} width= '50px'/>
        <img src={git} width= '50px'/>

    </footer>
    )
}