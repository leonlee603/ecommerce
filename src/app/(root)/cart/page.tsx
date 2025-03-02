import CartTable from "./CartTable"
import { getMyCart } from "@/lib/actions/cart.actions"

export const metadata = {
  title: "Shipping Cart"
}

export default async function page() {
  const cart = await getMyCart();

  return (
    <>
    <CartTable cart={cart} />
    </>
  )
}