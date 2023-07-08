import CartItem from "../components/CartItem";
import { useCartContext } from "../provider/CartProvider";

const Cart = () => {
  const {
    state: { cart, totalPrice, contador },
  } = useCartContext();

  //  funcion que da formato a un numero
  function formatNumbre(numbre) {
    return new Intl.NumberFormat().format(numbre);
  }

  return (
    <div>
      <h1>Carrito</h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          {cart.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
        </div>
        <div className="text-cyan-600 font-bold text-3xl items-start">
          TOTAL: ${formatNumbre(totalPrice)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
