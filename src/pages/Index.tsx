import About from './About';
import Accueil from './Accueil'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';


const Home: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path='/accueil' element={<Accueil />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Home;

