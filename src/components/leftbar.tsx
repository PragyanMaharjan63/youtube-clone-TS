import Divider from "../assets/ui/divider";
import LeftGeneral from "./leftsidebar/leftGeneral";
import LeftSubscriptions from "./leftsidebar/leftSubscriptions";
import LeftUserOpt from "./leftsidebar/leftUserOpt";

export default function Leftbar() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <LeftGeneral />
        <Divider />
        <LeftUserOpt />
        <Divider />
        <LeftSubscriptions />
      </div>
    </>
  );
}
