import './sponsorCard.css'

const SponsorCard = (props) => {
  return (
    <>
      <div key={props.id}>
        <h3 style={{ color: props.color }}>{props.level}: ${props.amount}</h3>
        <h4>Benefits for Sponsor:</h4>
        <p>{props.benefits}</p>
      </div>
    </>
  )
}

export default SponsorCard