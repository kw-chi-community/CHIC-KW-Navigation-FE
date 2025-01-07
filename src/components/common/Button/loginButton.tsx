interface AuthButtonFormP {
  text: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function AuthButtonForm ({
  text,
  variant = 'primary',
  onClick,
}: AuthButtonFormP) {
  const baseStyles = "w-full py-3 rounded-lg font-medium text-sm mt-4 mx-auto px-4";
  const variantStyles = variant === 'primary' 
    ? "bg-red-900 text-white hover:bg-red-800" 
    : "bg-gray-100 text-gray-700 hover:bg-gray-200";

  return (
    <button
      className={`${baseStyles} ${variantStyles}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};


export function LoginButton(){
  return (
        <div className="space-y-4 ">
          <input
            type="text"
            placeholder="아이디를 입력해주세요."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
          />
        </div>
  );
};


export function GoogleLoginButton() {
  return (
    <div className="space-y-4">
      <button
        className="w-full py-3 px-4 border border-gray-300 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2"
      >
        <img
          src="/assets/loginGoogle.svg"
          alt="Google logo"
          className="w-50 h-50"
        />
      </button>

      <div className="text-center text-xs text-gray-500 mt-4">
        <p>계정 정보를 잊어버리셨나요?</p>
      </div>
    </div>
  );
}


