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
    <div className="bg-cyan-800 flex flex-col gap-y-2 my-3 px-1 rounded-md">
      <div className="text-white flex justify-end">
        <button className="bg-slate-900 p-1 hover:bg-slate-800 rounded-sm">
          Edit
        </button>
        <button
          className="bg-red-900 p-1 hover:bg-red-800 rounded-sm"
          onClick={() => onDelete(data.id)}
        >
          Delete
        </button>
      </div>
      <p>{data.content}</p>
      <p className="text-right">created: {data.created.toDateString()}</p>
      <Link href={"#"} className="w-fit self-end">
        by: {data.user}
      </Link>
    </div>
  );
}
