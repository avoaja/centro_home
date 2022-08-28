import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import useCentroStore from "../../store/useCentroStore";

import ErrorMessage from "../../components/form/ErrorMessage";
import Alert from "../../components/common/Alert";

import { loginSchema } from "./authSchema";

const Login = () => {
  const navigate = useNavigate();
  const { loading, isLoggedIn, logIn, logInFailed } = useCentroStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => logIn(data);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap mt-48 g-6">
          <div className="xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            {logInFailed && <Alert type="BadLogin" />}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <input
                  {...register("username")}
                  className={`${
                    errors.username?.message
                      ? "border-red-600"
                      : "focus:border-blue-600"
                  } form-control w-full px-4 py-2 text-gray-700 border border-solid border-gray-300 rounded m-0  `}
                  placeholder="Use 'admin@example.com'"
                  data-cy="username"
                  // value="admin@example.com"
                />
                <ErrorMessage message={errors.username?.message} />
              </div>

              <div className="mb-6">
                <input
                  {...register("password")}
                  className={`${
                    errors.username?.message
                      ? "border-red-600"
                      : "focus:border-blue-600"
                  } form-control block w-full px-4 py-2 text-gray-700 border border-solid border-gray-300 rounded m-0  `}
                  placeholder="Use 'admin123'"
                  data-cy="password"
                  type="password"
                  // value="admin123"
                />
                <ErrorMessage message={errors.password?.message} />
              </div>

              <div className="text-center lg:text-left">
                <input
                  type="submit"
                  className="hover:cursor-pointer inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  value={loading ? '...' : 'LOGIN'}
                  data-cy="login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
