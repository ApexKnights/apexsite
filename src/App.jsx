import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Wrapper from './constants/Wrapper/Wrapper'
import About from './screens/about/About'
import Services from './screens/services/Services'
import Contact from './screens/contact/Contact'
import ScrollToTop from './constants/scrollToTop/ScrollToTop'
import Menu from './components/header/Menu'
import { RxHamburgerMenu } from 'react-icons/rx'
import Loading from './constants/Loading/Loading'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const [butt, setButt] = useState(false)
  const [menu, setMenu] = useState(false)
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    const handleScrollVisibility = () => {
      window.scrollY > 300 ? setButt(true) : setButt(false);
    }
    window.addEventListener('scroll', handleScrollVisibility);

  }, [])
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2500)
  }, [])
  return (
    <>
      {
        loader ? <Loading /> :
          <div className='constant'>
            <Header />
            {
              butt ? <div className="butt-ham">
                <RxHamburgerMenu className='top-ico' onClick={() => setMenu(true)} />
              </div> : null
            }
            {
              menu ? <Menu setHam={setMenu} /> : null
            }
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
            <ScrollToTop />
            <Toaster />
          </div>
      }

    </>
  )
}

export default App
