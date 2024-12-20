import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 block">Email</label>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="auth-input pl-12"
          />
          <Mail 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
            size={20} 
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-900 block">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="auth-input pl-12 pr-12"
          />
          <Lock 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
            size={20} 
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="text-right">
        <Link to="/forgot-password" className="auth-link text-sm">
          Forgot Password?
        </Link>
      </div>

      <button type="submit" className="auth-btn">
        Sign-In
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">or</span>
        </div>
      </div>

      <button type="button" className="auth-google-btn">
        <img src="/google.svg" alt="Google" className="w-5 h-5" />
        Continue with Google
      </button>
    </form>
  );
};

export default SignInForm;