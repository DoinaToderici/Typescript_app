import { useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import { appContext } from "../../context/appContext";

export default function Nav() {
  const { user } = useContext(appContext);

  return (
    <div className="border-b border-gray-200 p-5 flex">
      <RxAvatar className="text-3xl text-red-700" />
      <span>Hey, {user.name}</span>
    </div>
  );
}
