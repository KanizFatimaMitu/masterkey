import React, { useEffect, useState } from 'react';
import Deal from './Deal';

const HotDeals = () => {
    const [deals, setDeals] = useState([])

    useEffect(() => {
        fetch('https://api.hiring.masterkey.tech/api/v1/products?product_type=Today%E2%80%99s%20hot%20deals')
            .then(res => res.json())
            .then(data =>setDeals(data))

    }, [])
    return (
        <div className='grid grid-cols-6'>
            <p>Hot deals for today</p>
            {
                deals?.map(deal =>
                    <Deal
                        key={deal.products.productData._id}
                        deal={deal}
                    ></Deal>)
            }
        </div>
    );
};

export default HotDeals;