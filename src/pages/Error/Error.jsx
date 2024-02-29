import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <div className="bloc">
        <p className="bloc_404">404</p>
        <p className="bloc_Text">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <div>
        <Link to="/kasa" className="linkHome">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}

export default Error
