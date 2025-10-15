import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import LocationDisplay from "../components/global/LocationDisplay";

export default function SignIn() {
  const { dispatch, state } = useContext(UserContext);
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state.isLoggedIn) {
      navigate("/shop");
    }
  }, [state.isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // simulate API call
      await new Promise((res) => setTimeout(res, 100));

      if (!form.email || !form.password) {
        throw new Error("Email and password are required");
      }

      if (isSignup && !form.name) {
        throw new Error("User name is required");
      }

      const userData = {
        id: Date.now(),
        name: form.name,
        email: form.email,
        password: form.password,
      };

      // { id: 1760338361885, name: "User", email: "abdulfataialiyu4@gmail.com" }

      const users = JSON.parse(localStorage.getItem("users")) ?? [];

      const user = users.find((user) => user.email === userData.email);

      if (isSignup) {
        if (user) return setError("User already exists");
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));

        dispatch({ type: "LOGIN", payload: userData });
        setTimeout(() => {
          // console.log("userstate", state);
        }, 500);
      } else {
        if (!user) return setError("User not found");

        if (user.password === userData.password) {
          dispatch({
            type: "LOGIN",
            payload: {
              id: user.id,
              name: user.name || "User",
              email: user.email,
            },
          });
          setTimeout(() => {
            // console.log("userstate", state);
          }, 500);
        } else {
          setError("Invalid password");
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LocationDisplay />

      <section className="min-h-screen flex items-center justify-center px-5 py-10 bg-neutral">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-center mb-2">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-center text-[#757575] text-sm mb-5">
            {isSignup
              ? "Sign up to start shopping and saving your wishlist."
              : "Log in to continue where you left off."}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {isSignup && (
              <div>
                <label className="text-sm text-[#757575]">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border border-[#bcbcbc79] rounded-md p-2 bg-transparent"
                />
              </div>
            )}

            <div>
              <label className="text-sm text-[#757575]">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className="w-full border border-[#bcbcbc79] rounded-md p-2 bg-transparent"
              />
            </div>

            <div>
              <label className="text-sm text-[#757575]">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full border border-[#bcbcbc79] rounded-md p-2 bg-transparent"
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-black text-white uppercase font-semibold rounded-md hover:bg-accent transition-all duration-300 flex justify-center items-center"
            >
              {loading ? (
                <i className="bx bx-loader-circle bx-spin bx-rotate-90 text-xl"></i>
              ) : isSignup ? (
                "Sign Up"
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="text-center text-sm text-[#757575] mt-3">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-accent font-semibold hover:underline"
                  onClick={() => setIsSignup(false)}
                >
                  Log in
                </button>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <button
                  type="button"
                  className="text-accent font-semibold hover:underline"
                  onClick={() => setIsSignup(true)}
                >
                  Sign up
                </button>
              </>
            )}
          </div>

          <div className="text-center text-[#757575] text-sm mt-5">
            <Link to="/" className="hover:underline text-accent">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
