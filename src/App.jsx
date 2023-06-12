import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './assets/hooks/useFetch'
import FormUsers from './assets/components/FormUsers'
import UserCard from './assets/components/UserCard';

function App() {

  const [updateInfo, setUpdateInfo] = useState()

  const [isCloseForm, setIsCloseForm] = useState(true)

  const baseUrl = "https://users-crud.academlo.tech/";
  const [ users, getUsers, createUser, deleteUserById, updateUserById ] = useFetch(baseUrl)

  useEffect(() => {
    getUsers("/users")
  }, [])

  const handleOpenForm = () => {
    setIsCloseForm(false)
  }

  return (
    <div>
      <div className="flex items-center justify-around mt-6">
        <h1 className="text-4xl font-bold">Users CRUD</h1>
        <button
          className="w-60 flex justify-center items-center p-1 rounded-[0.5em] bg-button text-white cursor-pointer grayscale-50 hover:grayscale-0"
          onClick={handleOpenForm}
        >
          <span className="text-[1.5rem]">Create New User</span>
          <i class="bx bxs-user-plus ml-4 mt-1 text-2xl"></i>
        </button>
      </div>
      <div
        className={`w-full min-h-screen fixed bg-black/40 top-0 flex justify-center items-center backdrop-blur-[3px] transition-transform duration-200 ease ${
          isCloseForm && "form__close"
        }`}
      >
        <FormUsers
          createUser={createUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setIsCloseForm={setIsCloseForm}
        />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] place-items-center mx-auto p-14">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setIsCloseForm={setIsCloseForm}
            isCloseForm={isCloseForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App
