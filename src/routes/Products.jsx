import React from "react";
import { Link } from "react-router-dom";
import { useAppcontext } from "../hooks/useAppcontext";
import { BsStar } from "react-icons/bs";
import { useShoppingcartcontext } from "../hooks/useShoppingcartcontext";

const Products = () => {
  const { products } = useAppcontext();
  const { handleAddItem } = useShoppingcartcontext();

  const handleAddItems = (id) => {
    handleAddItem(id);
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <div className="col mb-5" key={product.id}>
              <div className="card h-100">
                <Link
                  to={`/products/${product.id}`}
                  className="text-decoration-none text-dark"
                >
                  <>
                    <img
                      className="card-img-top"
                      src={product.thumbnail}
                      alt={product.thumbnail}
                      height={200}
                    />
                    {product.price > 800 ? (
                      <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                      >
                        Sale
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{product.title}</h5>
                        {product.price > 800 ? (
                          <>
                            <span className="text-muted text-decoration-line-through">
                              ${product.price}
                            </span>
                            <span>
                              {" "}
                              $
                              {(
                                product.price -
                                (product.price * product.discountPercentage) /
                                  100
                              ).toFixed(0)}
                            </span>{" "}
                          </>
                        ) : (
                          <span> ${product.price}</span>
                        )}
                        {product.price > 1000 ? (
                          <div className="d-flex justify-content-center small text-warning mt-2">
                            <BsStar />
                            <BsStar className="mx-1" />
                            <BsStar />
                            <BsStar className="mx-1" />
                            <BsStar />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </>
                </Link>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent mt-auto">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handleAddItems(product.id)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
