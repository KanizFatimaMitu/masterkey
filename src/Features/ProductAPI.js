import axios from "../../src/utils/axios";

export const getProducts = async () => {
    const response = await axios.get("/products?product_type=Today’s%20hot%20deals");

    return response.data;
};
