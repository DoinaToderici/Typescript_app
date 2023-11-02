import { useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineLogin } from "react-icons/ai";
import { PiMediumLogoThin } from "react-icons/pi";
import { appContext } from "../../context/appContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { user, logOut } = useContext(appContext);

  const handleLogOut = () => {
    logOut && logOut();
  };

  return (
    <div className=" shadow-xl">
      <div className="container py-2 mx-auto flex justify-between items-center">
        <Link to="/" className="user ">
          <PiMediumLogoThin className="text-5xl font-extrabold text-blue-600/75 cursor-pointer" />
        </Link>
        {user.email !== "" && (
          <div className="deconnect flex items-center">
            <RxAvatar className="text-2xl text-gray-700 mr-1" />
            <span className="mr-10 text-sm text-gray-500">
              Hey, <span className="font-bold text-gray-700">{user.name}</span>
            </span>
            <button>
              <AiOutlineLogin
                className="text-2xl text-red-400"
                onClick={handleLogOut}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
