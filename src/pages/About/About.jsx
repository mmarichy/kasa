import Banner from '../../components/Banner/Banner'
import BannerImg from '../../assets/about_banner.png'
import './About.scss'
import Collapse from '../../components/Collapse/Collapse'
import aboutData from '../../about.json'

function About() {
  return (
    <div>
      <div>
        <Banner src={BannerImg} alt="Photo de montagne" />
        {aboutData.map((about, id) => (
          <Collapse key={id} title={about.title} text={about.text} />
        ))}
      </div>
    </div>
  )
}

export default About
