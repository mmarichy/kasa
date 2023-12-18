import * as React from 'react'
import BannerImg from '../../assets/about_banner.png'
import Banner from '../../components/Banner/Banner'
import about from '../../about.json'
import Collapse from '../../components/Collapse/Collapse'

export default function About() {
  return (
    <div>
      <div>
        <Banner src={BannerImg} alt="Photo de paysage de montagnes" />
      </div>
      {about.map((data, index) => (
        <div className="collapseList" key={index}>
          <Collapse title={data.title} description={data.description} />
        </div>
      ))}
    </div>
  )
}
