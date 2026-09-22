import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {

    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 20000 },
        { id: 3, name: "Headphones", price: 2000 },
        { id: 4, name: "Keyboard", price: 1500 }
    ];

    function add(product) {
        setCart([...cart, product]);
    }

    function remove(id) {
        setCart(cart.filter(item => item.id !== id));
    }

    return (
        <>
            <Navbar cartCount={cart.length} />

            <h1>Products</h1>

            <section className="products">

                {products.map(product => (
                    <div className="product" key={product.id}>

                        <h3>{product.name}</h3>

                        <p>₹{product.price}</p>

                        <button onClick={() => add(product)}>
                            Add
                        </button>

                    </div>
                ))}

            </section>

            <h2>Cart</h2>

            {cart.map(item => (
                <p key={item.id}>

                    {item.name} - ₹{item.price}

                    <button onClick={() => remove(item.id)}>
                        Remove
                    </button>

                </p>
            ))}
        </>
    );
}

export default App;