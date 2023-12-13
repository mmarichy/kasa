import { Link } from 'react-router-dom'

function Card({ card }) {
  return (
    <div className="card">
      <Link to={'/logement/' + card.id}>
        <div className="card_Img">
          <img src={card.cover} alt={card.title} />
        </div>
        <h3 className="card_title">{card.title}</h3>
      </Link>
    </div>
  )
}

export default Card
