import { Key } from "react";
import { Content } from "../interface/data";
import { atom } from "jotai";

const PostAtom = atom<Content[]>([]);
export const writePostAtom = atom(null, (get, set, update: Content) => {
  set(PostAtom, [...get(PostAtom), update]);
});
export const deletePostAtom = atom(null, (get, set, id: Key) => {
  set(
    PostAtom,
    get(PostAtom).filter((content) => content.id !== id)
  );
});
export const readSearchAtom = atom((get) => {
  const query = get(QueryAtom);
  return query.trim()
    ? get(PostAtom).filter(
        (post) => post.content.includes(query) || post.user.includes(query)
      )
    : get(PostAtom);
});

const QueryAtom = atom("");
export const writeQueryAtom = atom(null, (get, set, update: string) => {
  set(QueryAtom, update);
});
