export default function TopSections() {
  const sections: string[] = [
    "Music",
    "Mixes",
    "Gaming",
    "Computer Programminmg",
    "Computer hardware",
    "Podcasts",
    "live",
    "Music of Nepal",
    "Indian pop music",
    "Comedy clubs",
    "Atoms",
    "Electrical Engineering",
    "Indie Rock",
    "Alternative Metal",
    "History",
  ];
  return (
    <>
      <div className="flex gap-x-1 overflow-hidden">
        <div className="bg-[#fff] w-max px-3 py-1 rounded-md text-black">
          All
        </div>
        {sections.map((item) => (
          <div className="bg-[#272727] min-w-max px-3 py-1 rounded-md">
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
