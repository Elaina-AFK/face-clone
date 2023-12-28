"use client";

import Image from "next/image";
import NavLink from "./NavLink";
import { useAtomValue } from "jotai";
import { ReadUserAtom } from "../atoms/user";

export default function ProfileLink() {
  const data = useAtomValue(ReadUserAtom);
  const { url, name } = data;

  return (
    <NavLink href="/profile" title={name}>
      <Image
        src={url}
        alt={name}
        width={42}
        height={42}
        className="rounded-full"
      />
    </NavLink>
  );
}
