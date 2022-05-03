import React from "react"
import { FieldErrors, useForm } from "react-hook-form"

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms(){
  const {
    register, 
    handleSubmit,
    formState: {errors},
    watch,
    setError,
    setValue,
    reset,
    resetField,
  } = useForm<LoginForm>({
    mode: "onBlur"
  });
  const onValid = (data: LoginForm) => {
    console.log("im valid bby");
  }
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  }
  return (
    <form className="flex flex-col w-1/2 mt-24 space-y-4 text-center" onSubmit={handleSubmit(onValid, onInvalid)}>
      <input 
        {...register("username",{
          required: "Username is required",
          minLength : {
            message: "The username should be longer than 5 chars.",
            value: 5
          },
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input 
        {...register("email",{
          required: "Email is required",
          validate:{
            notGmail:(value) => 
              !value.includes("@gmail.com") || "Gmail is not allowed",
          }
        })}
        type="text"
        placeholder="Email"
        className={`${Boolean(errors.email?.message) ? "" : "border-red-500"}`}
      />
      {errors.email?.message}
      <input
        {...register("password",{
          required: "Password is required",
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password?.message}
      <input type="submit" value="Create Account"/>
    </form>
  )
}