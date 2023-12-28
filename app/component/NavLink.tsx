import Link from "next/link";

export default function NavLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex h-16 w-full items-center justify-start rounded-lg hover:bg-slate-700"
    >
      <div className="mx-2 aspect-square h-12 fill-slate-400 p-2">
        {children}
      </div>
      <h2>{title}</h2>
    </Link>
  );
}
