import React, { useState } from 'react';
import './contect.css';

function Contect(){
    const[name,setname]=useState('')
       let src=`https://source.unsplash.com/600x400/?${name}`
    const imageName=(e)=>{
        let type=e.target.value
        setname(type)
    }
    return(
        <>
        <div className="images">

        <div className='input'>
            <input type='text' placeholder="enter any name" value={name} onChange={imageName}/>
        </div>
        {name===''?null:<Images src={src}/>}
        </div>
        </>
    )
}


function Images(props){
return(
    <>
    <div className="image"> 
            <img src={props.src} alt='no-img'></img>
        </div>
        </>
)
}
export default Contect;