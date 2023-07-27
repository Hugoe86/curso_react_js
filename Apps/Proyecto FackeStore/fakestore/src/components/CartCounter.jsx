import { useEffect, useState } from "react";


const CartCounter = () => {

    const [productCartCount, setProductCartCount] = useState(0);


       //  metodo useEffect
   useEffect(() => {
    //  asigna el valor al localStorege
    localStorage.setItem("carCounter", productCartCount);
  }, [productCartCount]);

}


export default CartCounter;