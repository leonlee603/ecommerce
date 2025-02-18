import Link from "next/link";
import Image from "next/image";

import Menu from "./Menu";
import { APP_NAME } from "@/lib/constants";


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
        <Menu />
      </div>
    </header>
  );
}
