const ProductItem = ({ product }) => {
    const { name, description, price } = product
    return (
      <div className={`p-4  rounded-xl ${product.price < 500 ? 'bg-slate-200' : 'bg-yellow-200'}`}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    );
  }


  export default ProductItem;