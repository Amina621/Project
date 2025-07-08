
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Index from './Pages/index.jsx'
import PropertieDetails from './Pages/PropertieDetails.jsx'
import Agents from './Pages/Agents.jsx'
import Gallery from './Pages/Gallery.jsx'
import Properties from './Pages/Properties.jsx';
import Agencies from './Pages/Agencies.jsx';
import Contact from './Pages/Contact.jsx';


function App() {
  
  return (
    <>
      <Router>
      <Navbar />
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/propertie' element={<Properties/>}/>
            <Route path='/propertiedetail' element={<PropertieDetails/>}/>
            <Route path='/agents' element={<Agents/>}/>
             <Route path='/agencies' element={<Agencies/>}/>
             <Route path='/gallery' element={<Gallery/>}/>
             <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
    </Router>
    </>
      
  )
}

export default App
