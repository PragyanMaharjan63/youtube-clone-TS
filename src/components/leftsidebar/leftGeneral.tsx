import { Home } from "lucide-react";

export default function LeftGeneral() {
  const options = [
    {
      icon: <Home />,
      name: "home",
    },
    {
      icon: <img src="/icons/shorts.svg" alt="shorts" />,
      name: "Shorts",
    },
    {
      icon: <img src="/icons/library.svg" alt="library" />,
      name: "Subscriptions",
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        {options.map((item) => (
          <div className="flex text-lg p-2 mx-3">
            <div>{item.icon}</div>
            <p className="mx-3">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
