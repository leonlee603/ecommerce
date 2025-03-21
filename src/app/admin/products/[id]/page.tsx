import { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth-guard";
import ProductForm from "@/components/admin/ProductForm";
import { getProductById } from "@/lib/actions/product.actions";

export const metadata: Metadata = {
  title: "Update Product",
};

export default async function page(props: {
  params: Promise<{
    id: string;
  }>;
}) {
  await requireAdmin();

  const { id } = await props.params;
  const product = await getProductById(id);

  if (!product) return notFound();

  return (
    <div className='mx-auto max-w-5xl space-y-8'>
      <h1 className='h2-bold'>Update Product</h1>

      <ProductForm type='Update' product={product} productId={product.id} />
    </div>
  );
}
