import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <h2>Log in</h2>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
          })}
          placeholder="Email"
        />
        {errors.email && errors.email.type === "required" && (
          <p>This field is required!</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p>Please enter a valid email format!</p>
        )}
        <input
          {...register("password", {
            required: true,
            minLength: 6,
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && errors.password.type === "required" && (
          <p>This field is required!</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>Password must be at least 6 characters long!</p>
        )}
        <Link to={"/"}>Register</Link>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
