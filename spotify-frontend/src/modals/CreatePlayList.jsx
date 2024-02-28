import Input from "../component/shared/Input";
import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper";
const CreatePlayList = ({ closeModal }) => {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistThumbnail, setPlaylistThumbnail] = useState("");

  const createPlaylist = async () => {
    const response = await makeAuthenticatedPOSTRequest("/playlist/create", {
      name: playlistName,
      thumbnail: playlistThumbnail,
      songs: [],
    });
    if (response._id) {
      closeModal();
    }
  };
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
          Create PlayList
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <Input
            label="Name"
            labelClassName="text-white"
            placeholder="Playlist Name"
            value={playlistName}
            setValue={setPlaylistName}
          />
          <Input
            label="Thumbnail"
            labelClassName="text-white"
            placeholder="Thumbnail"
            value={playlistThumbnail}
            setValue={setPlaylistThumbnail}
          />
          <div
            className="bg-white w-1/3 font-semibold rounded flex justify-center items-center py-2 mt-4 cursor-pointer"
            onClick={createPlaylist}
          >
            Create
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePlayList;
