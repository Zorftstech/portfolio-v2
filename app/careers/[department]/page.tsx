<<<<<<< HEAD
import BePartOfOurTeam from "@/components/careers/bepartOfOurTeam";
=======
import Department from "@/components/careerChoice/department";
import JobForm from "@/components/careerChoice/jobApplication";
>>>>>>> bb922532664b7968cdb886d1a3827d93b843a907
import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TopAndBottomWrapper>
        <SideWrapper>
<<<<<<< HEAD
          <BePartOfOurTeam />
=======
          <Department />
          <JobForm />
>>>>>>> bb922532664b7968cdb886d1a3827d93b843a907
        </SideWrapper>
      </TopAndBottomWrapper>
    </main>
  );
}
