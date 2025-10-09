import { Book } from "@/components";
import Button from "@/components/Button";
import App from "@/components/Chart";
import Input from "@/components/Input";

export default function Home(){
  return (
    <div className="block">
        <div className="text-3xl font-bold text-center p-4 bg-gray-800 text-white">
          Zerodha Order Book 
        </div>
        <div className="flex justify-between pt-10">
        <div className="p-2">
          <App/>
        </div>
        <div>
          <Book />
        </div>
        <div className="flex flex-col gap-4 bg-slate-600 p-4 rounded-lg h-fit">
          <h1 className="text-lg font-semibold">Place Order</h1>
          <div className="flex flex-col gap-4">
          <Input placeholder="In Rupees" label="Amount :" />
          <Input placeholder="Share" label="Quantity :" />
        </div>
        <div>
          <Button>Submit</Button>
        </div>
        </div>
        </div>
    </div>
  )
}