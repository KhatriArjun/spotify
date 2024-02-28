import { Icon } from "@iconify/react";
import IconText from "../component/shared/IconText";
import TextWithHover from "../component/shared/TextWithHover";
const firstPlaylist = [
  {
    title: "Peaceful Paino",
    description: "Relax and idulge with beautiful piano pieces",
    imgUrl:
      "https://images.unsplash.com/photo-1694898208375-f6239d967cb6?auto=format&fit=crop&q=80&w=1905&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with this music",
    imgUrl:
      "https://images.unsplash.com/photo-1698475378626-da1bcb22af6a?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Instrumental Study",
    description: "Focus with soft study music in the background",
    imgUrl:
      "https://images.unsplash.com/photo-1532153955177-f59af40d6472?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Focus Flow",
    description: "Uptempo instrumental hip hop beats",
    imgUrl:
      "https://images.unsplash.com/photo-1566518447933-8f9399038f23?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Beats to think to",
    description: "Focus with deep techno and tech house",
    imgUrl:
      "https://images.unsplash.com/photo-1583382525292-b14a53cb850b?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const secondPlaylist = [
  {
    title: "Today's Top Hits",
    description: "AK on the top of the Hottest 50",
    imgUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "RapCaviar",
    description: "Music from Gucci Mane,Kodak Black and many more",
    imgUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rock Classics",
    description: "Rock legends & epic songs  that continues to inspire you",
    imgUrl:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Chill Hits",
    description: "Kick back to the best new and recent chill hits.",
    imgUrl:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "DayDreamer",
    description: "Drift away with enthralling instrumentals.",
    imgUrl:
      "https://images.unsplash.com/photo-1570714436355-2556087f0912?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const thirdPlaylist = [
  {
    title: "Summer Sunshine",
    description: "Pop style reggage for a sunny vibe!",
    imgUrl:
      "https://images.unsplash.com/photo-1603802634667-7abab67d82d7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Country Christmas",
    description: "Country's legendary artist singing your favorites songs",
    imgUrl:
      "https://images.unsplash.com/photo-1474073705359-5da2a8270c64?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRheSUyMGRyZWFtfGVufDB8fDB8fHww",
  },
  {
    title: "One Love",
    description: "The best in old & new Reggae",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1670292072200-b3d7865e529b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGF5JTIwZHJlYW18ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Lofi beats",
    description: "Chill beats, lofi vibes, new tracks everytime",
    imgUrl:
      "https://images.unsplash.com/photo-1477085547885-8ee2d26e4efa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF5JTIwZHJlYW18ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Mega Hit mix",
    description: "A mega mix of 75 favorites from last weeks!!",
    imgUrl:
      "https://images.unsplash.com/photo-1545328732-fd7ea6242f4e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGF5JTIwZHJlYW18ZW58MHx8MHx8fDA%3D",
  },
];
const fourthPlaylist = [
  {
    title: "Positive Vibes",
    description: "Turn down that frown upside down",
    imgUrl:
      "https://images.unsplash.com/photo-1605055510925-4c9626126167?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlwJTIwaG9wfGVufDB8fDB8fHww",
  },
  {
    title: "Songs to sing in the shower",
    description: "Splash and sing along",
    imgUrl:
      "https://images.unsplash.com/photo-1461783436728-0a9217714694?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlwJTIwaG9wfGVufDB8fDB8fHww",
  },
  {
    title: "Happy Beats",
    description: "Feel good dance music",
    imgUrl:
      "https://images.unsplash.com/photo-1565970350234-0231bd6c6cdd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhpcCUyMGhvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Happy Favourites",
    description: "Put a happy smile on your face with these happy tunes",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1681182426594-5c89dc4f7728?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGlwJTIwaG9wfGVufDB8fDB8fHww",
  },
  {
    title: "Heart Beats",
    description: "Dance music for the heart <3",
    imgUrl:
      "https://images.unsplash.com/photo-1571901206014-d1ea0451855e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhpcCUyMGhvcHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Home = () => {
  return (
    <div className="flex  w-full h-full ">
      <div className="bg-black h-full w-1/5 flex flex-col justify-between pb-40">
        <div>
          <div className="logo">
            <Icon icon="logos:spotify" width="190" className="p-3" />
          </div>
          <div className="py-5">
            <IconText iconName="majesticons:home" displayText="Home" active />
            <IconText iconName="tabler:search" displayText="Search" />
            <IconText
              iconName="streamline:interface-content-book-2-library-content-books-book-shelf-stack"
              displayText="Your Library"
            />
          </div>
          <div className="pt-5">
            <IconText
              iconName="icon-park-solid:add"
              displayText="Create Playlist"
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
              <TextWithHover displayText="Sign up" />
              <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                Log in
              </div>
            </div>
          </div>
        </div>
        <div className="content px-10 mt-0 overflow-auto">
          <PlaylistView titleText="Focus" cardData={firstPlaylist} />
          <PlaylistView titleText="Have Fun" cardData={secondPlaylist} />
          <PlaylistView titleText="Country Music" cardData={thirdPlaylist} />
          <PlaylistView titleText="Sad" cardData={fourthPlaylist} />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ titleText, cardData }) => {
  return (
    <div className="text-white mt-10 pb-2">
      <div className="text-2xl font-semibold mb-5"> {titleText}</div>
      <div className="w-full flex justify-between space-x-5">
        {cardData.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              imageUrl={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-black bg-opacity-30 w-1/5 p-4">
      <div className="pb-4  pt-2 ">
        <img className="w-full  rounded-md" src={imageUrl} alt="label" />
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};
export default Home;
