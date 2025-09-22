import { UserRound } from "lucide-react";

export default function LeftSubscriptions() {
  const subsctiptions = [
    {
      icon: <UserRound className="p-2 size-9 bg-purple-700 rounded-full" />,
      name: "Person 1",
    },
    {
      icon: <UserRound className="p-2 size-9 bg-red-700 rounded-full" />,
      name: "Person 2",
    },
    {
      icon: <UserRound className="p-2 size-9 bg-blue-700 rounded-full" />,
      name: "Person 3",
    },
    {
      icon: <UserRound className="p-2 size-9 bg-green-700 rounded-full" />,
      name: "Person 4",
    },
    {
      icon: <UserRound className="p-2 size-9 bg-yellow-700 rounded-full" />,
      name: "Person 5",
    },
    {
      icon: <UserRound className="p-2 size-9 bg-pink-700 rounded-full" />,
      name: "Person 6",
    },
    {
      icon: <UserRound className="p-2 size-9 bg-sky-700 rounded-full" />,
      name: "Person 7",
    },
  ];
  return (
    <>
      <div className="text-lg my-4">
        <div className="my-2 mx-5 text-xl font-medium">Subscriptions</div>
        {subsctiptions.map((subscription) => (
          <div className="flex text-lg p-2 mx-3 font-thin">
            {subscription.icon}
            <div className="mx-3">{subscription.name}</div>
          </div>
        ))}
        <div className="m-4">Show More</div>
      </div>
    </>
  );
}
