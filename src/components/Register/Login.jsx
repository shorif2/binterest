import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";

const Login = () => {
  const [isLogin, setLogin] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const { login, createUser, googleSingIn } = useAuth();

  const toggleForm = () => {
    setLogin(!isLogin);
  };

  const toggleModal = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
    console.log("click");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle login or register logic here
  // };

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const conformPassword = data.conformPassword;

    const task = { email, password, conformPassword };
    if (!isLogin) {
      createUser(email, password);
    } else {
      login(email, password);
    }
  };

  // const googleSignUp = () => {};
  return (
    <div>
      <div onClick={toggleModal} className="flex gap-4">
        <Link>
          <button className="bg-[#0A2540] text-white px-6 py-2 rounded-3xl">
            Login/Register
          </button>
        </Link>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white absolute top-1/4 p-8 rounded shadow-md">
            <button
              onClick={toggleModal}
              className="absolute right-4 top-0 text-2xl"
            >
              x
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {isLogin ? "Login" : "Register"}
            </h2>
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  className="border p-2"
                  placeholder="email"
                  {...register("email")}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  className="border p-2"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>
              {!isLogin ? (
                <div className="flex flex-col">
                  <label htmlFor="conformPassword">Conform Password</label>
                  <input
                    className="border p-2"
                    placeholder="Conform Password"
                    {...register("conformPassword")}
                  />
                </div>
              ) : null}

              <button type="submit" className="btn btn-sm btn-outline">
                {isLogin ? "Login" : "Register"}
              </button>
            </form>
            <div className="pt-4">
              <button
                onClick={() => googleSingIn()}
                className="w-full px-2 py-2 inline-flex justify-center items-center gap-2  border font-medium bg-white text-gray-700 shadow-sm align-middle"
              >
                <svg
                  className="w-4 h-auto"
                  width="46"
                  height="47"
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign up with Google
              </button>
            </div>
            <div className="mt-4 text-center">
              <p>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <span
                  className="text-blue-500 cursor-pointer ml-1"
                  onClick={toggleForm}
                >
                  {isLogin ? "Register" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
