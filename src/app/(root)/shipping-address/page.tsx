import { auth } from '../../../../auth';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getMyCart } from '@/lib/actions/cart.actions';
import { getUserById } from '@/lib/actions/user.actions';
import { ShippingAddress } from '../../../../types';
import ShippingAddressForm from './ShippingAddressForm';
// import CheckoutSteps from '@/components/shared/checkout-steps';

export const metadata: Metadata = {
  title: 'Shipping Address',
};

export default async function page() {
  const cart = await getMyCart();

  if (!cart || cart.items.length === 0) redirect('/cart');

  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) throw new Error('No user ID');

  const user = await getUserById(userId);
  
  return (
    <>
    <ShippingAddressForm address={user.address as ShippingAddress} /></>
  )
}