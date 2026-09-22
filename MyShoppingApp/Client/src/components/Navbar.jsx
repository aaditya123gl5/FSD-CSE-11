function Navbar({ cartCount }) {

    return (
        <nav>

            <h2>MyShoppingApp</h2>

            <div>
                <a href="#">Home</a>
                <a href="#products">Products</a>
                <a href="#cart">
                    Cart ({cartCount})
                </a>
            </div>

        </nav>
    );
}

export default Navbar;