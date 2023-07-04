import { useEffect, useState } from "react";
import { useCartContext } from "../provider/CartProvider";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";

const ProductItem = ({ product }) => {
  //  seccion de variables
  const { dispatch } = useCartContext();
  const [showAdd, setshowAdd] = useState(false);
  const [product_, setProduct_] = useState(product);

  //  se obtiene el valor del useCartContext
  const {
    state: { cart, totalPrice, contador },
  } = useCartContext();

  //  evento para validar si el producto esta en el carrito
  const validar_producto = () => {
    //  fitlramos el producto del carrito
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
  };

  //  evento onSubmit del formulario
  const onSubmit = (event) => {
    //  se evita que el formulario se refresque
    event.preventDefault();

    //  fitlramos el producto del carrito
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
  };

  //  metodo useEffect
  useEffect(() => {
    //  se dejecuta la validacion del botón
    validar_producto();
  }, [product]);

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col border border-gray-300 shadow-sm rounded-xl p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-28 object-cover self-center"
        />
        <h2 className="font-bold">{product.title}</h2>
        <span>${product.price}</span>

        <Link to={`/detalle/${product.id}`}>
          <a className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
            {/* <span className="w-full">
              <button className="bg-white hover:bg-gray-200 text-black rounded-md p-2 mt-2">
                Ver detalle
              </button>
            </span> */}
            Ver detalle
          </a>
        </Link>

        {/* validamo que boton se mostrara, si es VERDADERO se mostrara el boton de agregar, si es FALSO mostrara boton de eliminar*/}
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
    </form>
  );
};

export default ProductItem;
