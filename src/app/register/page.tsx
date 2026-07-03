"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";
import { Label } from "@/components/UI/Label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/UI/Card";
import { Eye, EyeOff, User, Lock } from "lucide-react";

type FormState = {
  username: string;
  password: string;
};

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.username.trim()) {
      e.username = "Tên đăng nhập không được để trống";
    } else if (formData.username.length < 3) {
      e.username = "Tên đăng nhập phải có ít nhất 3 ký tự";
    }
    if (!formData.password) {
      e.password = "Mật khẩu không được để trống";
    } else if (formData.password.length < 6) {
      e.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setGeneralError(data.error || "Đăng ký thất bại");
        return;
      }
      // thành công: redirect ví dụ về login hoặc dashboard
      router.push("/login");
    } catch (err) {
      console.error(err);
      setGeneralError("Lỗi kết nối tới server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col items-center justify-center">
      <div className="absolute p-10 flex justify-between items-center top-0 w-full h-24 bg-gradient-to-r from-orange-400 to-orange-300">
        <Link href="/">
          <img
            className="m-3 ml-5"
            width={150}
            src="/LOGOdragon.png"
            alt="Logo"
          />
        </Link>
        <CardTitle className="text-2xl font-bold text-white bg-clip-text">
          ĐĂNG KÝ
        </CardTitle>
      </div>
      <Card className="w-full max-w-md relative z-10 bg-white/95 backdrop-blur-sm shadow-2xl border-0">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
            Tham Gia Rồng Thần Đại Chiến
          </CardTitle>
          <CardDescription className="text-gray-600">
            Tạo tài khoản để bắt đầu cuộc phiêu lưu của bạn
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {generalError && (
              <div className="text-sm text-red-600 bg-red-100 p-2 rounded">
                {generalError}
              </div>
            )}
            <div className="space-y-2">
              <Label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Tên Đăng Nhập
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                  className={`pl-10 ${errors.username ? "border-red-500" : ""}`}
                  disabled={loading}
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-xs">{errors.username}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Mật Khẩu
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className={`pl-10 pr-10 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                  disabled={loading}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-orange-300  text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105"
              disabled={loading}
            >
              {loading ? "Đang đăng ký..." : "Đăng Ký Ngay"}
            </Button>

            <div className="text-center text-sm text-gray-600">
              Đã có tài khoản?{" "}
              <Link
                href="/login"
                className="text-purple-600 hover:text-purple-800 font-semibold underline"
              >
                Đăng nhập ngay
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
