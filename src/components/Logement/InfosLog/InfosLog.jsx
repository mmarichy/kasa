import TitreLog from '../Titre/TitreLog'
import Tag from '../Tags/Tags'
import Stars from '../Stars/Stars'
import Host from '../Host/Host'
import Collapse from '../../Collapse/Collapse'

function infosLog({ Log }) {
  const listTags = Log.tags.map((item) => <Tag tag={item} key={item} />)
  const equipments = Log.equipments.map((item, index) => (
    <li key={index} className="equipmentsList">
      {item}
    </li>
  ))
  return (
    <div>
      <div className="infoLogement">
        <div>
          <TitreLog Title={Log.title} Location={Log.location} />
          <div className="tagBox">{listTags}</div>
        </div>
        <div className="host-Star">
          <Host host={Log.host} />
          <Stars number={Log.rating} />
        </div>
      </div>
      <div className="collapseBox">
        <Collapse title="Description" description={Log.description} />
        <Collapse title="Équipments" description={equipments} />
      </div>
    </div>
  )
}

export default infosLog
