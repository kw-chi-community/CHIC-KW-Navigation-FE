import { AuthButtonForm, LoginButton, GoogleLoginButton } from "@/components/common/Button/loginButton";
import { useNavigate } from 'react-router-dom';

export default function LoginPage () {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    console.log("로그인 버튼 클릭");
  };

  const handleJoinClick = () => {
    navigate('/JoinPage'); 
  };

  return (
    <div className="container h-[100vh] bg-white flex flex-col justify-center items-center">
      <div className="w-full max-w-sm px-6 space-y-8">
        <div className="text-center space-y-2">
          <img
              src="/assets/loginIcon.svg"
              alt="Login Icon"
              className="mx-auto w-50 h-50"
          />
        </div>
      </div>

      <div className="w-full py-3 rounded-lg font-medium text-sm mt-4 mx-auto px-4">
        <LoginButton />

      <div className="space-y-4">
        <AuthButtonForm text="로그인" variant="primary" onClick={handleLoginClick} />
        <AuthButtonForm text="회원가입" variant="secondary" onClick={handleJoinClick} />

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-500 text-sm">또는</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <GoogleLoginButton />
      </div>
      </div>
    </div>

  );
};

