import Divider from "../assets/ui/divider";
import Footer from "./leftsidebar/footer";
import LeftExplore from "./leftsidebar/leftExplore";
import LeftGeneral from "./leftsidebar/leftGeneral";
import LeftMoreFromYoutube from "./leftsidebar/leftMoreFromYoutube";
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
        <Divider />
        <LeftExplore />
        <Divider />
        <LeftMoreFromYoutube />
        <Divider />
        <Footer />
      </div>
    </>
  );
}
