import SponsorCard from '../../shared/sponsorCard'
import './sponsor.css'

const GC = {
    level: 'Grand Champion Sponsor',
    amount: 3000,
    benefits: [
      `As a "Grand Champion" sponsor, your business name and year sponsored will be permanently engraved on a Wooden Plaque to be hung in the viewing room at Northfield Farm, Home of Athelas Therapeutic Riding, Inc. In addition, your Business Logo will be added to the vinyl banner which is hung in the riding arena for the year of your sponsorship.`,
      `We will proudly recognize Grand Champion Sponsors at all Athelas Public Events and if you or a member of your business is present at the event, you will be introduced and have an opportunity to briefly speak about your business to attendees.`,
      `Your sponsorship, including your business logo will be listed on our web page and in our newsletters. In appreciation of your sponsorship we will present you with an 11 x 14, matted framed picture of the sponsored horse with an Athelas rider. We would welcome a representative of your business to be included in the picture if so desired. A personalized thank you from the rider will be included.`
    ],
    color: `#D5AD6D`,
  }
const levels = [
  {
    id: 1,
    level: 'Blue Ribbon Sponsor',
    amount: 650,
    benefits: [
      `Business Logo will be added to the vinyl banner which is hung in the riding arena for the year of your sponsorship.`,
      `Recognition at all Athelas Public Events. If present at event your business representative will be publicly introduced and acknowledged.`,
      `Your sponsorship, including your business logo will be listed on our web page and in our newsletters.`,
      `Business will be presented with an 8 x10, matted framed picture of horse and Athelas rider, noting sponsorship level.`,
    ],
    color: `#0000FF`,
  },
  {
    id: 2,
    level: 'Red Ribbon Sponsor',
    amount: 500,
    benefits: [
      `Business Name in company colors will be added to the vinyl banner which is hung in the riding arena for the year of your sponsorship`,
      `Recognition at all Athelas Public Events.`,
      `Your business name and sponsorship level will be listed on our web page and in newsletters.`,
      `Business will be presented with an 8 x 10, matted framed picture of horse and Athelas rider, noting sponsorship level.`,
    ],
    color: `#FF0000`,
  },
  {
    id: 3,
    level: 'Yellow Ribbon Sponsor',
    amount: 350,
    benefits: [
      `Business Name in standard black lettering will be added to the vinyl banner which is hung in the riding arena for the year of your sponsorship.`,
      `Recognition at all Athelas Public Events.`,
      `Your business name and sponsorship level will be listed on our web page and in newsletters.`,
      `Business will be presented with a 5 x 7, matted framed picture of horse and Athelas rider, noting sponsorship level.`,
    ],
    color: `#FFFF00`,
  },
]

const Sponsor = ({props}) => {
  return (
    <>
      <h1>Our Sponsors</h1>
      <div id='blerb'>
        <h4>description</h4>
      </div>
      <div id='levels'>
        <div id='grandChampion'>
          <h3 style={{ color: GC.color }}>{GC.level}: ${GC.amount}</h3>
          <h4>Benefits for Sponsor:</h4>
          <p>{GC.benefits[0]}</p>
          <p>{GC.benefits[1]}</p>
          <p>{GC.benefits[2]}</p>
        </div>
        <div id='levelCard'>
          {levels.map((level) => 
            <SponsorCard
              id='runnersUp'
              key={level.id}
              color={level.color}
              level={level.level}
              amount={level.amount}
              benefits={level.benefits.map((benefit) => <p>{benefit}</p>)}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Sponsor