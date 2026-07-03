"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  username: string;
  cash?: number;
};

export default function UserWidget() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => {
        if (!res.ok) throw new Error("not logged in");
        return res.json();
      })
      .then((data) => setUser(data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/");
    router.refresh();
  };

  if (loading) return null;

  if (!user) {
    return (
      <div className="flex justify-center items-center gap-3 py-4 flex-wrap">
        <Link href="/register">
          <img className="hover-zoom" src="/dangki.png" alt="Đăng Ký" width={150} />
        </Link>
        <Link href="/login">
          <img className="hover-zoom" src="/dangnhap.png" alt="Đăng Nhập" width={150} />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center gap-4 py-4 flex-wrap">
      <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
        {/* Avatar circle */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold text-base uppercase shadow-lg">
          {user.username.charAt(0)}
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white font-bold text-sm drop-shadow">{user.username}</span>
          {user.cash !== undefined && (
            <span className="text-amber-300 text-xs font-medium">
              💰 {user.cash.toLocaleString("vi-VN")} đ
            </span>
          )}
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="hover-zoom bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-xl border border-red-400/30 backdrop-blur-sm transition-all duration-200"
      >
        Đăng xuất
      </button>
    </div>
  );
}
