export default function LeftMoreFromYoutube() {
  const apps = [
    {
      icon: <img src="/icons/youtubePremium.svg" alt="premium" />,
      name: "YouTube Premium",
    },
    {
      icon: <img src="/icons/youtubeStudio.svg" alt="studio" />,
      name: "YouTube Studio",
    },
    {
      icon: <img src="/icons/youtubeMusic.svg" alt="music" />,
      name: "YouTube Music",
    },
    {
      icon: <img src="/icons/youtubeKids.svg" alt="kids" />,
      name: "YouTube Kids",
    },
  ];
  return (
    <>
      <div className="text-lg my-4">
        <div className="my-2 mx-5 text-xl font-medium">Subscriptions</div>
        {apps.map((items) => (
          <div className="flex text-lg p-2 mx-3 font-thin">
            {items.icon}
            <div className="mx-3">{items.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
