import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Loading from './pages/Loading/Loading'
import './style/App.css'

const Home = React.lazy(() => import('./pages/Home/Home'))
const PrivacyPolicy = React.lazy(() =>
  import('./pages/PrivacyPolicy/PrivacyPolicy')
)
const ExtensionPath = React.lazy(() =>
  import('./pages/ExtensionPath/ExtensionPath')
)

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/extension" element={<ExtensionPath />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}
