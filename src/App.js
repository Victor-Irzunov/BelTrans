import './App.css'
import React, { useContext } from 'react'
import { useTransition, animated } from 'react-spring'
import { Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MainPage from './pages/MainPage/MainPage'
import ServicePage from './pages/ServicePage/ServicePage'
import PerevozMebel from './pages/PerevozMebel/PerevozMebel'
import KvartirPereezd from './pages/KvartirPereezd/KvartirPereezd'
import DostavkaGruz from './pages/DostavkaGruz/DostavkaGruz'
import PerevozkaKrupnGruz from './pages/PerevozkaKrupnGruz/PerevozkaKrupnGruz'
import VyvozStroitMusor from './pages/VyvozStroitMusor/VyvozStroitMusor'
import BreadCrumbComp from './components/breadcrumb/BreadcrumbComp'
// import Spinner from './components/spiner/Spiner'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import OtzyvPage from './pages/OtvyvPage/OtzyvPage'
import CenyPage from './pages/CenyPage/CenyPage'
import { observer } from "mobx-react-lite"
import { Context } from './index'


const App = observer(() => {
  const { data } = useContext(Context)
  // const [loading, setLoading] = useState(true)
  const location = useLocation()



  const transitions = useTransition(location, {
    from: {
      display: 'none',
      transform: 'translateX(100%)',
    },
    enter: {
      display: 'block',
      transform: 'translateX(0%)',
    },
    leave: {
      display: 'none',
      transform: 'translateX(-100%)',
    },
  })

  // if (loading) {
  //   return <Spinner />
  // }
  const fuIsMobilMenu = () => {
    data.setIsMobilMenu(false)
  }

  return (
    <div className="app">
      <Header />
      <BreadCrumbComp />
      <main onClick={fuIsMobilMenu}>
        {
          transitions((props, item) => (
            <animated.div style={props}>
              <Routes location={item}>
                <Route path='/' element={<MainPage />} />
                <Route path='/uslugi' element={<ServicePage />} />
                <Route path='/uslugi/perevozka-mebeli' element={<PerevozMebel />} />
                <Route path='/uslugi/kvartirnyi-pereezd' element={<KvartirPereezd />} />
                <Route path='/uslugi/dostavka-gruzov' element={<DostavkaGruz />} />
                <Route path='/uslugi/perevozka-krupnogo-gruza' element={<PerevozkaKrupnGruz />} />
                <Route path='/uslugi/vyvoz-stroitelnogo-musora' element={<VyvozStroitMusor />} />
                <Route path='/ceny' element={<CenyPage />} />
                <Route path='/otzyvy' element={<OtzyvPage />} />

                <Route path='*' element={<ErrorPage />} />
              </Routes>
            </animated.div>
          ))
        }
      </main>
      <Footer />
    </div>

  )
})

export default App
