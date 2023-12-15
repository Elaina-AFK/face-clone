"use client";
import { Key, useContext } from "react";
import { PostContext } from "../content";
import PostContentBox from "./PostContentBox";

export default function PostContentBody() {
  const { data, removeContent } = useContext(PostContext);

  const onDelete = (id: Key) => {
    removeContent(id);
  };

  return (
    <div className="py-2">
      {data.map((content) => (
        <PostContentBox data={content} onDelete={onDelete} key={content.id} />
      ))}
    </div>
  );
}
