import { requireAdmin } from "@/lib/auth-guard";
import { Metadata } from 'next';
import ProductForm from "@/components/admin/ProductForm";

export const metadata: Metadata = {
  title: 'Create Product',
};

export default async function page() {
  await requireAdmin();
  
  return (
    <>
      <h2 className='h2-bold'>Create Product</h2>
      <div className='my-8'>
        <ProductForm type='Create' />
      </div>
    </>
  );
} 