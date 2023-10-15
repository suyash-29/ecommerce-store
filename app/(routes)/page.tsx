import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const Homepage = async () => {
  const products = await getProducts({ isFeatured: true})
  const billboard = await getBillboard("e354883e-75be-4412-9b00-e4fa2c580aa3")
  return(
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products}/>

      </div>
    </Container>
  );
} 

export default Homepage;