import React from 'react';

const Product = ({product}) => {
    const { _id, product_name, product_price, product_discount, product_img } =
    product.products.productData;
    console.log(product)
    return (
        <div>
            <div className="card">
                <figure><img src={product_img} alt="product-img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product_name}
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{ product_price}</div>
                        <div className="badge badge-outline">{product_discount}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;