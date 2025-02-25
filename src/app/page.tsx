import { db } from "@/lib/prisma";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import InitButtom from "./[slug]/init/init-buttom";

interface HomePageProps {
  params: Promise<{ slug: string }>;
}

const HomePage = async ({ params }: HomePageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findFirst({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="relative h-screen items-center justify-center px-4 pt-10">
      {/*Logo do restaurante*/}
      <div className="flex flex-col items-center gap-2 pt-44">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        {/*Nome do restaurante*/}
        <h2 className="font-semibold">{restaurant?.name}</h2>
        <div className="relative items-center justify-center gap-2 pt-10">
          {/*Texto*/}
          <p className="opacity-55 text-center mt-3">
            Pelo aplicativo você poderá realizar seus pedidos para delivery ou
            retirada de um jeito rápido e prático, e podendo concorrer a
            sorteios e brindes especiais.
          </p>
        </div>
        {/*Botão Iniciar*/}
        <InitButtom />
      </div>
    </div>
  );
};

export default HomePage;
