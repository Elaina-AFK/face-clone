"use client";

import { ChangeEvent, useContext } from "react";
import { PostContext } from "../content";

export default function SearchBar() {
  const { onSearch } = useContext(PostContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      className="p-1 text-black rounded-lg w-full max-w-lg"
    />
  );
}
