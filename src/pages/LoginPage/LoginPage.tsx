import React from "react";
import appLogo from "../../assets/images/appLogo.svg";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="mb-6">
        <img src={appLogo} alt="App Logo" className="w-24 h-24" />
      </div>
      <div className="w-full max-w-sm">
        <input
          type="text"
          placeholder="아이디"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg bg-gray-100 text-lg focus:outline-none focus:ring-2 focus:ring-red-700"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg bg-gray-100 text-lg focus:outline-none focus:ring-2 focus:ring-red-700"
        />
        <button className="w-full py-2 mb-4 text-white bg-red-800 rounded-lg hover:bg-red-900">
          로그인
        </button>
        <div className="flex justify-between text-sm text-gray-600">
          <a href="/find-password" className="hover:underline">
            비밀번호 찾기
          </a>
          <a href="/create-account" className="hover:underline">
            계정 만들기
          </a>
        </div>
      </div>
    </div>
  );
}
