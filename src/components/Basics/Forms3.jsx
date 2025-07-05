import React from "react";
import { useForm } from "react-hook-form";

const Forms3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-emerald-500 w-[300px] p-4 flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: { value: true, message: "username is rerquired" },
            maxLength: { value: 8, message: "max length is 8" },
            minLength: { value: 3, message: "min length is 3" },
          })}
        />
        {errors.username && (
          <div className="text-red-500">{errors.username.message}</div>
        )}
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: { value: true, message: "password is required" },
            minLength: { value: 8, message: "minlength is 8" },
            maxLength: { value: 12, message: "maxlength is 12" },
          })}
        />
        {errors.password && (
          <div className="text-red-900">{errors.password.message}</div>
        )}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms3;
