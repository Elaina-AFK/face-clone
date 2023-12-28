"use client";

import { ChangeEvent } from "react";
import { useSetAtom } from "jotai";
import { writeQueryAtom } from "../atoms/post";

export default function SearchBar() {
  const onSearch = useSetAtom(writeQueryAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Search on Face-clone"
      className="h-9 w-56 rounded-full p-1 pl-3 text-sm text-black"
    />
  );
}
