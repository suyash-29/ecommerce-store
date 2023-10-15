'use client'
import { ShoppingBag } from "lucide-react";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
   const [isMounted , setIsMounted]  = useState(false);

   useEffect(() => {
      setIsMounted(true);
   },[])

   const cart = useCart();
   const router  = useRouter();

  return ( 
    <div className="ml-auto flex items-center gap-x-4">
       <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-white px-4 py-2 hover:">
        <ShoppingBag 
        size={20}
        color="black"
        />
        <span className="ml-2 text-sm font-medium text-black">
          {cart.items.length}
        </span>
       </Button>
    </div>
   );
}
 
export default NavbarActions;