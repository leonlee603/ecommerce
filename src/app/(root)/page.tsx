import ProductList from "@/components/shared/product/ProductList";
// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.action";

// export const metadata = {
//   title: "Home",
// };

export default async function page() {
  const latestProducts = await getLatestProducts()

  // console.log(data)
  // return data;
  return (
    <>
    <ProductList data={latestProducts} title="Newest Arrivals" limit={4}/>
    </>
  )
}