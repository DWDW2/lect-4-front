import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
};

export default function Post({ title, description, image, price, category }: Props) {
  return (
    <div className="grid gap-2.5 relative group shadow-2xl">
      <Link className="absolute inset-0 z-10" href="#">
        <span className="sr-only">View</span>
      </Link>
      <img
        alt={title}
        className="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
        height={300}
        src={image}
        width={400}
      />
      <div className="bg-white p-4">
        <h3 className="font-semibold text-lg md:text-xl">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{category}</p>
        <p>{description}</p>
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-base md:text-lg">${price}</h4>
          <Button size="sm">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
