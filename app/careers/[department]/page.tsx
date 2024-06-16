import Department from "@/components/careerChoice/department";
import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopAndBottomWrapper>
        <SideWrapper>
          <Department />
        </SideWrapper>
      </TopAndBottomWrapper>
    </main>
  );
}
