import React from "react";
import { CardRoot } from "./styles";

interface Props {
  children: React.ReactNode;
}

export const Card = ({ children }: Props) => {
  return <CardRoot>{children}</CardRoot>;
};
