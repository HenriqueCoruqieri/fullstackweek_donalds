import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductHeader from "./components/product-header";
import ProductDetails from "./components/product-details";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;
  const product = await db.product.findUnique({
    where: { id: productId },
    include: {
      restaurant: {
        select: {
          name: true,
          avatarImageUrl: true,
          slug: true,
        },
      },
    },
  });

  /* Se não tiver um produto na URL retorna erro 404 */
  if (!product) {
    return notFound();
  }

  /*  Verifica se a URL do produto pertence ao restaurante */
  if (product.restaurant.slug.toLocaleUpperCase() != slug.toLocaleUpperCase()) {
    return notFound();
  }

  return (
    <>
      <div className="flex h-full flex-col">
        <ProductHeader product={product} />
        <ProductDetails product={product} />
      </div>
    </>
  );
};

export default ProductPage;
