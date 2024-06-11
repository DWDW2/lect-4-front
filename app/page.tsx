'use client'
import { QueryClient, useQuery } from "react-query";
import { getAllProducts } from "./api/services/productsService";
import { Media } from "./components/Skeleton";
import { ProductsList } from "../components/products-list";
import { ButtonAdd } from "@/components/button-add";


export default function Home() {
  const { data,  isLoading } = useQuery(['posts'], getAllProducts)
  if (isLoading){
    return(<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mr-2 ml-2">
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
      <Media />
    </div>)
  }
  return (
    <div>
      <ProductsList data={data}/>
      <ButtonAdd />
    </div>    
  );
  }
