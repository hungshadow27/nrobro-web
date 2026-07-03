import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="flex gap-2 items-center">
        <img
          className="w-[15px] h-[15px] object-cover"
          src="/18-1.png"
          alt="18+"
        />
        <span className="text-[12px]">
          Chơi quá 180 phút một ngày sẽ ảnh hưởng xấu đến sức khỏe.
        </span>
      </div>
      <section>
        <div className=" flex flex-col justify-between items-center w-full rounded-t-2xl bg-[url('/banner.jpg')] bg-cover bg-center">
          <NavBar />
          <img
            style={{ filter: "drop-shadow(3px 3px 2px white)" }}
            src="/LOGOdragon.png"
            alt=""
            width={300}
            className="py-12"
          />
          <div className="pb-10 flex justify-center items-center gap-10 flex-wrap">
            <Link
              target="_blank"
              href="https://www.mediafire.com/file/w6elrv28uwmxk74/TinhLinhRong-0.1.5v2.exe/file"
            >
              <img className="hover-zoom" src="/PC.png" alt="" width={200} />
            </Link>
            <Link
              target="_blank"
              href="https://www.mediafire.com/file/w6elrv28uwmxk74/TinhLinhRong-0.1.5v2.exe/file"
            >
              <img className="hover-zoom" src="/APK.png" alt="" width={200} />
            </Link>
            <Link
              target="_blank"
              href="https://www.mediafire.com/file/w6elrv28uwmxk74/TinhLinhRong-0.1.5v2.exe/file"
            >
              <img className="hover-zoom" src="/IOS.png" alt="" width={200} />
            </Link>
          </div>
        </div>
      </section>
      <section className="relative">
        <img
          className="absolute left-1/2 -top-10 z-10 -translate-x-1/2"
          src="/gioithieu.png"
          alt=""
          width={300}
        />
        <About />
      </section>
    </main>
  );
}
