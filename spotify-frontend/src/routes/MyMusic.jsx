import { Howl, Howler } from "howler";

import SingleSongCard from "../component/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import { useState, useEffect } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";

// const MyMusic = () => {
//   const [songData, setSongData] = useState([]);
//   const [soundPlayed, setSoundPlayed] = useState(null);
//   const playSound = (songSrc) => {
//     if (soundPlayed) {
//       soundPlayed.stop();
//     }
//     let sound = new Howl({
//       src: [songSrc],
//       html5: true,
//     });
//     setSoundPlayed(sound);
//     sound.play();
//   };

//   useEffect(() => {
//     //fetch data
//     const getData = async () => {
//       const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
//       setSongData(response.data);
//     };
//     getData();
//   });

//   return (
//     <div className="flex  w-full h-full ">
//       <div className="bg-black h-full w-1/5 flex flex-col justify-between pb-40">
//         <div>
//           <div className="logo">
//             <Icon icon="logos:spotify" width="190" className="p-3" />
//           </div>
//           <div className="py-5">
//             <IconText iconName="majesticons:home" displayText="Home" />
//             <IconText iconName="tabler:search" displayText="Search" />
//             <IconText
//               iconName="streamline:interface-content-book-2-library-content-books-book-shelf-stack"
//               displayText="Your Library"
//             />
//             <IconText
//               iconName="ic:round-library-music"
//               displayText="My Music"
//               active
//             />
//           </div>
//           <div className="pt-5">
//             <IconText
//               iconName="icon-park-solid:add"
//               displayText="Create Playlist"
//             />
//             <IconText iconName="bxs:heart" displayText="Liked Songs" />
//           </div>
//         </div>
//         <div className="px-4 ">
//           <div className="border border-gray-100 text-green-400 w-2/5 flex rounded-full text-sm items-center justify-around py-1 px-3 hover:border-orange-500 cursor-pointer">
//             <Icon icon="ph:globe" color={"#1ED760"} width="15" />
//             English
//           </div>
//         </div>
//       </div>
//       <div className="bg-app-black w-4/5 h-full overflow-auto">
//         <div className="navbar w-full flex items-center justify-end bg-black bg-opacity-30 h-1/10">
//           <div className="w-1/2  h-full flex items-center">
//             <div className="flex justify-around w-3/5 h-full items-center ">
//               <TextWithHover displayText="Premium" />
//               <TextWithHover displayText="Support" />
//               <TextWithHover displayText="Download" />
//               <div className="h-1/2 border-r border-white"></div>
//             </div>
//             <div className="flex  w-2/5 h-full items-center justify-around">
//               <TextWithHover displayText="Upload songs" />
//               <div className="bg-white h-2/4 px-2 flex items-center justify-center rounded-full font-semibold cursor-pointer">
//                 AK
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="content px-10 overflow-auto">
//           <div className="text-white pb-8 pt-3 pl-2 text-2xl font-semibold">
//             My Songs
//           </div>
//           <div className="space-y-3">
//             {songData.map((item) => {
//               return (
//                 <SingleSongCard
//                   thumbnail={item.thumbnail}
//                   artist={item.artist}
//                   name={item.name}
//                   track={item.track}
//                   playSound={playSound}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const MyMusic = () => {
  const [songData, setSongData] = useState([]);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const playSound = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
  };

  useEffect(() => {
    //fetch data
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
      setSongData(response.data);
    };
    getData();
  });
  return (
    <LoggedInContainer curActiveScreen={"myMusic"}>
      <div className="text-white pb-8 pt-3 pl-2 text-2xl font-semibold">
        My Songs
      </div>
      <div className="space-y-3">
        {songData.map((item) => {
          return (
            <SingleSongCard
              thumbnail={item.thumbnail}
              artist={item.artist}
              name={item.name}
              track={item.track}
              playSound={playSound}
              songId={item._id}
            />
          );
        })}
      </div>
    </LoggedInContainer>
  );
};

export default MyMusic;
