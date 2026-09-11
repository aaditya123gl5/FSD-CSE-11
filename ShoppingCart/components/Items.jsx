import React from 'react'

const ItemStore = ({ courses, addToCart }) => {

    return (
        <section className="store-section">

            <div className="store-header">

                <h1>Available Courses</h1>

                <p>
                    Learn industry-ready skills
                    with our online courses.
                </p>

            </div>

            <div className="product-grid">

                {courses.map((course) => (

                    <div
                        className="product-card"
                        key={course.id}
                    >

                        <div className="course-icon">
                            {course.icon}
                        </div>

                        <div className="product-body">

                            <span className="category">
                                {course.category}
                            </span>

                            <h2>
                                {course.title}
                            </h2>

                            <p>
                                {course.description}
                            </p>

                            <div className="course-details">

                                <span>
                                    ⏱ {course.duration}
                                </span>

                                <span>
                                    📊 {course.level}
                                </span>

                            </div>

                            <div className="product-bottom">

                                <strong>
                                    ₹{course.price.toLocaleString('en-IN')}
                                </strong>

                                <button
                                    onClick={() => addToCart(course)}
                                >
                                    Add to Cart
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    )
}

export default ItemStore