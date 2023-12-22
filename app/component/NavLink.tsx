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
      className="flex justify-start items-center w-full h-16 rounded-lg hover:bg-slate-700"
    >
      <div className="fill-slate-400 aspect-square h-12 p-2 mx-2">
        {children}
      </div>
      <h2>{title}</h2>
    </Link>
  );
}
