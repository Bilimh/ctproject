import About from './About';
import Accueil from './Accueil'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Reservation from './Reservation';
//import Panier from '../components/public/Panier';
//import Service from '../components/public/Service';
import Contact from '../components/public/Contact';


const Home: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path='/accueil' element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          {/*<Route path="/panier" element={<Panier />} />*/}
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Home;

