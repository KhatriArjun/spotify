import LoggedInContainer from "../containers/LoggedInContainer";
import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const [myPlaylist, setMyPlaylist] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/playlist/get/me");

      setMyPlaylist(response);
    };
    getData();
  }, []);
  return (
    <LoggedInContainer curActiveScreen="library">
      <div className="text-green-400 text-xl pt-8 font-semibold">
        My Playlists
      </div>
      <div className="py-5 grid gap-5 grid-cols-5 cursor-pointer">
        {myPlaylist.map((item) => {
          return (
            <Card
              key={JSON.stringify(item)}
              title={item.name}
              imageUrl={item.thumbnail}
              description=""
              playlistId={item._id}
            />
          );
        })}
      </div>
    </LoggedInContainer>
  );
};

const Card = ({ title, description, imageUrl, playlistId }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-black bg-opacity-30 w-full rounded-lg"
      onClick={() => {
        navigate("/playlist/" + playlistId);
      }}
    >
      <div className="pb-4  pt-2">
        <img className="w-full  rounded-md" src={imageUrl} alt="label" />
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};
export default Library;
