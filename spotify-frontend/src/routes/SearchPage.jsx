import { useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { Icon } from "@iconify/react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import SingleSongCard from "../component/shared/SingleSongCard";

const SearchPage = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [songData, setSongData] = useState([]);
  const searchSong = async () => {
    //this function will call the search API
    const response = await makeAuthenticatedGETRequest(
      "/song/get/songname/" + searchText
    );
    setSongData(response.data);
  };
  return (
    <LoggedInContainer curActiveScreen="search">
      <div className="w-full py-6 ">
        <div
          className={`w-1/3  p-3 text-sm rounded-full bg-gray-800 px-5 items-center flex text-white space-x-3 ${
            isInputFocused ? "border border-white" : ""
          }`}
        >
          <Icon icon="ic:outline-search" className="text-lg" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="w-full bg-gray-800 focus:outline-none"
            onFocus={() => {
              setIsInputFocused(true);
            }}
            onBlur={() => {
              setIsInputFocused(false);
            }}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchSong();
              }
            }}
          />
        </div>
        {songData.length > 0 ? (
          <div className="pt-10 space-y-3">
            <div className="text-green-400">
              Search results for{" "}
              <span className="font-bold text-lg italic">"{searchText}" </span>
              are
            </div>

            {songData.map((item) => {
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
        ) : (
          <div className="text-green-400 p-8 text-4xl font-medium">
            !! Search Instead !!
          </div>
        )}
      </div>
    </LoggedInContainer>
  );
};
export default SearchPage;
