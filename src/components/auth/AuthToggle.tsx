import { Link } from "react-router-dom";

const AuthToggle = ({ activeTab }: { activeTab: "signin" | "signup" }) => {
  return (
    <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
      <div className="flex-1">
        <Link to="/signin">
          <button
            className={`w-full py-2 rounded-md font-semibold transition-colors ${
              activeTab === "signin"
                ? "bg-white shadow-sm"
                : "text-gray-600 hover:bg-white/50"
            }`}
          >
            Sign-In
          </button>
        </Link>
      </div>
      <div className="flex-1">
        <Link to="/signup">
          <button
            className={`w-full py-2 rounded-md font-semibold transition-colors ${
              activeTab === "signup"
                ? "bg-white shadow-sm"
                : "text-gray-600 hover:bg-white/50"
            }`}
          >
            Sign-Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AuthToggle;