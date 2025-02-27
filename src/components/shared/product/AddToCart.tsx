"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus, Minus, Loader } from "lucide-react";
import { toast } from "sonner";
import { CartItem } from "../../../../types";
import { addItemToCart } from "@/lib/actions/cart.actions";

export default function AddToCart({ item }: { item: CartItem }) {
  const router = useRouter();

  async function handleAddToCart() {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error("", {
        // variant: 'destructive',
        description: res.message,
      });
      return;
    }

    // Handle success add to cart
    toast("", {
      description: res.message,
      action: {
        label: "Go To Cart",
        onClick: () => router.push("/cart"),
      },
    });
  }

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus />Add To Cart
    </Button>
  );
}
