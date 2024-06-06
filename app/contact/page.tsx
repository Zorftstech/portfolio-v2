import FormSection from "@/components/contact/Form";
import InfoSection from "@/components/contact/Info";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between">
      <InfoSection />
      <FormSection />
    </main>
  );
}
