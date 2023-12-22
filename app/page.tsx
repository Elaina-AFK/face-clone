import LeftAside from "./component/LeftAside";
import PostBar from "./component/PostBar";
import PostContentBody from "./component/PostContentBody";

export default function Home() {
  return (
    <div className="grid grid-cols-12 bg-slate-900 mt-14">
      <main className="col-start-4 col-end-10 h-full min-h-screen p-2 max-lg:col-start-1 max-md:col-end-13">
        <PostBar />
        <PostContentBody />
      </main>
      <aside className="col-start-10 col-end-13 h-full min-h-screen max-md:hidden"></aside>
    </div>
  );
}
