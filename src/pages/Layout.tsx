// Layout.tsx
import { Outlet ,useLocation } from "react-router";
import Header from "../components/public/Header";
import Footer from "../components/public/Footer";
import Produit from "../components/public/Produit";
import { ProduitCapillaire } from "../constant/Description";
import { useState } from "react";


const Layout = () => {
  const [cart, setCart] = useState<ProduitCapillaire[]>([]);
  const location = useLocation();

  const handleAddCard = (item: ProduitCapillaire) => {
    let isPresent = false;

    cart.forEach((produit) => {
      if (item.id === produit.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      alert("Produit à nouveau ajouté dans le panier");
      return;
    }

    setCart([...cart, item]);
  };
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Header size={cart.length} />
      <Outlet />
      {isHomePage && <Produit handleAddCard={handleAddCard} />}
      <Footer />
    </>
  );
};

export default Layout;
