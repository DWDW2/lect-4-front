import axiosInstance from "../clientApi";

type Product = {
    id:number,
    title:string,
    price:string,
    category:string,
    description:string,
    image:string
}

type Products = Product[]

const getAllProducts = async (): Promise<Products> => {
    try {
        const response = await axiosInstance.get("/products");
        return response.data;
    } catch (error) {
        console.log(error);
        return []
    }
}

export {
    getAllProducts
}
