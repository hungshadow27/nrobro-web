import Link from "next/link";
import { Facebook, MessageCircle, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" rounded-b-2xl bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo và mô tả */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-300">
              Rồng Thần Đại Chiến
            </h3>
            <p className="text-purple-100 text-sm leading-relaxed">
              Trải nghiệm thế giới Dragon Ball đầy kịch tính với đồ họa tuyệt
              đẹp và gameplay hấp dẫn. Tham gia ngay để trở thành chiến binh
              mạnh nhất!
            </p>
          </div>
          {/* Mạng xã hội */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300">
              Kết Nối Với Chúng Tôi
            </h4>
            <div className="flex flex-col space-y-3">
              <Link
                href="#"
                className="flex items-center space-x-3 text-purple-100 hover:text-yellow-300 transition-colors"
              >
                <Facebook size={20} />
                <span className="text-sm">Fanpage Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-3 text-purple-100 hover:text-yellow-300 transition-colors"
              >
                <MessageCircle size={20} />
                <span className="text-sm">Zalo Official</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-3 text-purple-100 hover:text-yellow-300 transition-colors"
              >
                <Users size={20} />
                <span className="text-sm">Cộng Đồng Game</span>
              </Link>
            </div>
          </div>
          <img width={150} src="/undo18.png" alt="" />
        </div>
        <div className="border-t border-purple-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-purple-200 text-sm">
              © 2025 Rồng Thần Đại Chiến. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-purple-200 hover:text-yellow-300 transition-colors"
              >
                Chính Sách Bảo Mật
              </Link>
              <Link
                href="/terms"
                className="text-purple-200 hover:text-yellow-300 transition-colors"
              >
                Điều Khoản Sử Dụng
              </Link>
              <Link
                href="/contact"
                className="text-purple-200 hover:text-yellow-300 transition-colors"
              >
                Liên Hệ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
