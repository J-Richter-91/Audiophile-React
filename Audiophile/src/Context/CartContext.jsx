import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(
);

export  function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(1);
    

    function addToCart(product, count) {
        console.log("activate")
        const productName = product.name;
        const quantity = count;
        const price = product.price.toLocaleString();
        const productImg = product.categoryImage.desktop;
        const productIndex = cart.findIndex((item) => item.title === productName);

        if (productIndex !== -1) {
            setCart((prevState) => {
                const updatedCart = [...prevState];
                updatedCart[productIndex] = {
                    ...updatedCart[productIndex],
                    quantity: updatedCart[productIndex].quantity + quantity,
                };
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                setCount(1)
                return updatedCart;
            });
        } else {
            setCart((prevState) => {
                const updatedCart = [...prevState, { title: productName, quantity: quantity, price: price, Img: productImg }];
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                setCount(1)
                return updatedCart;
            });
        }
    }


       const total = cart.reduce((acc, item) => {
        const itemPrice = parseInt(item.quantity) * parseInt(item.price.split(',').join(''));
        return acc += itemPrice
     },0)

     function cartQuantityIncrease(product, qty){
        setCart(prevState => {
         const updatedCart = [...prevState];
    
         updatedCart[product].quantity = qty + 1;
         
         localStorage.setItem('cart', JSON.stringify(updatedCart))
         return updatedCart;
         
     })
     }
 
     
     function cartQuantityDecrease(product, qty){
         setCart(prevState => {
          const updatedCart = [...prevState];
          // Increment the quantity of the specified product
          
          if (updatedCart[product].quantity > 0) {
             updatedCart[product].quantity = qty - 1;
             
             
         } else if(updatedCart[product].quantity === 0){
             updatedCart.splice(product, 1)
             localStorage.setItem('cart', JSON.stringify(updatedCart))
         }
          
          
          // Return the updated state
          
          return updatedCart;
          
      })
      }

      useEffect(() => {
        // Load cart data from local storage when component mounts
        const savedCart = localStorage.getItem('cart');
        console.log("Saved Cart:", savedCart); // Log retrieved cart data
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    function removeAll(){
        setCart([]);
        localStorage.removeItem('cart')
       }
     

    const cartContextValue = {
        cart: cart,
        setCart: setCart,
        updateCart: addToCart,
        resetCart: removeAll,
        increaseQuantity: cartQuantityIncrease,
        decreaseQuantity: cartQuantityDecrease,
        count: count,
        setCount: setCount,
        total: total
    }

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext
