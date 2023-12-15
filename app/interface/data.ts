import { Key } from "react";

export interface Content {
  id: Key;
  content: string;
  created: Date;
  user: string;
}

export interface ContentContext {
  data: Content[];
  addContent: (data: Content) => void;
  removeContent: (id: Key) => void;
  onSearch: (query: string) => void;
}
