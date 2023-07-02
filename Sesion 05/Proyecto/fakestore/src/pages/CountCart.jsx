import CartItem from "../components/CartItem";
import { useCartContext } from "../provider/CartProvider";

const CountCart = () => {
  const {
    state: { cart, totalPrice, contador },
  } = useCartContext();

  return (
    <div>
      <span>Carrito</span>
      <span>&nbsp;{contador}</span>
    </div>
  );
};

export default CountCart;
