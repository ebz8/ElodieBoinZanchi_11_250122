import './Host.scss'

export default function Host(props) {

  const [hostFirstName, hostLastName] = props.name.split(' ')

  return (
    <div className="host" aria-label="informations sur l'hôte">
      <h3>
        <span>{hostFirstName}</span>
        <span>{hostLastName}</span>
      </h3>
      <img src={props.picture} alt={`photos de ${props.name}`}/>
    </div>
  )
}
