import { useState } from 'react'
import Arrow from '../../assets/arrow.svg'

function Collapse(data) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  function toggleCollapsed() {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div onClick={toggleCollapsed} className="collapse">
      <div className="infoCollapse">
        <h3>{data.title}</h3>
        <img
          src={Arrow}
          className={isCollapsed ? 'arrow ' : 'arrow arrow_rotated'}
          alt="flèches"
        />
      </div>

      {!isCollapsed && (
        <div className="animated">
          <p>{data.description}</p>
        </div>
      )}
    </div>
  )
}

export default Collapse
