import { History } from "lucide-react";

export default function LeftUserOpt() {
  const options = [
    {
      icon: <History />,
      name: "History",
    },
    {
      icon: <img src="/icons/playlist.svg" alt="playlist" />,
      name: "Playlist",
    },
    {
      icon: <img src="/icons/yourvides.svg" alt="yourvides" />,
      name: "Your videos",
    },
    {
      icon: <img src="/icons/yourcourses.svg" alt="yourcourses" />,
      name: "Your courses",
    },
    {
      icon: <img src="/icons/watchLater.svg" alt="watchLater" />,
      name: "Watch Later",
    },
    {
      icon: <img src="/icons/likedvideos.svg" alt="likedvideos" />,
      name: "Liked videos",
    },
    {
      icon: <img src="/icons/downloads.svg" alt="downloads" />,
      name: "Downloads",
    },
  ];
  return (
    <>
      <div className="text-lg">
        <div className="my-2 mx-5 text-xl font-medium">You</div>
        <div className="flex flex-col">
          {options.map((item) => (
            <div className="flex text-lg p-2 mx-3 font-thin">
              <div>{item.icon}</div>
              <div className="mx-3">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
