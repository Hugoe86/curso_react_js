//  sección import
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../provider/CartProvider";

// funcion principal
const ProductDetail = () => {
  //  declaracion de variables
  const { productId } = useParams();
  const { dispatch } = useCartContext();
  const [showAdd, setshowAdd] = useState(false);

  //  se obtiene el valor del useCartContext
  const {
    state: { cart, totalPrice, contador },
  } = useCartContext();

  //    se asigna el nombre de la variable a buscar en el localStorage
  var key = "productos";

  // se cargan los valores del localStorage
  const valores = JSON.parse(localStorage.getItem(key));
  let producto_detalle_ = valores.find((product) => product.id == productId);
  let producto_rating = producto_detalle_.rating;



  //  metodo useEffect
  useEffect(() => {
    console.log(producto_detalle_.id);
    //  fitlramos el producto del carrito
    let valores_ = cart.filter(
      (product_filtro) => product_filtro.id == producto_detalle_.id
    );

    //  si la longitud del filtro es 0 no se encuenra en el carrito
    if (valores_.length == 0) {
      setshowAdd(true);
    }
    //  de lo contrario el producto esta en el carrito
    else {
      setshowAdd(false);
    }
  }, [showAdd]);



  //  regresa la estructura de la pagina
  return (
    <div className="flex flex-col border border-gray-300 shadow-sm rounded-xl p-4">
      <h2>Detalles del producto</h2>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>

            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Count
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                src={producto_detalle_.image}
                alt={producto_detalle_.title}
                className="h-50 object-cover self-center"
              />
            </th>
            <td className="px-6 py-4">
              <label>{producto_detalle_.id}</label>
            </td>
            <td className="px-6 py-4">
              <label className="text-orange-500">★</label>
              <label>{producto_rating.rate}</label>
            </td>
            <td className="px-6 py-4">
              <label>{producto_detalle_.title}</label>
            </td>
            <td className="px-6 py-4">
              $<label>{producto_detalle_.price}</label>
            </td>
            <td className="px-6 py-4">
              <label>{producto_detalle_.description}</label>
            </td>
            <td className="px-6 py-4">
              <label>{producto_detalle_.category}</label>
            </td>
            <td className="px-6 py-4">
              <label>{producto_rating.count}</label>
            </td>

            <td className="px-6 py-4">
              {showAdd ? (
                <button
                  className="transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 bg-black  hover:bg-gray-800 duration-300  text-white rounded-md p-2 mt-2"
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: producto_detalle_,
                    });
                    setshowAdd(!showAdd);
                    alert("Producto añadido al carrito");
                  }}
                >
                  Añadir al carrito
                </button>
              ) : (
                <button
                  className="transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 bg-red-500  hover:bg-red-800 duration-300 text-white rounded-md p-2 mt-2"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: producto_detalle_,
                    });
                    setshowAdd(!showAdd);
                    alert("Producto eliminado del carrito");
                  }}
                >
                  Eliminar del carrito
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

//  sección export
export default ProductDetail;
