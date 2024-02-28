import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";

const AddToPlaylistModal = ({ closeModal, addSongToPlaylist }) => {
  const [myPlaylist, setMyPlaylist] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/playlist/get/me");

      setMyPlaylist(response);
    };
    getData();
  }, []);
  return (
    <div
      className=" absolute bg-opacity-50 w-screen h-screen bg-gray-600 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="w-1/3 bg-app-black rounded-md p-8"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text-green-400 mb-5 font-semibold text-lg">
          Select PlayList
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          {myPlaylist.map((item) => {
            return (
              <PlaylistListComponent
                info={item}
                addSongToPlaylist={addSongToPlaylist}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const PlaylistListComponent = ({ info, addSongToPlaylist }) => {
  return (
    <div
      className="bg-app-black w-full flex items-center space-x-3 cursor-pointer rounded py-2 pl-2 hover:bg-gray-800 hover:bg-opacity-40"
      onClick={() => addSongToPlaylist(info._id)}
    >
      <div>
        <img src={info.thumbnail} className="w-10 h-10 rounded" />
      </div>
      <div className="text-white text-sm font-semibold hover:text-green-400 ">
        {info.name}
      </div>
    </div>
  );
};

export default AddToPlaylistModal;
