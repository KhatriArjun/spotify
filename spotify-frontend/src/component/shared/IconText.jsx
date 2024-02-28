import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const IconText = ({ iconName, displayText, active, targetLink, onClick }) => {
  return (
    <Link to={targetLink} className="block">
      <div
        className="flex justify-start items-center cursor-pointer"
        onClick={onClick}
      >
        <div className="px-5 py-3">
          <Icon
            icon={iconName}
            color={active ? "#1ED760" : "gray"}
            fontSize={27}
            className="hover:#1ED760"
          />
        </div>
        <div
          className={`${
            active ? "text-green-400" : "text-gray-400"
          } text-sm font-semibold pt-2 hover:text-green-400`}
        >
          {displayText}
        </div>
      </div>
    </Link>
  );
};
export default IconText;
