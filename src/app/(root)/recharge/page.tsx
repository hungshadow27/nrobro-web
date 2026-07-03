import Link from "next/link";
import { redirect } from "next/navigation";

// Trang nạp tiền tạm thời bị vô hiệu hóa - redirect về trang chủ
export default function RechargePage() {
  redirect("/");
}
