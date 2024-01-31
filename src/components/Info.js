import {HiOutlineMail} from 'react-icons/hi'
export default function Info(){
    return(
        <div >
            <div className='info__image'>
                
            </div>
            <div className='info'>
                <h1 className='info__title'>Yurri Shumelchuk</h1>
                <p className='info__text'>Frontend Developer</p>
                <span >laurasmith.website</span>
                <div className='info__buttom'>
                <button className='info__buttom__email'>
                    <HiOutlineMail style={{width: 20, height: 20, marginRight: 5}}/>Email</button>
                <button className='info__buttom__color'>LincedIn</button>
                </div >
            </div>
        </div>
    )
}