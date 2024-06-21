import React from "react";
import ServiceInnerPage from "@/components/services";
import { TopAndBottomWrapper } from "@/components/shared/Wrappers";

export default function Home() {
  return (
    <TopAndBottomWrapper>
      <main className="flex min-h-screen flex-col items-center">
        <ServiceInnerPage />
      </main>
    </TopAndBottomWrapper>
  );
}
