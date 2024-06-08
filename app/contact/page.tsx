import FormSection from "@/components/contact/Form";
import InfoSection from "@/components/contact/Info";
import { TopAndBottomWrapper } from "@/components/shared/Wrappers";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between">
      <TopAndBottomWrapper>
        <InfoSection />
        <FormSection />
      </TopAndBottomWrapper>
    </main>
  );
}
