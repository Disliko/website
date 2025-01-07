import { useRef } from 'react'
import Button from '../../../components/Button/Button.jsx'
import './Try.css'
import { Link } from 'react-router-dom'
import logo from '../../../media/logo/logo.jpg'

export default function Try() {
  const extensionLink = useRef(
    'https://chromewebstore.google.com/detail/disliko/lggcieolgjndakkpgmokiomipmmocenn'
  ).current

  return (
    <>
      <div className="home_about list_y d_f_ce">
        <img className="try_img" src={logo} alt="Disliko logo" />
        <Link className="try_btn" to={extensionLink}>
          <Button>Explore</Button>
        </Link>
      </div>
    </>
  )
}
