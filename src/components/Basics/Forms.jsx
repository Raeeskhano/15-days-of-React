import { useForm } from "react-hook-form";

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);
  };

  return (
    <div className="bg-gray-300 flex flex-col justify-center items-center h-[100vh]">
      <h1 className="text-2xl font-bold">Form in React</h1>
      <div className="bg-emerald-950 text-white w-[70vh] p-10 rounded">
        {isSubmitting && <div>loading...</div>}
        <h2 className="text-2xl font-bold mb-2">Registration Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username*</label>
          <br />
          <input
            className="outline-none border-1 border-white rounded p-1"
            placeholder="enter username"
            {...register("username", {
              required: { value: true, message: "username is required" },
              minLength: { value: 3, message: "min length is 3" },
              maxLength: { value: 8, message: "max length is 8" },
            })}
          />
          {errors.username && (
            <div className="text-red-500">{errors.username.message}</div>
          )}
          <br />
          <label htmlFor="lastname">Email*</label>
          <br />
          <input
            className="outline-none border-1 border-white rounded p-1"
            type="email"
            placeholder="enter Email"
            {...register("email", {
              required: { value: true, message: "email is required" },
            })}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          <br />
          <br />

          <button
            type="submit"
            disabled={isSubmitting}
            className="outline-none border-1 border-white rounded p-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
