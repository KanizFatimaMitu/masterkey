import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Features/ProductSlice.";
import Loading from "../ui/Loading";
import Product from "./Product";

export default function Products() {
    const dispatch = useDispatch();
    const { products, isLoading, isError, error } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // decide what to render
    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && products?.length === 0) {
        content = <div className="col-span-12">No products found!</div>;
    }

    if (!isError && !isLoading && products?.length > 0) {
        content = products.map((product) => (
            <Product key={product.productData._id} product={product} />
        ));
    }

    return (
        <div className="hero min-h-[370px] ">
            <div className="hero-content flex-col lg:flex-row">
            <h1 className="text-5xl font-bold w-64">we picked some <span className="font-bold text-warning">cool things</span> for you!</h1>
                <div>
                    <p className="font-bold">Hot deals for you</p>
                    {content}
                   
                </div>
            </div>
        </div>
    );
}
