import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUsers = ({
  createUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  setIsCloseForm,
}) => {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      updateUserById("/users", data, updateInfo.id);
      setUpdateInfo();
    } else {
      createUser("/users", data);
    }

    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    setIsCloseForm(true);
  };

  const handleCloseForm = () => {
    setIsCloseForm(true);
  };

  return (
    <form
      className="w-full relative max-w-[350px] bg-white pt-[2em] px-[1.5em] pb-[2.5em] rounded-[0.7em] form-shadow"
      onSubmit={handleSubmit(submit)}
    >
      <h2 className="text-3xl text-center text-blue-950 mb-[1em] font-bold capitalize">
        Form Users
        <i
          onClick={handleCloseForm}
          className="bx bxs-x-circle text-[2.2rem] cursor-pointer absolute top-2 right-2"
        ></i>
      </h2>
      <div className="flex flex-col gap-[0.5em] mb-[1.2em]">
        <label className="text-[1rem] font-normal ml-[1em]" htmlFor="email">
          Email
        </label>
        <input
          {...register("email")}
          className="text-[1.1em] font-normal rounded-[0.4em] border border-solid border-gray-300 outline-none py-[0.5em] px-[1em]"
          id="email"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-[0.5em] mb-[1.2em]">
        <label className="text-[1rem] font-normal ml-[1em]" htmlFor="password">
          Password
        </label>
        <input
          {...register("password")}
          className="text-[1.1em] font-normal rounded-[0.4em] border border-solid border-gray-300 outline-none py-[0.5em] px-[1em]"
          id="password"
          type="password"
        />
      </div>
      <div className="flex flex-col gap-[0.5em] mb-[1.2em]">
        <label
          className="text-[1rem] font-normal ml-[1em]"
          htmlFor="first_name"
        >
          First Name
        </label>
        <input
          {...register("first_name")}
          className="text-[1.1em] font-normal rounded-[0.4em] border border-solid border-gray-300 outline-none py-[0.5em] px-[1em]"
          id="first_name"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-[0.5em] mb-[1.2em]">
        <label className="text-[1rem] font-normal ml-[1em]" htmlFor="last_name">
          Last Name
        </label>
        <input
          {...register("last_name")}
          className="text-[1.1em] font-normal rounded-[0.4em] border border-solid border-gray-300 outline-none py-[0.5em] px-[1em]"
          id="last_name"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-[0.5em] mb-[1.2em]">
        <label className="text-[1rem] font-normal ml-[1em]" htmlFor="birthday">
          Birthday
        </label>
        <input
          {...register("birthday")}
          className="text-[1.1em] font-normal rounded-[0.4em] border border-solid border-gray-300 outline-none py-[0.5em] px-[1em]"
          id="birthday"
          type="date"
        />
      </div>
      <button className="text-[1.2rem] block w-full py-[0.5em] px-[1em] rounded-[0.5em] bg-button text-white cursor-pointer grayscale-50 mt-[2em] hover:grayscale-0">
        {updateInfo ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormUsers;
