"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {pathname === href ? (
        <li className="h-full w-full max-w-md grid place-items-center border-b-2 border-blue-700">
          <Link href={href} className="fill-blue-700">
            {children}
          </Link>
        </li>
      ) : (
        <li className="h-full w-full max-w-md grid place-items-center">
          <Link href={href} className="fill-white">
            {children}
          </Link>
        </li>
      )}
    </>
  );
}
