import React from 'react';

const Deal = ({deal}) => {
    const { product_name, product_price, product_discount, product_img } =
    deal.products.productData;
    return (
        <div>
            <div className="card">
                <figure><img src={product_img} alt=''/></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product_name}
                        <div className="badge badge-secondary">NEW</div>
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

export default Deal;