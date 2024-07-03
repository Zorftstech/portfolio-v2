import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";
import Talents from "@/components/talents/talents";

export default function Home() {
  return (
    <main>
      <TopAndBottomWrapper>
        <Talents />
      </TopAndBottomWrapper>
    </main>
  );
}
