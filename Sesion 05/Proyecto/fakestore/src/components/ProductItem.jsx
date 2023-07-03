import { useEffect, useState } from "react";
import { useCartContext } from "../provider/CartProvider";

const ProductItem = ({ product }) => {
  const { dispatch } = useCartContext();

  const [showAdd, setshowAdd] = useState(false);

  const [product_, setProduct_] = useState(product);

  //  se obtiene el valor del useCartContext
  const {
    state: { cart, totalPrice, contador },
  } = useCartContext();

  const validar_producto = () => {
    //console.log(product);
    let valores = cart.filter(
      (product_filtro) => product_filtro.id == product.id
    );

    //  si la longitud del filtro es 0 no se encuenra en el carrito
    if (valores.length == 0) {
      setshowAdd(true);
    }
    //  de lo contrario el producto esta en el carrito
    else {
      setshowAdd(false);
    }

    console.log(valores.length);
    console.log(valores);
  };

  //  metodo useEffect
  useEffect(() => {
    //  se dejecuta la validacion del botón
    validar_producto();
  }, [product]);

  return (
    <div className="flex flex-col border border-gray-300 shadow-sm rounded-xl p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-28 object-cover self-center"
      />
      <h2 className="font-bold">{product.title}</h2>
      <span>${product.price}</span>

      {showAdd ? (
        <button
          className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2"
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", payload: product });
            alert("Producto añadido al carrito");
          }}
        >
          Añadir al carrito
        </button>
      ) : (
        <button
          className="bg-red-500  hover:bg-red-800 text-white rounded-md p-2 mt-2"
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_CART", payload: product });
            alert("Producto eliminado del carrito");
          }}
        >
          Eliminar del carrito
        </button>
      )}
    </div>
  );
};

export default ProductItem;
