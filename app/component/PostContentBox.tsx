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
    <div className="my-3 flex flex-col gap-y-2 rounded-md bg-slate-800">
      <div className="flex justify-end text-white">
        <button className="rounded-md bg-slate-900 p-1 hover:bg-slate-700">
          Edit
        </button>
        <button
          className="rounded-md bg-red-900 p-1 hover:bg-red-700"
          onClick={() => onDelete(data.id)}
        >
          Delete
        </button>
      </div>
      <p className="px-1">{data.content}</p>
      <p className="px-1 text-right">created: {data.created.toDateString()}</p>
      <Link href={"#"} className="w-fit self-end px-1">
        by: {data.user}
      </Link>
    </div>
  );
}
