import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { extensionUrls, sendToExtension } from './utils/sendToExtension'
import './ExtensionPath.css'

export default function ExtensionPath() {
  const [url, setUrl] = useState(extensionUrls.default)

  useEffect(() => {
    const new_url = sendToExtension()
    setUrl(new_url)
    window.location.href = new_url
  }, [])

  return (
    <>
      <div className="container container_content">
        <div className="extension_path d_f_ce list_y">
          <h1>If you weren't automaticly redirected click the button below</h1>
          <Link className="extension_path_btn" to={url}>
            <Button>Go to Extension</Button>
          </Link>
        </div>
      </div>
    </>
  )
}
