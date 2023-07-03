//  sección de importación
import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import ProductItem from "../components/ProductItem";

//  funcion principal
const Home = () => {
  //  declaracion de variables
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getProducts } = useAPI();
  const [search, setSearch] = useState("");

  //  metodo para filtar el producto
  const searcher = (e) => {
    //  recibe el valor del evento e
    setSearch(e.target.value);

    // //  revisamos que contiene la variable de productos
    // console.log(products);

    //  mandamos filtar el producto
    filtrar(e.target.value);
  };

  //  metodo que filtra los productos
  const filtrar = (search) => {
    //  validamos que tenga informacion de busqueda
    if (search) {
      //  ingresamos la consulta del prducto
      let valores = products.filter((product) =>
        product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );

      //  cargamos el valor obtenido
      setProducts(valores);
    }
    //  si esta vacio, se recarga todos los productos
    else {
      //  consultamos todos los productos
      getProducts()
        .then((products) => {
          setProducts(products);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  };

  //  evento para el useEffect
  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);

        //console.log(products)
      })
      .catch((err) => console.error(err));
  }, []);

  //  metodo useEffect
  useEffect(() => {
    //  asigna el valor al localStorege
    localStorage.setItem("productos", JSON.stringify(products));
  }, [products]);

  //  se regresa el valor
  return (
    <div className="flex-1 flex flex-col gap-4 p-4">
      <h1>FakeStore</h1>

      <div>
        <label
          for="txt_busqueda"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Busqueda
        </label>
        <input
          type="text"
          id="txt_busqueda"
          onChange={searcher}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      {loading && <p>Cargando...</p>}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

//  secion de export
export default Home;
