"use client";
import { Key } from "react";
import PostContentBox from "./PostContentBox";
import { deletePostAtom, readSearchAtom } from "../atoms/post";
import { useAtomValue, useSetAtom } from "jotai";

export default function PostContentBody() {
  const data = useAtomValue(readSearchAtom);
  const deletePost = useSetAtom(deletePostAtom);

  const onDelete = (id: Key) => {
    deletePost(id);
  };

  return (
    <div className="py-2">
      {data.map((content) => (
        <PostContentBox data={content} onDelete={onDelete} key={content.id} />
      ))}
    </div>
  );
}
