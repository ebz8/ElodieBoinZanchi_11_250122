import React from 'react'

export default function Banner(props) {
    const texte = props.texte

    return (
    <div className='banner'>
        <img src={props.img} alt={props.alt} />
        {texte ? <p className='title'>{texte}</p> : ""}
    </div>
    )
}
