import ProductList from "@/components/shared/product/ProductList";
import sampleData from "@/db/sample-data";


// export const metadata = {
//   title: "Home",
// };

export default function page() {
  // console.log(sampleData)
  return (
    <>
    <ProductList data={sampleData.products} title="Newest Arrivals" limit={4}/>
    </>
  )
}