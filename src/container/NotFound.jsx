/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../App.css'
import '../styles/MainContainer.css'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'
import { Link } from 'react-router-dom'
import BottomMenu from '../components/BottomMenu'

const App = () => {
  return (
    <div>
      <div className="GlobalContainer">
        <div style={{ zIndex: 1 }}>
          <TopBar />
          <div className="navBar">
          </div>
          <div className="headerMargin" />
          <div className="MainDashboard" style={{ height: '40vh' }}>
            <>
              <section>
                <section>
                  <p className="ContractContentTextTitle h1">
                    The ETH Network's TeleFun
                  </p>
                  <p style={{ textAlign: 'center' }}>
                    <Link to="/CreateTeleFun" className="create-token-button">
                      Create&nbsp;Token&nbsp;Launch
                    </Link>
                  </p>
                  <br />
                </section>
              </section>
            </>
          </div>
          <BottomMenu />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
