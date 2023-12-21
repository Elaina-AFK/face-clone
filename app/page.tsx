import Header from "./component/Header";
import PostBar from "./component/PostBar";
import PostContentBody from "./component/PostContentBody";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <aside className="col-start-1 col-end-4 h-full min-h-screen bg-slate-600 max-lg:hidden"></aside>
      <main className="col-start-4 col-end-10 h-full min-h-screen bg-slate-600 px-2 max-lg:col-start-1 max-md:col-end-13">
        <PostBar />
        <PostContentBody />
      </main>
      <aside className="col-start-10 col-end-13 h-full min-h-screen bg-slate-600 max-md:hidden"></aside>
    </div>
  );
}
