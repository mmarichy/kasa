import { useState } from 'react'
import Arrow from '../../assets/arrow.svg'

function Collapse(data) {
  const [isCollapse, setIsCollapse] = useState(true)
  function toggleCollapse() {
    setIsCollapse(!isCollapse)
    console.log(isCollapse)
  }

  return (
    <div onClick={toggleCollapse}>
      <div className="infoCollapse">
        <h2>{data.title}</h2>
        <img
          className={isCollapse ? 'arrow' : 'arrow rotated'}
          src={Arrow}
          alt={isCollapse ? 'Flèche vers le bas' : 'Flèche vers le haut'}
        />
      </div>

      {!isCollapse && (
        <div>
          {data.text.map((item, id) => (
            <p key={id}>{item.text}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Collapse
