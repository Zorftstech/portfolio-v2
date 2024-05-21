import { IChildrenProps } from "@/lib/types";
import React from "react";

export const SideWrapper = ({ children }: IChildrenProps) => {
  return <div className="w-[90vw] max-w-7xl mx-auto">{children}</div>;
};

export const TopAndBottomWrapper = ({ children }: IChildrenProps) => {
  return <div className="pt-[100px] pb-20">{children}</div>;
};
