import React, { useState } from 'react'

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import UserLayout from './components/userLayout.jsx'
import ItemStore from './components/items.jsx'


const COURSES = [

    {
        id: 1,
        title: "React.js",
        category: "Web Development",
        price: 2999,
        duration: "8 Weeks",
        level: "Intermediate",
        icon: "⚛️",
        description: "Learn React.js from basics to advanced concepts and build modern web applications."
    },

    {
        id: 2,
        title: "Node.js",
        category: "Backend Development",
        price: 3499,
        duration: "10 Weeks",
        level: "Intermediate",
        icon: "🟢",
        description: "Learn Node.js and build scalable backend applications using JavaScript."
    },

    {
        id: 3,
        title: "Java Programming",
        category: "Programming",
        price: 2499,
        duration: "12 Weeks",
        level: "Beginner",
        icon: "☕",
        description: "Master Java programming, OOP, collections, exceptions and more."
    },

    {
        id: 4,
        title: "Python",
        category: "Programming",
        price: 1999,
        duration: "8 Weeks",
        level: "Beginner",
        icon: "🐍",
        description: "Learn Python programming from fundamentals to real-world applications."
    },

    {
        id: 5,
        title: "MongoDB",
        category: "Database",
        price: 1499,
        duration: "6 Weeks",
        level: "Beginner",
        icon: "🍃",
        description: "Learn MongoDB database concepts, queries and integration with applications."
    },

    {
        id: 6,
        title: "Full Stack Development",
        category: "Web Development",
        price: 4999,
        duration: "16 Weeks",
        level: "Advanced",
        icon: "💻",
        description: "Become a full stack developer with frontend, backend and database technologies."
    }

]


function App() {

    const [cart, setCart] = useState([])


    // Add course to cart
    function addToCart(course) {

        setCart(previousCart => {

            const existingCourse =
                previousCart.find(
                    item => item.id === course.id
                )


            if (existingCourse) {

                return previousCart.map(item =>

                    item.id === course.id

                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }

                        : item

                )

            }


            return [

                ...previousCart,

                {
                    ...course,
                    quantity: 1
                }

            ]

        })

    }


    // Increase quantity
    function increaseQuantity(id) {

        setCart(previousCart =>

            previousCart.map(item =>

                item.id === id

                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }

                    : item

            )

        )

    }


    // Decrease quantity
    function decreaseQuantity(id) {

        setCart(previousCart =>

            previousCart

                .map(item =>

                    item.id === id

                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }

                        : item

                )

                .filter(
                    item => item.quantity > 0
                )

        )

    }


    // Remove course
    function removeCourse(id) {

        setCart(previousCart =>

            previousCart.filter(
                item => item.id !== id
            )

        )

    }


    // Empty cart
    function clearCart() {

        setCart([])

    }


    // Total number of courses
    const cartCount = cart.reduce(

        (total, item) =>
            total + item.quantity,

        0

    )


    // Total price
    const cartTotal = cart.reduce(

        (total, item) =>
            total + item.price * item.quantity,

        0

    )


    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={
                        <UserLayout
                            cartCount={cartCount}
                        />
                    }
                >

                    {/* Home / Courses */}

                    <Route
                        index
                        element={
                            <ItemStore
                                courses={COURSES}
                                addToCart={addToCart}
                            />
                        }
                    />


                    {/* Cart */}

                    <Route
                        path="mycart"
                        element={

                            <CartPage

                                cart={cart}

                                total={cartTotal}

                                increaseQuantity={
                                    increaseQuantity
                                }

                                decreaseQuantity={
                                    decreaseQuantity
                                }

                                removeCourse={
                                    removeCourse
                                }

                                clearCart={
                                    clearCart
                                }

                            />

                        }
                    />


                    {/* Other pages */}

                    <Route
                        path="myorders"
                        element={
                            <SimplePage
                                title="My Orders"
                                message="Your purchased courses will appear here."
                            />
                        }
                    />


                    <Route
                        path="profile"
                        element={
                            <SimplePage
                                title="My Profile"
                                message="View and update your profile."
                            />
                        }
                    />


                    <Route
                        path="settings"
                        element={
                            <SimplePage
                                title="My Settings"
                                message="Manage your account settings."
                            />
                        }
                    />


                    <Route
                        path="logout"
                        element={
                            <SimplePage
                                title="Logged Out"
                                message="You have been logged out."
                            />
                        }
                    />


                    {/* Invalid URL */}

                    <Route
                        path="*"
                        element={
                            <SimplePage
                                title="404"
                                message="Page not found."
                            />
                        }
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    )

}


/* =========================
   CART PAGE
========================= */

function CartPage({

    cart,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeCourse,
    clearCart

}) {

    if (cart.length === 0) {

        return (

            <section className="page-section">

                <h1>My Cart</h1>

                <div className="empty-cart">

                    <div className="empty-icon">
                        🛒
                    </div>

                    <h2>
                        Your cart is empty
                    </h2>

                    <p>
                        Add some courses from the store.
                    </p>

                </div>

            </section>

        )

    }


    return (

        <section className="page-section">

            <div className="cart-heading">

                <h1>
                    My Cart
                </h1>

                <button
                    className="clear-btn"
                    onClick={clearCart}
                >
                    Clear Cart
                </button>

            </div>


            <div className="cart-list">

                {cart.map(course => (

                    <div
                        className="cart-item"
                        key={course.id}
                    >

                        <div className="cart-icon">

                            {course.icon}

                        </div>


                        <div className="cart-info">

                            <h3>
                                {course.title}
                            </h3>

                            <p>
                                {course.category}
                            </p>

                        </div>


                        <div className="quantity">

                            <button
                                onClick={() =>
                                    decreaseQuantity(
                                        course.id
                                    )
                                }
                            >
                                -
                            </button>


                            <span>
                                {course.quantity}
                            </span>


                            <button
                                onClick={() =>
                                    increaseQuantity(
                                        course.id
                                    )
                                }
                            >
                                +
                            </button>

                        </div>


                        <strong>

                            ₹
                            {
                                (
                                    course.price *
                                    course.quantity
                                ).toLocaleString('en-IN')
                            }

                        </strong>


                        <button
                            className="remove-btn"
                            onClick={() =>
                                removeCourse(
                                    course.id
                                )
                            }
                        >
                            Remove
                        </button>

                    </div>

                ))}

            </div>


            <div className="cart-total">

                <span>
                    Total
                </span>

                <strong>

                    ₹
                    {
                        total.toLocaleString(
                            'en-IN'
                        )
                    }

                </strong>

            </div>


            <button
                className="order-btn"
                onClick={() =>
                    alert(
                        "Order placed successfully!"
                    )
                }
            >
                Place Order
            </button>

        </section>

    )

}


/* =========================
   SIMPLE PAGE
========================= */

function SimplePage({
    title,
    message
}) {

    return (

        <section className="page-section simple-page">

            <h1>
                {title}
            </h1>

            <p>
                {message}
            </p>

        </section>

    )

}


export default App