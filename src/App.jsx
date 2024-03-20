import './App.css'
import Contactform from './components/contact-form/Contactform'
import Contactheader from './components/contact-header/Contactheader'
import Navbar from './components/navigation/Navbar'

function App() {
  return (
    <>
      <div>
        <Navbar />
          <Contactheader />
          <Contactform />
      </div>
    </>
  )
}

export default App
