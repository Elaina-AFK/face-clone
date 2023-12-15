"use client";

import { faker } from "@faker-js/faker";
import { useContext } from "react";
import { PostContext } from "../content";

export default function PostBar() {
  const { addContent } = useContext(PostContext);

  const handleClick = () => {
    const created = new Date();
    const id = Number(new Date()).toString(16);
    const content = faker.word.words(15);
    const user = faker.internet.userName();
    addContent({ created, content, user, id });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-emerald-700 p-2 rounded-md w-full hover:bg-emerald-500"
    >
      Generate Post
    </button>
  );
}
