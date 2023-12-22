"use client";

import Image from "next/image";
import NavLink from "./NavLink";
import { ProfContext } from "../Profile";
import { useContext } from "react";

export default function ProfileLink() {
  const { data } = useContext(ProfContext);
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
