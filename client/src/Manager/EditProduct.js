import React from "react";
import { Link } from "react-router-dom";

function EditProduct(props) {
  const { productId } = props;
  return (
    <>
      <div>
        <form>
          <div>
            <Link to="/products">Go to products</Link>
            <h2>Update Product</h2>
          </div>

          <div>
            <button type="submit">Publish now</button>
          </div>

          <div>
            <div>
              <div>
                <div>
                  <div>
                    <label htmlFor="product_title">Product title</label>
                    <input
                      type="text"
                      placeholder="Type here..."
                      id="product_title"
                      required
                      value={productId.title}
                    />
                  </div>

                  <div>
                    <label htmlFor="product_price">Price</label>
                    <input
                      type="number"
                      placeholder="Type here..."
                      id="product_price"
                      required
                      value={productId.price}
                    />
                  </div>

                  <div>
                    <label>Description</label>
                    <textarea placeholder="Type here..." rows="7" required />
                  </div>

                  <div>
                    <label>Images</label>
                    <input type="text" placeholder="Enter image url" />
                    <input type="file" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditProduct;
