"use client";
import Navbar from "@/components/NavBar";
import Recommend from "@/components/Recommend";

export default function DienDanPage() {
  return (
    <>
      <div className="">
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
            <Navbar />
            <img
              style={{ filter: "drop-shadow(3px 3px 2px white)" }}
              src="/LOGOdragon.png"
              alt=""
              width={300}
              className="py-12"
            />
          </div>
        </section>
        <section className="relative">
          <img
            className="absolute left-1/2 -top-10 z-10 -translate-x-1/2"
            src="/tintucdiendan.png"
            alt=""
            width={300}
          />
          <Recommend />
        </section>
      </div>
    </>
  );
}
