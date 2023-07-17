import React, {useState} from 'react'
import Nav from './Nav'
import Footer from './Footer'
import context from '../../context/stateContext'
import Hero from '../landingPage/Hero'

const AppLayout = ({children}) => {
  const [page, setPage] = useState('Home')
  const [clicked, setClicked] = useState(false)
  const [showModal, setShowModal] = React.useState(false);
  const [check, setCheck] = useState({
    schoolClick: false,
    companyClick: false,
  })

  const removeBarMenu = () => {
    setCheck({schoolClick: false, companyClick: false})
  }

  return (
    <div className=''>
      <context.Provider value={{
        page, 
        setPage,
        clicked, 
        setClicked,
        check,
        setCheck,
        showModal, 
        setShowModal
      }}>

        <Nav />
        <main onClick={removeBarMenu} className={` ${clicked && 'hidden'} xl:pt-16`}>
          {children}
        </main>
        <Footer />
      </context.Provider>
    </div>
  )
}

export default AppLayout