import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/Users/UsersSlice";
const Form = () => {
  const dispatch = useDispatch();
  const inputName = React.useRef<HTMLInputElement>();
  const inputText = React.useRef<HTMLInputElement>();
  const addForm = () => {
    const obj = {
      name: inputName.current?.value ?? "",
      disc: inputText.current?.value ?? "",
    };
    dispatch(addUser(obj));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="justify-center flex mt-10">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputName as React.RefObject<HTMLInputElement>}
          className="border border-gray-300 rounded-md p-2"
          placeholder="name"
        />
        <input
          type="text"
          ref={inputText as React.RefObject<HTMLInputElement>}
          className="border border-gray-300 rounded-md p-2 block mt-3"
          placeholder="discription"
        />
        <button
          onClick={addForm}
          className="bg-blue-500 text-white px-4 py-2 rounded-md block hover:bg-blue-700 hover:text-gray-100 mt-3"
        >
          addPost
        </button>
      </form>
    </div>
  );
};

export default Form;
