import React from "react";
import { UserType } from "../type/typeUser";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/slices/Users/UsersSlice";
import moment from "moment";
type UserItemProps = UserType & {
  ind: number;
};
const UserItem: React.FC<UserItemProps> = ({ name, disc, id, ind }) => {
  const dispatch = useDispatch();
  const [lastPostDate, setLastPostDate] = React.useState<string | null>(null);
  React.useEffect(() => {
    const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    setLastPostDate(currentDate);
  }, [lastPostDate]);
  const deletePost = () => {
    dispatch(deleteUser(ind));
  };
  
  return (
    <div className="mt-4 border-2 border-gray-300 rounded-md p-4">
      <strong className="text-lg">Post: {ind + 1}</strong>
      <div>uniqKey: {id}</div>
      <div className="mt-2">added: {lastPostDate}</div>
      <div className="mt-2">name: {name ? name : "Не указан"}</div>
      <div className="mt-2 text-gray-600">
        disc: {disc ? disc : "Не указан"}
      </div>
      <button
        onClick={deletePost}
        className="bg-blue-500 text-white px-4 py-2 rounded-md block hover:bg-blue-700 hover:text-gray-100 mt-3"
      >
        delete
      </button>
    </div>
  );
};

export default UserItem;
