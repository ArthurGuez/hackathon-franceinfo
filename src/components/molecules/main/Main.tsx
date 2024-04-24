import type { ReactNode } from "react";
import { MainWrapper } from "./Main.style";

interface Props {
  children: ReactNode[];
}

export default function Main({ children }: Props) {
  return <MainWrapper>{children}</MainWrapper>;
}
