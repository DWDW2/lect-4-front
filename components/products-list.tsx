import Link from "next/link";
import { Button } from "@/components/ui/button";
import Post from "@/components/ui/post";

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type Params = {
  data: Product[];
};

export function ProductsList({ data }: Params) {
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Discover Our Latest Products</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Browse through our curated selection of high-quality products.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {
            data.map((post) => (
              <Post 
                key={post.id} 
                title={post.title} 
                description={post.description} 
                price={post.price} 
                category={post.category} 
                image={post.image} 
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}
