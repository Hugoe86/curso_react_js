//  sección import
import { useEffect, useState } from "react";
import Home from "./Home";
import { useParams } from "react-router-dom";

// funcion principal
const ProductDetail = () => {
  //  declaracion de variables
  const { productId } = useParams();
  const { product_ } = useParams();
  const [producto_filtro, setproducto_filtro] = useState([]);

  const cargar_estructura_producto = () => {
    //console.log(product_);

    const valores = localStorage.getItem("productos");
    const producto = JSON.parse(valores);
    //const valores_recibidos = JSON.parse(product_);

    //  fitlramos el producto del carrito
    let producto_filtrado_ = producto.filter(
      (product_filtro) => product_filtro.id == productId
    );
  };

  //  metodo useEffect
  useEffect(() => {}, [producto_filtro]);

  //  metodo useEffect
  useEffect(() => {
    cargar_estructura_producto();
  }, []);

  //  regresa la estructura de la pagina
  return (
    <div className="flex flex-col border border-gray-300 shadow-sm rounded-xl p-4">
      <h2>Detalles del producto</h2>
      <h2 className="font-bold">{producto_filtro.title}</h2>

      {/* <img
        src={prodcuto_filtrado_.image}
        alt={prodcuto_filtrado_.title}
        className="h-28 object-cover self-center"
      /> */}
    </div>
    
  );
};

//  sección export
export default ProductDetail;
