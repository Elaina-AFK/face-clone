"use client";
import { Key, createContext, useEffect, useState } from "react";
import { Content, ContentContext } from "./interface/data";

export const PostContext = createContext<ContentContext>({
  data: [],
  addContent: () => {},
  removeContent: () => {},
  onSearch: () => {},
});

export default function PostContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contents, setContent] = useState<Content[]>([]);
  const [search, setSearch] = useState("");
  const [searchContent, setSearchContent] = useState<Content[]>([]);

  useEffect(() => {
    setSearchContent(
      contents.filter((content) => {
        return (
          content.content.includes(search) || content.user.includes(search)
        );
      })
    );
  }, [contents, search]);

  const addContent = (data: Content) => {
    setContent([...contents, data]);
  };

  const removeContent = (id: Key) => {
    setContent(contents.filter((content) => content.id !== id));
  };

  const onSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <PostContext.Provider
      value={{ data: searchContent, onSearch, addContent, removeContent }}
    >
      {children}
    </PostContext.Provider>
  );
}
