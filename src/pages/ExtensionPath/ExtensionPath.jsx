import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './ExtensionPath.css'

export default function ExtensionPath() {
  const extensionLink = useRef(
    'https://chromewebstore.google.com/detail/disliko/lggcieolgjndakkpgmokiomipmmocenn'
  ).current

  useEffect(() => {
    window.location.href = extensionLink
  }, [extensionLink])

  return (
    <>
      <div className="container container_content">
        <div className="extension_path d_f_ce list_y">
          <h1>If you weren't automaticly redirected click the button below</h1>
          <Link className="extension_path_btn" to={extensionLink}>
            <Button>Go to Extension</Button>
          </Link>
        </div>
      </div>
    </>
  )
}
