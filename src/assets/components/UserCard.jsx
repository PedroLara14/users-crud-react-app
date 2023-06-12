const UserCard = ({
  user,
  deleteUserById,
  setUpdateInfo,
  setIsCloseForm,
  isCloseForm,
}) => {
  const handleDelete = () => {
    deleteUserById("/users", user.id);
  };

  const handleEdit = () => {
    setUpdateInfo(user);
    setIsCloseForm(false);
  };

  return (
    <article className="flex flex-col p-4 mt-8 min-w-[400px] min-h-[260px] border border-solid border-gray-200">
      <h2 className="font-bold text-2xl text-center capitalize">{`${user.first_name} ${user.last_name}`}</h2>
      <hr className="mt-1" />
      <ul className="flex flex-col">
        <li className="flex flex-col mt-3">
          <span className="uppercase text-gray-400">Email</span>
          <span className="mt-0.5 font-bold">{user.email}</span>
        </li>
        <li className="flex flex-col mt-2">
          <span className="uppercase text-gray-400">Birthday</span>
          <span className="mt-0.5 font-bold">{user.birthday}</span>
        </li>
      </ul>
      <hr className="mt-2" />
      <div className="relative mt-14">
        <button
          className={`${
            !isCloseForm && "btn__off"} absolute w-10 h-10 bg-red-600 rounded-[0.2rem] p-1.5 text-2xl bottom-0 right-0 mr-[3.3rem]`}
          onClick={handleDelete}
        >
          <i className="bx bx-trash text-white"></i>
        </button>
        <button
          className={`${
            !isCloseForm && "btn__off"
          } absolute w-10 h-10 bg-gray-600 rounded-[0.2rem] p-1.5 text-2xl bottom-0 right-0 mr-2 `}
          onClick={handleEdit}
        >
          <i className="bx bxs-edit text-gray-50"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
