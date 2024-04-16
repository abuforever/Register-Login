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

  console.log(errors.firstname);

  return (
    <div className="Register">
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <h2>Register</h2>
        <input
          {...register("firstname", {
            required: true,
            maxLength: 14, // Probeldan qutqarib chiqish uchun 14 qilib olamiz
            pattern: /^[A-Za-z]+( [A-Za-z]+)*$/i, // Harflar ortasida probelni qo'shish uchun
          })}
          placeholder="Firstname"
        />
        {errors.firstname && errors.firstname.type === "required" && (
          <p>This field is required!</p>
        )}
        {errors.firstname && errors.firstname.type === "pattern" && (
          <p>Only letters allowed!</p>
        )}


        <input
          {...register("lastname", {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+( [A-Za-z]+)*$/i,
          })}
          placeholder="Lastname"
        />
        {errors.lastname && errors.lastname.type === "required" && (
          <p>This field is required!</p>
        )}
        {errors.lastname && errors.lastname.type === "pattern" && (
          <p>Only letters allowed!</p>
        )}


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

        <Link to={"/login"}>Log in</Link>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
