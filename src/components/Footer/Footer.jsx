import logo from '../../assets/logo.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_Container">
        <img src={logo} alt="logoKasa" className="footer_Container_logo" />
        <p>&copy; 2020 Kasa, All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
