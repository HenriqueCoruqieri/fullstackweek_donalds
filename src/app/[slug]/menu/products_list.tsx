import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
  products: Product[];
}

const ProductsList = ({ products }: ProductsProps) => {
  return (
    <div className="space-y-3 px-5">
      {products.map((product) => (
        <Link
          key={product.id}
          href=""
          className="flex items-center justify-between gap-10 border-b py-3"
        >
          {/*Lado esquerdo da lista de produtos*/}
          <div>
            <h3 className="text-sm font-medium">{product.name}</h3>

            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>

            <p className="pt-3 text-sm font-semibold">
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
          </div>

          {/*Lado direito da lista de produtos*/}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
