function Banner({ texte, src, alt }) {
  return (
    <div className="banner">
      <div className="banner_Img">
        <img src={src} alt={alt} />
      </div>
      <div className="banner_Texte">
        <p>{texte}</p>
      </div>
    </div>
  )
}

export default Banner
