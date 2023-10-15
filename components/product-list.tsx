import { Product } from "@/types";
import NoResult from "./ui/no-result";
import ProductCart from "./ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items
}) => {
  return ( 
    <div className="space-y-4 ">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResult />}
      <div 
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {items.map((item) => (
          <div key={item.id}>
            <ProductCart key={item.id} data={item} />
          </div>
        ))},
      </div>

    </div>
   );
}
 
export default ProductList;