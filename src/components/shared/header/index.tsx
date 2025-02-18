import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "./ModeToggle";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority
            />
            <div className="span ml-3 hidden text-2xl font-bold lg:block">
              {APP_NAME}
            </div>
          </Link>
        </div>
        <div className="space-x-2">
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart">
            <ShoppingCart /> Cart</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in">
            <UserIcon /> Sign in</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
