import AuthLayout from "../components/AuthLayout";
import { Input } from "../components/ui/input";

const Verify = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">CloudLedger</h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-[24px] font-bold text-left">Verify it's you</h2>
          <p className="text-gray-600 text-left">
            Enter the 6-digit verification code we've sent to [user email id]
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            placeholder="Verification Code"
            className="auth-input text-center text-lg tracking-widest"
            maxLength={6}
          />

          <button type="submit" className="auth-btn">
            Verify
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Verify;