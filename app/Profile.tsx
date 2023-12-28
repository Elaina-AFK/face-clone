// "use client";

// import React, { createContext } from "react";
// import { ProfileContext } from "./interface/data";

// const profile = {
//   uid: "acb74c05bec329e3a1e6a7a2",
//   name: "Pam Weber",
//   url: "https://avatars.githubusercontent.com/u/74282530",
// };

// export const ProfContext = createContext<ProfileContext>({
//   data: {
//     uid: "",
//     url: "",
//     name: "",
//   },
// });

// export default function ProfileContextProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {

//   return (
//     <ProfContext.Provider value={{ data: profile }}>
//       {children}
//     </ProfContext.Provider>
//   );
// }
