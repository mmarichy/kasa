import BannerImg from '../../assets/home_banner.png'
import Banner from '../../components/Banner/Banner'

function App() {
  return (
    <div>
      <Banner
        src={BannerImg}
        texte="Chez vous, partout et ailleurs"
        alt="Photo de falaises au bord de l'eau"
      />
    </div>
  )
}

export default App
