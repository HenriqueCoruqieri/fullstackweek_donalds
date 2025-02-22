import Image from "next/image";
import { CartContext, CartProduct } from "../../context/cart";
import { formatCurrency } from "@/helpers/format-currency";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartProductItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartProductItemProps) => {
  const { decreaseProductQuantity } = useContext(CartContext);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Lado esquerdo do carrinho */}
        <div className="relative h-20 w-20 bg-gray-100 rounded-xl">
          <Image src={product.imageUrl} alt={product.name} fill></Image>
        </div>

        <div className="space-y-1">
          <p className="max-w-[90%] text-xs truncate text-ellipsis">
            {product.name}
          </p>
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>

          {/* Botões para aumentar ou diminuir a quantidade */}
          <div className="flex items-center gap-1 text-center">
            <Button
              className="h-7 w-7 rounded-lg"
              variant="outline"
              onClick={() => decreaseProductQuantity(product.id)}
            >
              <ChevronLeftIcon />
            </Button>

            <p className="text-xs w-7">{product.quantity}</p>

            <Button className="h-7 w-7 rounded-lg" variant="destructive">
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>

      {/* Botão para deletar item do carrinho*/}
      <Button className="h-7 w-7" variant="outline">
        <TrashIcon></TrashIcon>
      </Button>
    </div>
  );
};

export default CartProductItem;
