import type { ReactNode } from "react";
import { CardWrapper } from "./Card.style";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return <CardWrapper>{children}</CardWrapper>;
}
