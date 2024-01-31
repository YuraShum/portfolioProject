import { useEffect, useState } from "react";
import {FcGallery} from 'react-icons/fc'


export default function Mame(){
    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = useState([])
    let resMemes;

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getmemesImg(){
        resMemes = allMemeImages
        [Math.floor(Math.random()* allMemeImages.length)]
        .url;
        setMemeImage(prevMeme => {
            return {
                ...prevMeme,
                randomImage: resMemes
            }
        })

    }
    
    function handleChange(event){
        const {name, value} = event.target;
        setMemeImage(prevMemeImage =>{
            return{
            ...prevMemeImage,
            [name]: value
            }
        })
        
    }
    
    return(
        <main className="form">
            <div className="form__input">
                <input 
                    placeholder='Top text' 
                    type="text"
                    name = "topText"
                    value = {memeImage.topText}
                    onChange = {handleChange}

                ></input>
                <input 
                    placeholder='Bottom text' 
                    type="text"
                    name = 'bottomText'
                    value={memeImage.bottomText}
                    onChange = {handleChange}></input>
            </div>
            <button type="submit" className="form__buttom"  onClick={getmemesImg}> Get a new meme image <FcGallery style={{width: 30, height: 30, marginLeft:5}}></FcGallery></button>
            <div className="meme--card">
                <img src={memeImage.randomImage} className="meme--image" alt="memeImage"/>
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            
            </div>
        </main>
    )
}