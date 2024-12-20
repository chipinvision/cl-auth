import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import AuthLayout from "../components/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Cardly</h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
          <p className="text-gray-600 text-center">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="auth-input pl-12"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>
          </div>

          <button type="submit" className="auth-btn">
            Send Reset Link
          </button>

          <div className="text-center">
            <Link to="/signin" className="auth-link text-sm">
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;