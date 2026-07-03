"use client";

import { useState } from "react";
import { Calendar, Gift, BookOpen, Zap } from "lucide-react";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: "update" | "event" | "gift";
  isNew?: boolean;
}

const GameNewsSection = () => {
  const [activeTab, setActiveTab] = useState<"news" | "events" | "guide">(
    "news"
  );

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "[Tin tức] [UPDATE] MỞ ĐĂNG CẤP THẦN THIÊN SỨ: SON GOKU SSGSS...",
      date: "23.06",
      category: "update",
      isNew: true,
    },
    {
      id: 2,
      title: "[Tin tức] [UPDATE] MỞ ĐĂNG CẤP THẦN THIÊN SỨ: GOHAN BEAST",
      date: "23.06",
      category: "update",
    },
    {
      id: 3,
      title: "[Tin tức] [UPDATE] MỞ ĐĂNG CẤP THẦN THIÊN SỨ: SUPER MIRA VÀ ...",
      date: "30.05",
      category: "update",
    },
    {
      id: 4,
      title: "[Tin tức] Quà Tri Ân VIP Đại Lễ 2025",
      date: "29.04",
      category: "gift",
    },
    {
      id: 5,
      title: "[Tin tức] Quà Tri Ân VIP Tết Ất Tỵ",
      date: "09.01",
      category: "gift",
    },
    {
      id: 6,
      title: "[Tin tức] [UPDATE] MỞ ĐĂNG CẤP THẦN THIÊN SỨ: SON GOKU SSGSS...",
      date: "23.06",
      category: "update",
      isNew: true,
    },
    {
      id: 7,
      title: "[Tin tức] [UPDATE] MỞ ĐĂNG CẤP THẦN THIÊN SỨ: GOHAN BEAST",
      date: "23.06",
      category: "update",
    },
    {
      id: 8,
      title: "[Tin tức] [UPDATE] MỞ ĐĂNG CẤP THẦN THIÊN SỨ: SUPER MIRA VÀ ...",
      date: "30.05",
      category: "update",
    },
    {
      id: 9,
      title: "[Tin tức] Quà Tri Ân VIP Đại Lễ 2025",
      date: "29.04",
      category: "gift",
    },
    {
      id: 10,
      title: "[Tin tức] Quà Tri Ân VIP Tết Ất Tỵ",
      date: "09.01",
      category: "gift",
    },
  ];

  const eventItems: NewsItem[] = [
    {
      id: 6,
      title: "[Sự kiện] Lễ Hội Mùa Hè - Chiến Đấu Bất Tận",
      date: "15.07",
      category: "event",
      isNew: true,
    },
    {
      id: 7,
      title: "[Sự kiện] Giải Đấu Võ Thuật Thiên Hạ Đệ Nhất",
      date: "10.07",
      category: "event",
    },
    {
      id: 8,
      title: "[Sự kiện] Săn Boss Huyền Thoại - Frieza Hoàng Kim",
      date: "05.07",
      category: "event",
    },
  ];

  const guideItems: NewsItem[] = [
    {
      id: 9,
      title: "[Hướng dẫn] Cách Nâng Cấp Nhân Vật Hiệu Quả Nhất",
      date: "20.06",
      category: "update",
    },
    {
      id: 10,
      title: "[Hướng dẫn] Chiến Thuật PvP Cho Người Mới Bắt Đầu",
      date: "18.06",
      category: "update",
    },
    {
      id: 11,
      title: "[Hướng dẫn] Bí Quyết Thu Thập Dragon Ball",
      date: "15.06",
      category: "update",
    },
  ];

  const getCurrentItems = () => {
    switch (activeTab) {
      case "events":
        return eventItems;
      case "guide":
        return guideItems;
      default:
        return newsItems;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "update":
        return <Zap className="w-3 h-3 text-blue-500" />;
      case "event":
        return <Calendar className="w-3 h-3 text-purple-500" />;
      case "gift":
        return <Gift className="w-3 h-3 text-orange-500" />;
      default:
        return <BookOpen className="w-3 h-3 text-gray-500" />;
    }
  };

  return (
    <div className="flex flex-col  p-6 bg-orange-300 min-h-200 pt-10 lg:grid-cols-2 ">
      <div className="flex-1 lg:col-span-1 w-full ">
        <div className="border-4 border-orange-600 shadow-xl">
          <div className="p-0">
            {/* Tab Headers */}
            <div className="flex border-b-2 border-gray-200 bg-orange-600">
              <button
                onClick={() => setActiveTab("news")}
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-200 ${
                  activeTab === "news"
                    ? "text-orange-600 border-b-2 border-orange-600 bg-orange-50"
                    : "text-black hover:text-orange-500 hover:bg-gray-50"
                }`}
              >
                Tin tức
              </button>
              <button
                onClick={() => setActiveTab("events")}
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-200 ${
                  activeTab === "events"
                    ? "text-orange-600 border-b-2 border-orange-600 bg-orange-50"
                    : "text-black hover:text-orange-500 hover:bg-gray-50"
                }`}
              >
                Sự kiện
              </button>
              <button
                onClick={() => setActiveTab("guide")}
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-200 ${
                  activeTab === "guide"
                    ? "text-orange-600 border-b-2 border-orange-600 bg-orange-50"
                    : "text-black hover:text-orange-500 hover:bg-gray-50"
                }`}
              >
                Hướng dẫn
              </button>

              {/* Orange Icon */}
              {/* <div className="flex items-center pr-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">📰</span>
                </div>
              </div> */}
            </div>
            {/* News Content */}
            <Link href="/post/1">
              <div className="bg-white max-h-200 overflow-y-auto">
                {getCurrentItems().map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                      index !== getCurrentItems().length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-1 flex-1">
                      {getCategoryIcon(item.category)}
                      <div className="flex-1 ">
                        <p className="text-gray-800 text-xs leading-relaxed hover:text-orange-600 transition-colors">
                          {item.title}
                          {item.isNew && (
                            <img src="/new.gif" width={30} alt="" />
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-500 text-sm font-medium ml-4">
                      {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameNewsSection;
