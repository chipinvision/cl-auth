import AuthLayout from "../components/AuthLayout";
import AuthToggle from "../components/auth/AuthToggle";
import SignInForm from "../components/auth/SignInForm";

const SignIn = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">CloudLegder</h1>
        </div>
        
        <AuthToggle activeTab="signin" />
        <SignInForm />
      </div>
    </AuthLayout>
  );
};

export default SignIn;