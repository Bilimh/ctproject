//Panier.tsx

import { ProduitCapillaire } from '../../constant/Description'
import './panier.css'; 

import { useState, useEffect } from "react";

interface PanierProps {
  cart: ProduitCapillaire[];
  showPanier: boolean;
  setCart: (cart: ProduitCapillaire[]) => void
}

const Panier = ({ cart, showPanier, setCart }: PanierProps) => {
  const [prix, setPrice] = useState<number>();

  const handleRemove = (id: number) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => (ans += item.prix));
    setPrice(parseFloat(ans.toFixed(2))); // Convertir la chaîne en nombre
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);
  const panierClasses = showPanier ? "article show" : "article";

  return (
    <article className={panierClasses}>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.nom}</p>
          </div>

          <div className='buton_remove'>
            <span className='panier_prix'>{item.prix} €</span>
            <button onClick={() => handleRemove(item.id)}>Retirer</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Prix total</span>
        <span>{prix} €</span>
      </div>
    </article>
  )
}

export default Panier;



















/*import './panier.css'
import { ProduitCapillaire } from '../../constant/Description'
import { useState, useEffect } from "react";

export interface panierProps{
  cart: ProduitCapillaire[]
  setCart: (cart: ProduitCapillaire[]) => void;
  //handleChange : (item: ProduitCapillaire) => void
}

const Panier = ({cart, setCart}: panierProps) => {
  const [prix, setPrice] = useState<number>();

  const handleRemove = (id:number) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => (ans += item.prix));
    setPrice(parseFloat(ans.toFixed(2))); // Convertir la chaîne en nombre
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <article>
    {cart.map((item) => (
      <div className="cart_box" key={item.id}>
        <div className="cart_img">
          <img src={item.image} alt="" />
          <p>{item.nom}</p>
        </div>
   
        <div>
          <span>{item.prix}</span>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      </div>
    ))}
    <div className="total">
      <span>Prix total</span>
      <span>{prix} €</span>
    </div>
  </article>
  )
}

export default Panier*/

/*<div>
<button onClick={() => handleChange(item, 1)}>+</button>
<button>{item.amount}</button>
<button onClick={() => handleChange(item, -1)}>-</button>
</div>*/