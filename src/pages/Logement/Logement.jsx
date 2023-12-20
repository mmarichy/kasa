import { Navigate, useParams } from 'react-router-dom'
import data from '../../datas.json'
import Carrousel from '../../components/Logement/Carrousel/Carrousel'

export default function Logement() {
  const { id } = useParams()
  const idLog = data.find((obj) => obj.id === id)
  if (idLog) {
    return (
      <div>
        <div>
          <Carrousel dataLog={idLog} />
        </div>
      </div>
    )
  } else {
    return <Navigate to="/404" />
  }
}
