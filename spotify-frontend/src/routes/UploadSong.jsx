import { Icon } from "@iconify/react";
import { useState } from "react";
import IconText from "../component/shared/IconText";
import TextWithHover from "../component/shared/TextWithHover";
import Input from "../component/shared/Input";
import CloudinaryUpload from "../component/shared/CloudinaryUpload";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper";
import { useNavigate } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";

const UploadSong = () => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [uploadedSongFileName, setUploadedSongFileName] = useState("");
  const navigate = useNavigate();
  const submitSong = async () => {
    const data = { name, thumbnail, track: playlistUrl };
    const response = await makeAuthenticatedPOSTRequest("/song/create", data);
    if (response.err) {
      alert("Could not create song");
      return;
    }
    alert("Success");
    navigate("/home");
  };
  return (
    <LoggedInContainer>
      <div className="bg-app-black w-4/5 h-full overflow-auto">
        <div className="content px-10 mt-0 overflow-auto">
          <div className="text-2xl font-semibold mb-1 text-white mt-8 ">
            Upload Your Songs
          </div>
          <div className=" w-full flex mt-0 items-center  space-x-4">
            <div className="w-1/3">
              <Input
                label="Name"
                labelClassName="text-white"
                placeholder="Name"
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-1/3">
              <Input
                label="Thumbnail"
                labelClassName="text-white"
                placeholder="Thumbnail"
                value={thumbnail}
                setValue={setThumbnail}
              />
            </div>
          </div>
          <div className="py-3">
            {uploadedSongFileName ? (
              <div className="bg-white rounded-full p-2  w-1/3">
                {uploadedSongFileName.substring(0, 50)}..
              </div>
            ) : (
              <CloudinaryUpload
                setUrl={setPlaylistUrl}
                setName={setUploadedSongFileName}
              />
            )}
          </div>
          <div
            className="bg-white flex justify-center items-center w-2/12 font-semibold p-2 rounded-full cursor-pointer mt-2"
            onClick={submitSong}
          >
            Submit Song
          </div>
        </div>
      </div>
    </LoggedInContainer>
  );
};

export default UploadSong;
