import './HousingInfos.scss'

import HousingTitle from "../HousingTitle/HousingTitle"
import Tags from "../Tags/Tags"
import Host from "../Host/Host"
import Rate from "../Rate/Rate"


export default function HousingInfos(props) {
  return (
    <div className='housing-infos'>
            <div className='infos-section'>
                <HousingTitle titre={props.title} localisation={props.location}/>
                <Tags listeTags={props.tags}/>
            </div>
            <div className='infos-section'>
                <Host name={props.host.name} picture={props.host.picture} />
                <Rate />
            </div> 
        </div>
  )
}
