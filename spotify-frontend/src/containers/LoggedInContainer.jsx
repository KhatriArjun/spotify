import { Icon } from "@iconify/react";
import { Children, useState } from "react";
import { Howl, Howler } from "howler";
import IconText from "../component/shared/IconText";
import TextWithHover from "../component/shared/TextWithHover";
import { useContext, useLayoutEffect, useRef } from "react";
import songContext from "../contexts/songContext";
import CreatePlayList from "../modals/CreatePlayList";
import AddToPlaylistModal from "../modals/AddToPlaylistModal";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper";

const LoggedInContainer = ({ children, curActiveScreen }) => {
  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);
  const {
    currentSong,
    setCurrentSong,
    soundPlayed,
    setSoundPlayed,
    isPaused,
    setIsPaused,
  } = useContext(songContext);

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    // following if statement will prevent the useEffect  from running on first render
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (!currentSong) {
      return;
    }
    changeSong(currentSong.track);
  }, [currentSong && currentSong.track]);

  const addSongToPlaylist = async (playlistId) => {
    const SongId = currentSong.songId;
    console.log(SongId);
    const payload = { playlistId: playlistId, songId: SongId };

    // console.log(payload);
    const response = await makeAuthenticatedPOSTRequest(
      "/playlist/add/song",
      // {
      // playlistId: playlistId,
      // songId: SongId,
      // }
      payload
    );
    // console.log(response);
    if (response._id) {
      setAddToPlaylistModalOpen(false);
    }
  };

  const playSound = () => {
    if (!soundPlayed) {
      return;
    }
    soundPlayed.play();
  };

  const changeSong = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    setIsPaused(false);
  };

  const pauseSound = () => {
    soundPlayed.pause();
  };

  const togglePlayPause = () => {
    if (isPaused) {
      playSound();
      setIsPaused(false);
    } else {
      setIsPaused(true);
      pauseSound();
    }
  };

  return (
    <div className="  bg-app-black w-full h-full overflow-hidden">
      {createPlaylistModalOpen && (
        <CreatePlayList
          closeModal={() => {
            setCreatePlaylistModalOpen(false);
          }}
        />
      )}
      {addToPlaylistModalOpen && (
        <AddToPlaylistModal
          closeModal={() => {
            setAddToPlaylistModalOpen(false);
          }}
          addSongToPlaylist={addSongToPlaylist}
        />
      )}

      <div className={`w-full ${currentSong ? "h-9/10" : "h-full"} flex`}>
        <div className="bg-black h-full w-1/5 flex flex-col justify-between pb-40">
          <div>
            <div className="logo">
              <Icon icon="logos:spotify" width="190" className="p-3" />
            </div>
            <div className="py-5">
              <IconText
                iconName="majesticons:home"
                displayText="Home"
                active={curActiveScreen === "home"}
                targetLink={"/home"}
              />
              <IconText
                iconName="tabler:search"
                displayText="Search"
                targetLink={"/search"}
                active={curActiveScreen === "search"}
              />
              <IconText
                iconName="streamline:interface-content-book-2-library-content-books-book-shelf-stack"
                displayText="Your Library"
                targetLink={"/library"}
                active={curActiveScreen === "library"}
              />
              <IconText
                iconName="ic:round-library-music"
                displayText="My Music"
                targetLink={"/myMusic"}
                active={curActiveScreen === "myMusic"}
              />
            </div>
            <div className="pt-5">
              <IconText
                iconName="icon-park-solid:add"
                displayText="Create Playlist"
                onClick={() => {
                  setCreatePlaylistModalOpen(true);
                }}
              />
              <IconText iconName="bxs:heart" displayText="Liked Songs" />
            </div>
          </div>
          <div className="px-4 ">
            <div className="border border-gray-100 text-green-400 w-2/5 flex rounded-full text-sm items-center justify-around py-1 px-3 hover:border-orange-500 cursor-pointer">
              <Icon icon="ph:globe" color={"#1ED760"} width="15" />
              English
            </div>
          </div>
        </div>
        <div className="bg-app-black w-4/5 h-full overflow-auto">
          <div className="navbar w-full flex items-center justify-end bg-black bg-opacity-30 h-1/10">
            <div className="w-1/2  h-full flex items-center">
              <div className="flex justify-around w-3/5 h-full items-center ">
                <TextWithHover displayText="Premium" />
                <TextWithHover displayText="Support" />
                <TextWithHover displayText="Download" />
                <div className="h-1/2 border-r border-white"></div>
              </div>
              <div className="flex  w-2/5 h-full items-center justify-around">
                <TextWithHover
                  displayText="Upload songs"
                  targetLink={"/uploadSong"}
                />
                <div className="bg-white h-2/4 px-2 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                  AK
                </div>
              </div>
            </div>
          </div>
          <div className="content px-10 mt-0 overflow-auto">{children}</div>
        </div>
      </div>
      {currentSong && (
        <div className="w-full h-1/10 bg-black bg-opacity-30 text-green-400 flex items-center px-4">
          <div className="w-1/4 flex items-center">
            <img
              src={currentSong.thumbnail}
              alt="currentSongThumbnail"
              className="w-14 h-14 rounded"
            />
            <div className="pl-4">
              <div className="text-sm hover:underline cursor-pointer">
                {currentSong.name}
              </div>
              <div className="text-xs text-green-600 hover:underline cursor-pointer ">
                {currentSong.artist.firstName +
                  " " +
                  currentSong.artist.lastName}
              </div>
            </div>
          </div>
          <div className="w-1/2 flex  flex-col justify-center  h-full items-center">
            <div className="flex items-center w-1/3 justify-between">
              <Icon
                icon="solar:shuffle-outline"
                fontSize={18}
                className="cursor-pointer text-gray-500 hover:text-green-400"
              />
              <Icon
                icon="mi:previous"
                fontSize={18}
                className="cursor-pointer text-gray-500 hover:text-green-400"
              />
              <Icon
                icon={
                  isPaused
                    ? "ic:baseline-play-circle"
                    : "ic:baseline-pause-circle"
                }
                fontSize={35}
                className="cursor-pointer text-gray-500 hover:text-green-400"
                onClick={togglePlayPause}
              />
              <Icon
                icon="mi:next"
                fontSize={18}
                className="cursor-pointer text-gray-500 hover:text-green-400"
              />
              <Icon
                icon="pepicons-pop:repeat"
                fontSize={18}
                className="cursor-pointer text-gray-500 hover:text-green-400"
              />
            </div>
            {/* <div>Progress Bar</div> */}
          </div>
          <div className="w-1/4 flex  justify-end pr-4 space-x-3">
            <Icon
              icon="ic:round-playlist-add"
              fontSize={18}
              className="cursor-pointer text-gray-500 hover:text-green-400"
              onClick={() => {
                setAddToPlaylistModalOpen(true);
              }}
            />
            <Icon
              icon="ph:heart-bold"
              fontSize={18}
              className="cursor-pointer text-gray-500 hover:text-green-400"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInContainer;
