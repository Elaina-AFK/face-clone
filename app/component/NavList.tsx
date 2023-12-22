"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const HoverText = (
    <p className="invisible absolute top-16 bg-slate-600 py-1 px-2 rounded-md opacity-75 peer-hover:visible">
      {title}
    </p>
  );
  return (
    <>
      {pathname === href ? (
        <li className="h-full w-full grid place-items-center max-w-md border-b-2 border-blue-700 ">
          <Link
            href={href}
            className="fill-blue-600 w-full h-full grid place-items-center relative peer m-2"
          >
            {children}
          </Link>
          {HoverText}
        </li>
      ) : (
        <li className="h-full w-full grid place-items-center max-w-md">
          <Link
            href={href}
            className="fill-white grid place-items-center relative peer h-4/5 w-5/6 hover:bg-slate-700 rounded-lg"
          >
            {children}
          </Link>
          {HoverText}
        </li>
      )}
    </>
  );
}
