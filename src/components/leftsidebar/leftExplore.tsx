export default function LeftExplore() {
  const Explores = [
    {
      icon: <img src="/icons/music.svg" alt="music" />,
      name: "Music",
    },
    {
      icon: <img src="/icons/gaming.svg" alt="gaming" />,
      name: "Gaming",
    },
    {
      icon: <img src="/icons/sport.svg" alt="sport" />,
      name: "Sport",
    },
  ];
  return (
    <>
      <div className="text-lg my-4">
        <div className="my-2 mx-5 text-xl font-medium">Explore</div>
        {Explores.map((section) => (
          <div className="flex text-lg p-2 mx-3 font-thin">
            {section.icon}
            <div className="mx-3">{section.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
