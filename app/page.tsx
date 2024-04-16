import React from "react";
import Divider from "components/Divider";
import Hero from "components/about/Hero";
import PageWrapper from "components/PageWrapper";
import { manrope } from "lib/util/get-class";

export default function Home() {
  return (
    <PageWrapper>
      <div className="bg-white rounded-[20px] p-[40px] my-[20px]">
        <Divider />
        <Hero />
        <Divider />
      </div>
    </PageWrapper>
  );
}
