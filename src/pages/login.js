import useFirebaseAuth from "@/services/Auth/useFirebaseAuth";
import { useState } from "react";
 // Import your hook

const LoginForm = () => {
  const { loginWithEmailAndPassword } = useFirebaseAuth(); // Destructure the login method from the hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await loginWithEmailAndPassword(email, password, "/dashboard"); // Example redirect
    setLoading(false);

    if (res.status) {
      // Successful login
      console.log("Logged in successfully");
    } else {
      // Handle login error (already handled via toast in your custom hook)
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-[500px] ">
        <h2 className="text-2xl font-semibold mb-6">Login to your account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <a href="#" className="text-sm text-primary hover:underline font-semibold">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className={`w-full py-3 text-white font-semibold rounded-full ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-primary hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
