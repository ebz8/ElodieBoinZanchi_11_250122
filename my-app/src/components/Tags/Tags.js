import './Tags.scss'

export default function Tags(props) {
    return (
        <ul className='tags'>
            {props.listeTags.map((tagItem, index) => {
                return (
                <li key={index} className="tag">
                    {tagItem}
                </li>
                )
            })}
        </ul>
  )
}