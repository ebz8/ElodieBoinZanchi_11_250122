import HousingTitle from "../HousingTitle/HousingTitle"
import Tag from "../Tag/Tag"
import Host from "../Host/Host"
import Rate from "../Rate/Rate"

export default function HousingInfos(props) {
console.log(props.tags)
  return (
    <div className='infos'>
            <div className='infos-section'>
                <HousingTitle titre={props.title} localisation={props.location}/>
                <ul className='tags'>
                    {props.tags.map((tagItem, index) => <Tag key={index} nom={tagItem}/>)}
                </ul>
            </div>
            <div className='infos-section'>
                <Host />
                <Rate />
            </div> 
        </div>
  )
}
