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
    <p className="invisible absolute top-16 rounded-md bg-slate-600 px-2 py-1 opacity-75 peer-hover:visible">
      {title}
    </p>
  );
  return (
    <>
      {pathname === href ? (
        <li className="grid h-full w-full max-w-md place-items-center border-b-2 border-blue-700 ">
          <Link
            href={href}
            className="peer relative m-2 grid h-full w-full place-items-center fill-blue-600"
          >
            {children}
          </Link>
          {HoverText}
        </li>
      ) : (
        <li className="grid h-full w-full max-w-md place-items-center">
          <Link
            href={href}
            className="peer relative grid h-4/5 w-5/6 place-items-center rounded-lg fill-white hover:bg-slate-700"
          >
            {children}
          </Link>
          {HoverText}
        </li>
      )}
    </>
  );
}
