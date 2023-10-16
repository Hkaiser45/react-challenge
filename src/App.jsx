/*import { useState } from 'react'*/
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CardList from './components/CardList'


function App() {


  return (
    <><div>
      <header className='navbar'>
        < NavBar />
      </header>
      <body className='cardlist'>
        <CardList/>
      </body>
      <footer className='end'>
        <Footer />
      </footer>
    </div>

    </>
  )
}

export default App
