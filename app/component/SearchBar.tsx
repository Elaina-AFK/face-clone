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
      placeholder="Search on Facebook"
      className="p-1 pl-3 text-black rounded-full w-56 h-10 text-sm"
    />
  );
}
