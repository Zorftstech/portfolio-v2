import Department from "@/components/careerChoice/department";
import JobForm from "@/components/careerChoice/jobApplication";
import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";

export default function Departments() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopAndBottomWrapper>
        <SideWrapper>
          <Department />
          <JobForm />
        </SideWrapper>
      </TopAndBottomWrapper>
    </main>
  );
}
