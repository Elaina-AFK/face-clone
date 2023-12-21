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
    <div className="bg-slate-800 flex flex-col gap-y-2 my-3 rounded-md">
      <div className="text-white flex justify-end">
        <button className="bg-slate-900 p-1 hover:bg-slate-700 rounded-md">
          Edit
        </button>
        <button
          className="bg-red-900 p-1 hover:bg-red-700 rounded-md"
          onClick={() => onDelete(data.id)}
        >
          Delete
        </button>
      </div>
      <p className="px-1">{data.content}</p>
      <p className="text-right px-1">created: {data.created.toDateString()}</p>
      <Link href={"#"} className="w-fit self-end px-1">
        by: {data.user}
      </Link>
    </div>
  );
}
