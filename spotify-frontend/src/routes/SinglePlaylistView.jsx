import { useParams } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import { useState } from "react";
import { useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import SingleSongCard from "../component/shared/SingleSongCard";

const SinglePlaylistView = () => {
  const [playlistDetails, setPlaylistDetails] = useState({});
  const { playlistId } = useParams();
  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest(
        "/playlist/get/playlist/" + playlistId
      );
      setPlaylistDetails(response);
    };

    getData();
  }, []);

  return (
    <LoggedInContainer curActiveScreen={"library"}>
      {playlistDetails._id && (
        <div>
          <div className="text-green-400 text-xl pt-8 font-semibold">
            {playlistDetails.name}
          </div>
          <div className="pt-10 space-y-3">
            {playlistDetails.songs.map((item) => {
              return (
                <SingleSongCard
                  thumbnail={item.thumbnail}
                  name={item.name}
                  artist={item.artist}
                  track={item.track}
                  key={JSON.stringify(item)}
                  playSound={() => {}}
                />
              );
            })}
          </div>
        </div>
      )}
    </LoggedInContainer>
  );
};
export default SinglePlaylistView;
