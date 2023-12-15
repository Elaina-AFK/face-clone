import Header from "./component/Header";
import PostBar from "./component/PostBar";
import PostContentBody from "./component/PostContentBody";

export default function Home() {
  return (
    <div className="grid grid-cols-7">
      <aside className="col-start-1 col-end-3 h-full min-h-screen bg-slate-600"></aside>
      <main className="col-start-3 col-end-6 h-full min-h-screen bg-slate-700">
        <PostBar />
        <PostContentBody />
      </main>
      <aside className="col-start-6 col-end-8 h-full min-h-screen bg-slate-600"></aside>
    </div>
  );
}
