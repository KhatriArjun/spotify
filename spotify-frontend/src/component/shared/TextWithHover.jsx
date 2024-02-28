import { Link } from "react-router-dom";

const TextWithHover = ({ displayText, active, targetLink }) => {
  return (
    <Link to={targetLink} className="block">
      <div className="flex justify-start items-center cursor-pointer">
        <div
          className={`${
            active ? "text-green-400" : "text-gray-500"
          } text-lg font-semibold pt-2 hover:text-green-400`}
        >
          {displayText}
        </div>
      </div>
    </Link>
  );
};
export default TextWithHover;
