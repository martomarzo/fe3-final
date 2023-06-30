import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from './Components/utils/routes';
import Home from './Routes/Home';
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import { ContextProvider } from './Components/utils/global.context';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <ContextProvider>

          <Navbar />

          <Routes>

            <Route path={routes.home} element={<Home />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.datail} element={<Detail />} />
            <Route path={routes.favs} element={<Favs />} />
            


          </Routes>

          <Footer />
          
        </ContextProvider>

      </BrowserRouter>
    </div>
  );

}

export default App;
