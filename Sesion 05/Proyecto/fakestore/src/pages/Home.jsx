import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getProducts } = useAPI();
  const [search, setSearch] = useState("");


  const searcher = (e) => {
    setSearch(e.target.value);
    //console.log(e.target.value);
    console.log(products);

    filtrar(e.target.value);
    //filtrar('scandisk');
  };

  const filtrar = (search) => {
    //console.log(products);
    
    if (search) {

       let valores = products.filter((product) => product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

       let results = !search ? products : products.filter((dato)=> dato.title.toLowerCase().includes(search.toLocaleLowerCase()))
  
       console.log(valores);
       console.log(results);

       setProducts(valores);
    } else {
      getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((err) => console.error(err));
    }
    

   
  };

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

   //  metodo useEffect
   useEffect(() => {
    //  asigna el valor al localStorege
    localStorage.setItem("productos", products);
  }, [products]);


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

export default Home;
