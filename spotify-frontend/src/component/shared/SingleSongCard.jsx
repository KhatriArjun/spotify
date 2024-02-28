import { useContext } from "react";
import songContext from "../../contexts/songContext";

const SingleSongCard = ({
  thumbnail,
  name,
  artist,
  playSound,
  track,
  songId,
}) => {
  const { currentSong, setCurrentSong } = useContext(songContext);

  return (
    <div
      className="flex hover:bg-gray-500 hover:bg-opacity-25 p-3 rounded-md "
      onClick={() => {
        // console.log({ thumbnail, name, artist, track, songId });
        setCurrentSong({ thumbnail, name, artist, track, songId });
        // console.log(currentSong);
      }}
    >
      <div
        className="w-10 h-10 bg-cover bg-center"
        style={{
          backgroundImage: `url("${thumbnail}")`,
        }}
      ></div>
      <div className="flex w-full">
        <div className="text-white flex-col justify-center items-center w-5/6 pl-4">
          <div className="cursor-pointer hover:underline">{name}</div>
          <div className="text-xs text-gray-400 cursor-pointer hover:underline">
            {artist.firstName + " " + artist.lastName}
          </div>
        </div>
      </div>
      <div className=" w-1/6 flex items-center justify-center text-sm text-gray-400">
        <div>3:44</div>
      </div>
    </div>
  );
};
export default SingleSongCard;
