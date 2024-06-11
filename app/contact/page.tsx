import FormSection from "@/components/contact/Form";
import InfoSection from "@/components/contact/Info";
import Testimonials from "@/components/home/testimonials";
import { SideWrapper, TopAndBottomWrapper } from "@/components/shared/Wrappers";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between">
      <TopAndBottomWrapper>
        <SideWrapper>
          <InfoSection />
          <FormSection />

          <Testimonials />
        </SideWrapper>
      </TopAndBottomWrapper>
    </main>
  );
}
