import NavBar from "@/components/NavBar";
import Loader from "@/Icons/Loader";
import { setToken, setUser } from "@/services/Auth/cookies";
import useFirebaseAuth from "@/services/Auth/useFirebaseAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
// Import your hook

const LoginForm = () => {
  const { loginWithEmailAndPassword, forgotPassword } = useFirebaseAuth(); // Destructure the login method from the hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const [isForget, setisForget] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await loginWithEmailAndPassword(email, password); // Example redirect


    setLoading(false);

    if (res.status) {
      // Successful login
      toast.success("Logged in successfully");
      setToken(res.token, res.expiryTime)
      setUser(res.user.email)
      router.push("/")
    } else {
      // Handle login error (already handled via toast in your custom hook)
      toast.error("Not able to login!")
    }
  };

  const handlepassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await forgotPassword(email); // Example redirect


    setLoading(false);

    if (res.status) {
      // Successful login
      toast.success("Check your email!");
      setisForget(false)
    } else {
      // Handle login error (already handled via toast in your custom hook)
      toast.error("check your email!")
    }
  };

  return (
    <div>
      <NavBar/>
      <div className="h-screen mt-20 w-full flex items-center justify-center ">
        {
          isForget ?
            <div className="w-full mx-5 md:w-[500px] ">
              <h2 className="text-2xl font-semibold mb-6">Reset password</h2>
              <form onSubmit={isForget ? handleLogin : handleLogin}>
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

                <div className="flex items-center justify-between mb-4">
                  <div onClick={() => setisForget(false)} className="text-sm text-primary hover:underline font-semibold">
                    Remember password?
                  </div>
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 hover:bg-primary/90  text-white font-semibold rounded-full ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
                    }`}
                  disabled={loading}
                >
                  Reset
                </button>
              </form>
              <p className="text-center text-gray-500 mt-6">
                Don’t have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
            :
            <div className="w-full mx-5 md:w-[500px] ">
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
                  <div onClick={() => setisForget(true)} className="text-sm text-primary hover:underline font-semibold">
                    Forgot your password?
                  </div>
                </div>
                <button
                  type="submit"
                  className={`w-full hover:bg-primary/90  hover:bg-primary/90    flex items-center justify-center py-3 text-white font-semibold rounded-full  ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
                    }`}
                  disabled={loading}
                >
                 
                  {loading ?<ClipLoader size={24} color="white"/> : " Login"}
                </button>
              </form>
              <p className="text-center text-gray-500 mt-6">
                Don’t have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
        }
      </div>
    </div>
  );
};

export default LoginForm;
