import { postMethod } from "@/services/API/ApiMethod";
import useFirebaseAuth from "@/services/Auth/useFirebaseAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

// Import your hook

const SignupForm = () => {
  const { createUserWithEmailMethod } = useFirebaseAuth(); // Destructure signup method from the hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router =useRouter()

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // Show error for mismatched passwords
      console.error("Passwords do not match");
      return;
    }

    setLoading(true);
    const res = await createUserWithEmailMethod(email, password);
    setLoading(false);

    if (res.status) {
      toast.success("Account created and verification email sent");
      let myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${res.token}`);
      myHeaders.append("Content-Type", "application/json")
      var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
      };
      const resp = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/auth/onBoarding", requestOptions)
      const res1 = await resp.json()
      router.push("/login")
    } else {
      toast.error("Something went wrong!")
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-[500px] ">
        <h2 className="text-2xl font-semibold mb-6">Create your account</h2>
        <form onSubmit={handleSignup}>
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
          <div className="mb-4">
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
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {password !== confirmPassword && confirmPassword && (
            <p className="text-red-500 text-sm mb-4">Passwords do not match</p>
          )}
          </div>
          
          <button
            type="submit"
            className={`w-full py-3 text-white font-semibold rounded-full ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary"
            }`}
            disabled={loading || password !== confirmPassword}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
