"use client";
import { useRef, useState } from "react";
const screenshots = [
  "/5.png",
  "/4.png",
  "/6.png",
  "/7.png",
  "/8.png",
  "/9.png",
  "/10.png",
];

export default function SimpleCarousel() {
  const [index, setIndex] = useState(0);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const prev = () => {
    setIndex((i) => Math.max(0, i - 1));
  };
  const next = () => {
    setIndex((i) => Math.min(screenshots.length - 1, i + 1));
  };

  // update transform when index changes
  const translateX = `-${index * 100}%`;

  return (
    <div className="bg-orange-300 w-full mx-auto border-t-4 border-orange-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-10 pb-0">
        {/* Left: carousel */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full relative mb-6 overflow-hidden rounded border-4 border-orange-600">
            <div
              ref={(el) => {
                innerRef.current = el;
              }}
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(${translateX})` }}
            >
              {screenshots.map((src, i) => (
                <div key={i} className="flex-shrink-0 w-full">
                  <img
                    src={src}
                    alt="Game Screenshot"
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Controls */}
            <button
              aria-label="Prev"
              onClick={prev}
              disabled={index === 0}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none disabled:opacity-50 cursor-pointer"
            >
              <img src="/1.png" alt="Prev" className="w-10 h-10" />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              disabled={index === screenshots.length - 1}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none disabled:opacity-50 cursor-pointer"
            >
              <img src="/2.png" alt="Next" className="w-10 h-10" />
            </button>
          </div>
          <p className="text-black-100 leading-relaxed text-base">
            <span className="font-bold text-orange-600 ">
              Rồng Thần Đại Chiến
            </span>{" "}
            là Trò Chơi Trực Tuyến với cốt truyện xoay quanh bộ truyện tranh 7
            viên Ngọc Rồng. Người chơi sẽ hóa thân thành một trong những anh
            hùng của 3 hành tinh: Trái Đất, Xayda, Namếc. Cùng luyện tập, tăng
            cường sức mạnh và kỹ năng. Đoàn kết cùng chiến đấu chống lại các thế
            lực hung ác cùng nhau tranh tài. Đặc điểm nổi bật:
          </p>
        </div>

        {/* Right: feature cards */}
        <div className="w-full">
          <div className="grid grid-cols-2 gap-2">
            <img src="/Rectangle 8.png" alt="Goku" />
            <img src="/Rectangle 13.png" alt="Vegeta" />
            <img src="/Rectangle 14.png" alt="Gohan" />
            <img src="/Rectangle 15.png" alt="Calick" />
          </div>
        </div>

        {/* Description: spans across both columns */}
        <div className="lg:col-span-2 w-full">
          <p className="text-black-100 leading-relaxed text-base">
            - Thể loại hành động, nhập vai. Trực tiếp điều khiển nhân vật hành
            động. Dễ chơi, dễ điều khiển nhân vật. Đồ họa sắc nét. Có phiên bản
            đồ họa cao cho điện thoại mạnh. <br />- Cốt truyện bám sát nguyên
            tác. Người chơi sẽ gặp tất cả nhân vật từ Bunma, Quy lão kame,
            Jacky-chun, Tàu Pảy Pảy... cho đến Fide, Pic, Poc, Xên, Broly, đội
            Bojack. - Đặc điểm nổi bật nhất: Tham gia đánh doanh trại độc nhãn.
            Tham gia đại hội võ thuật. Tham gia săn lùng ngọc rồng để mang lại
            điều ước cho bản thân. - Tương thích tất cả các dòng máy trên thị
            trường hiện nay: Máy tính PC, Điện thoại di động Nokia Java,
            Android, iPhone, Windows Phone, và máy tính bảng Android, iPad.
          </p>
        </div>
      </div>
      <div className="flex flex-col pb-5">
        <div className="flex flex-col ">
          <p className="text-orange-600 italic font-bold text-center">THƯỜNG</p>
          <div className="flex mx-auto gap-3">
            <img src="/gif_gif_Saiyain.gif" alt="" />
            <img src="/gif_maphongba.gif" alt="" />
            <img src="/gif_supber_kame.gif" alt="" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-orange-600 italic font-bold text-center">
            SIÊU CẤP
          </span>
          <div className="flex mx-auto gap-3">
            <img src="/gif_gif_Saiyain_VIP.gif" alt="" />
            <img src="/gif_maphongba_VIP.gif" alt="" />
            <img src="/gif_supber_kame_VIP.gif" alt="" />
          </div>
        </div>
      </div>
      <div className="p-10 border-t-4 border-orange-500">
        <h3 className="font-bold text-xl text-orange-600 ">
          Hướng Dẫn Tân Thủ
        </h3>
        <div>
          <h4 className="font-bold py-2">1. Đăng ký tài khoản</h4>
          <p>
            Ngọc Rồng Online sử dụng Tài Khoản riêng, không chung với bất kỳ Trò
            Chơi nào khác. Bạn có thể đăng ký tài khoản miễn phí ngay trong
            game, hoặc trên trang Diễn Đàn. Khi đăng ký, bạn nên sử dụng đúng số
            điện thoại hoặc email thật của mình. Nếu sử dụng thông tin sai,
            người có số điện thoại hoặc email thật sẽ có thể lấy mật khẩu của
            bạn. Số điện thoại và email của bạn sẽ không hiện ra cho người khác
            thấy. Admin không bao giờ hỏi mật khẩu của bạn.
          </p>
        </div>
        <div>
          <h4 className="font-bold py-2">2. Hướng dẫn điều khiển</h4>
          <p>
            Đối với máy bàn phím: Dùng phím mũi tên, phím số, để điều khiển nhân
            vật. Phím chọn giữa để tương tác. Đối với máy cảm ứng: Dùng tay chạm
            vào màn hình cảm ứng để di chuyển. Chạm nhanh 2 lần vào 1 đối tượng
            để tương tác. Đối với PC: Dùng chuột, click chuột phải để di chuyển,
            click chuột trái để chọn, click đôi vào đối tượng để tương tác.
          </p>
        </div>
        <div>
          <h4 className="font-bold py-2">3. Một số thông tin căn bản</h4>
          <p>
            - Đậu thần dùng để tăng KI và HP ngay lập tức. <br /> - Bạn chỉ mang
            theo người được 10 hạt đậu. Nếu muốn mang nhiều hơn, hãy xin từ bạn
            bè trong Bang. <br />- Tất cả các sách kỹ năng đều có thể học miễn
            phí tại Quy Lão Kame, khi bạn có đủ điểm tiềm năng. - Bạn không thể
            bay, dùng kỹ năng, nếu hết KI. <br />- Tấn công quái vật cùng bạn bè
            trong Bang sẽ mang lại nhiều điểm tiềm năng hơn đánh một mình.
            <br />- Tập luyện với bạn bè tại khu vực thích hợp sẽ mang lại nhiều
            điểm tiềm năng hơn đánh quái vật. <br />- Khi được nâng cấp, đậu
            thần sẽ phục hồi nhiều HP và KI hơn. <br />- Vào trò chơi đều đặn
            mỗi ngày để nhận được Ngọc miễn phí. <br />- Đùi gà sẽ phục hồi 100%
            HP, KI. Cà chua phục hồi 100% KI. Cà rốt phục hồi 100% HP. <br />-
            Cây đậu thần kết một hạt sau một thời gian, cho dù bạn đang offline.{" "}
            <br />- Sau 3 ngày không tham gia trò chơi, bạn sẽ bị giảm sức mạnh
            do lười luyện tập. <br />- Bạn sẽ giảm thể lực khi đánh quái, nhưng
            sẽ tăng lại thể lực khi không đánh nữa.
          </p>
        </div>
      </div>
    </div>
  );
}
