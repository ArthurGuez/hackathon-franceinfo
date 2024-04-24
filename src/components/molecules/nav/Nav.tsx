import { NavItemWrapper, NavItemsWrapper, NavWrapper } from "./Nav.style";
import eye from "@/assets/svg/eye.svg";
import tv from "@/assets/svg/tv.svg";
import radio from "@/assets/svg/eye.svg";
import live from "@/assets/svg/live.svg";
import Logo from "@/components/atoms/logo/Logo";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <NavWrapper>
      <Logo />
      <Link to="/hackathon-franceinfo/topo">
        <NavItemsWrapper>
          <NavItemWrapper>
            <img src={eye} alt="Le Topo" />
            <div>Le Topo</div>
          </NavItemWrapper>
          <NavItemWrapper>
            <img src={tv} alt="TV" />
            <div>TV</div>
          </NavItemWrapper>
          <NavItemWrapper>
            <img src={radio} alt="Radio" />
            <div>Radio</div>
          </NavItemWrapper>
          <NavItemWrapper>
            <img src={live} alt="Live" />
            <div>Live</div>
          </NavItemWrapper>
        </NavItemsWrapper>
      </Link>
    </NavWrapper>
  );
}
