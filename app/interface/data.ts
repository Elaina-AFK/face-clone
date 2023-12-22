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

export interface Profile {
  uid: Key;
  name: string;
  url: string;
}

export interface ProfileContext {
  data: Profile;
}
