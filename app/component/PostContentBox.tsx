import Link from "next/link";
import { Content } from "../interface/data";
import { Key } from "react";

export default function PostContentBox({
  data,
  onDelete,
}: {
  data: Content;
  onDelete: (id: Key) => void;
}) {
  return (
    <div className="bg-slate-800 flex flex-col gap-y-2 my-3 px-1">
      <div>
        <button className="" onClick={() => onDelete(data.id)}>
          Delete
        </button>
        <button className="">Edit</button>
      </div>
      <p>{data.content}</p>
      <p className="text-right">created: {data.created.toDateString()}</p>
      <Link href={"#"} className="w-fit self-end">
        by: {data.user}
      </Link>
    </div>
  );
}
