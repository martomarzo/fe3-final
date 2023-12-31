import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from './Components/utils/routes';
import Home from './Routes/Home';
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Navbar />

          <Routes>

            <Route path={routes.home} element={<Home />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.datail} element={<Detail />} />
            <Route path={routes.favs} element={<Favs />} />
            
          </Routes>

          <Footer />
          
        
      </BrowserRouter>
    </div>
  );

}

export default App;
