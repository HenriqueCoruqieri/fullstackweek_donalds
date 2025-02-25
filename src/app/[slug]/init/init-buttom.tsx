"use client";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";

//Client Component

interface InitProps {}
const InitButtom = ({}: InitProps) => {
  const { slug } = useParams<{ slug: string }>();
  const clickToLogin = useRouter();
  const [isPending, startTransition] = useState(false);

  const handleClick = async () => {
    startTransition(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    startTransition(false);
    clickToLogin.push(`http://localhost:3000/fsw-donalds`);
  };

  return (
    /* Botão */
    <div className="p-5">
      <div className="grid items-center justify-centerd">
        <div className="flex flex-col w-[200px] p-5 mt-10 space-y-3">
          <Button
            variant="destructive"
            className="rounded-full"
            onClick={() => handleClick()}
            disabled={isPending}
          >
            {isPending ? <Loader2Icon className="animate-spin" /> : "Iniciar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InitButtom;
