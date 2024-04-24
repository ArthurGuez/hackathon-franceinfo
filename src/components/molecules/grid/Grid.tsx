import type { ReactNode } from "react";
import { GridWrapper } from "./Grid.style";

interface Props {
  children: ReactNode[];
}

export default function Grid({ children }: Props) {
  return <GridWrapper>{children}</GridWrapper>;
}
