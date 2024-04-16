import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Register() {
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
    <div className="Register">
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <h2>Register</h2>
        <input
          {...register("firstname", {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="Firstname"
        />
        {errors.firstname && <p>Only letters allowed!</p>}

        <input
          {...register("lastname", {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="Lastname"
        />
        {errors.lastname && <p>Only letters allowed!</p>}

        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
          })}
          placeholder="Email"
        />
        {errors.email && <p>Please enter a valid email format!</p>}

        <input
          {...register("password", {
            required: true,
            minLength: 6,
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p>Password must be at least 6 characters long!</p>
        )}
           <Link to={"/login"}>Log in</Link>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
