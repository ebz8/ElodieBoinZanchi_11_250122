import './Banner.scss'

export default function Banner(props) {
    const texte = props.texte

    return (
    <div className='banner' tabIndex="0">
        <img src={props.img} alt={props.alt} />
        {texte ? <h1 className='title'>{texte}</h1> : ""}
    </div>
    )
}
