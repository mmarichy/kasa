import emptyStar from '../../../assets/Empty_star.svg'
import filledStar from '../../../assets/Filled_star.svg'

function Stars({ number }) {
  const stars = [1, 2, 3, 4, 5]
  return (
    <div>
      {stars.map((data, index) =>
        number >= data ? (
          <img
            key={index}
            className="stars"
            src={filledStar}
            alt="étoiles pleine"
          />
        ) : (
          <img
            key={index}
            className="stars"
            src={emptyStar}
            alt="étoiles vide"
          />
        )
      )}
    </div>
  )
}

export default Stars
