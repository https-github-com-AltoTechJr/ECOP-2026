import NavBar from "./src/components/molecules/NavBar";
import Sponsors from "./src/components/molecules/Sponsors";
import TimerSection from "./src/components/organisms/Timer";

export default function Home() {
  return (
    <>
      <NavBar />
      <TimerSection />
      <Sponsors />
    </>
  );
}