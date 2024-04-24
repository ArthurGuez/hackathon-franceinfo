import topo from "@/assets/svg/topo.svg";

import styled from "styled-components";
import Logo from "@/components/atoms/logo/Logo";
import { Link } from "react-router-dom";

export const SmallNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  height: 100%;
`;

const SmallNavWrapperLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  color: #fff;
`;

export default function SmallNav() {
  return (
    <SmallNavWrapper>
      <SmallNavWrapperLeft>
        <img src={topo} alt="Le Topo" />
        <h1>Le Topo</h1>
      </SmallNavWrapperLeft>
      <div className="flex items-center">
        <Link to="/hackathon-franceinfo">
          <Logo />
        </Link>
      </div>
    </SmallNavWrapper>
  );
}
