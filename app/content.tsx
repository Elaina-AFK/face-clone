"use client";
import { Key, createContext, useState } from "react";
import { Content, ContentContext } from "./interface/data";

export const PostContext = createContext<ContentContext>({
  data: [],
  addContent: () => {},
  removeContent: (id: Key) => {},
});

export default function PostContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contents, setContent] = useState<Content[]>([]);

  const addContent = (data: Content) => {
    setContent([...contents, data]);
  };

  const removeContent = (id: Key) => {
    setContent(contents.filter((content) => content.id !== id));
  };

  return (
    <PostContext.Provider value={{ data: contents, addContent, removeContent }}>
      {children}
    </PostContext.Provider>
  );
}
