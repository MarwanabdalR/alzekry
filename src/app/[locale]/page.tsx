import CoreExpertise from "@/components/CoreExpertise";
import FounderProfile from "@/components/FounderProfile";
import Home from "@/components/Home";
import BalanceIcon from "@/components/layout/BalanceIcon";
import Logo from "@/components/layout/Logo";
import NewsUpdates from "@/components/NewsUpdates";
import PracticeAreas from "@/components/PracticeAreas";
import OurPeople from "@/components/OurPeople";
import SplashScreen from "@/components/SplashScreen";

export default function Page() {
  return (
    <>
      <div className="">
        <SplashScreen />
        <Home />
        <FounderProfile />
        <CoreExpertise />
        {/* <AboutUs /> */}
        <Logo />
        {/* <OurExpertise /> */}
        <PracticeAreas />
        <OurPeople />
        <NewsUpdates />
        <BalanceIcon />
      </div>
    </>
  );
}
