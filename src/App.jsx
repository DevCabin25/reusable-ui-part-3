import './App.css'
import Footer from './components/Footer/Footer'
import Footer2 from './components/Footer/Footer2'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar></Navbar>
      <h1 className='text-3xl font-bold text-center text-gray-900'>Reusable-UI</h1>
      <Footer></Footer>
      <h1>Another footer section</h1>
      <Footer2></Footer2>
    </>
  )
}

export default App
