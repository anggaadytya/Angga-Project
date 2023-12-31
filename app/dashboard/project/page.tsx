import React, { lazy } from "react";
import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import { METADATA } from "@/constant/metadata";
import { Metadata } from "next";
const Lazy = lazy(() => import("@/modules/project"));

export const metadata: Metadata = {
  title: `${METADATA.creator} | Project`,
  description: "Project All Showing Page",
  keywords: "portofolio frontend developer",
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboard/project`,
  },
};

export default function page() {
  return (
    <Container>
      <BackButton url="/dashboard" />
      <Lazy />
    </Container>
  );
}
