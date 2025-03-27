import ProductCarousel from "@/components/shared/product/ProductCarousel";
import ProductList from "@/components/shared/product/ProductList";
import ViewAllProductsButton from "@/components/ViewAllProductsButton";
import {
  getFeaturedProducts,
  getLatestProducts,
} from "@/lib/actions/product.actions";

// export const metadata = {
//   title: "Home",
// };

export default async function Page() {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  // console.log(latestProducts)
  // return data;
  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
      <ViewAllProductsButton />
    </>
  );
}
