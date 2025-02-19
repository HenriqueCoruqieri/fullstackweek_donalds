import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-x1">
      <h1 className="text-red-500">Hello World</h1>
      <Button>FSW 7.0</Button>
      <Input placeholder="Bora fechar esse projeto"></Input>
    </div>
  );
};

export default HomePage;
