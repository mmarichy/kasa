import data from '../../datas.json'
import Card from '../Card/Card'

const gallery = data.map((card /*un objet dans le json*/) => (
  <Card
    key={card.id}
    cardImg={card.cover}
    cardTitle={card.title}
    cardId={card.id}
    card={card}
  />
))
export default function Gallery() {
  return <div className="galleryCard">{gallery}</div>
}
