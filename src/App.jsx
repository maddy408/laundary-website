import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarPage from './components/NavbarPage'
import Bottom from './components/Home/Bottom';
import Pricingcontent from './components/Pricing/Pricingcontent';
import Servicescontent from './components/Service/Servicescontent';
import Aboutcontent from './components/About us/Aboutcontent';
import Contactcontent from './components/Contact/Contactcontent';
import Womencontent from './components/Womenlist/Womencontent';
import Homecontent from './components/Home/Homecontent';
import Book from './components/Form/Book';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <>
   <BrowserRouter>
        <NavbarPage />
        <Routes>
          <Route path="/" element={<Homecontent />} />
          <Route path="/service" element={<Servicescontent />} />
          <Route path="/pricing" element={<Pricingcontent />} />
          <Route path="/about" element={<Aboutcontent />} />
          <Route path="/contact" element={<Contactcontent />} />
          <Route path="/women" element={<Womencontent />} />
          <Route path="/book" element={<Book />} />
        </Routes>
        <Bottom />
      </BrowserRouter>
          </>
  )
}

export default App;




