import { Navigate, useParams } from 'react-router-dom'
import data from '../../datas.json'
import Carrousel from '../../components/Carrousel/Carrousel'
import InfosLog from '../../components/Logement/InfosLog/InfosLog'

export default function Logement() {
  const { id } = useParams()
  const idLog = data.find((obj) => obj.id === id)
  if (idLog) {
    return (
      <div>
        <div>
          <Carrousel Log={idLog} />
          <InfosLog Log={idLog} />
        </div>
      </div>
    )
  } else {
    return <Navigate to="/404" />
  }
}
