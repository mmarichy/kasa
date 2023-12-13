import BannerImg from '../../assets/home_banner.png'
import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'

function App() {
  return (
    <div>
      <Banner
        src={BannerImg}
        texte="Chez vous, partout et ailleurs"
        alt="Photo de falaises au bord de l'eau"
      />
      <Gallery />
    </div>
  )
}

export default App
