import './HousingTitle.scss'

export default function HousingTitle(props) {
  return (
    <div className="housing-title">
      <h2>{props.titre}</h2>
      <h3>{props.localisation}</h3>
    </div>
  )
}
