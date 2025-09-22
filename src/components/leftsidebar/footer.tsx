export default function Footer() {
  const Footeritems = [
    {
      icon: <img src="/icons/settings.svg" alt="settings" />,
      name: "Settings",
    },
    {
      icon: <img src="/icons/reportHistory.svg" alt="report" />,
      name: "Report history",
    },
    {
      icon: <img src="/icons/help.svg" alt="help" />,
      name: "help",
    },
    {
      icon: <img src="/icons/sendFeedback.svg" alt="feedback" />,
      name: "Send Feedback",
    },
  ];
  return (
    <>
      <div className="text-lg my-4">
        {Footeritems.map((items) => (
          <div className="flex text-lg p-2 mx-3 font-thin">
            {items.icon}
            <div className="mx-3">{items.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
