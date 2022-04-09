import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";
import { colors } from "../../styles";

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  display: flex;
  color: ${colors.gray};
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    color: ${colors.DarkGray};
  } 
  `;

  //background-color: ${colors.ligthGray};
function FooterItem({icon, to}){  
  return (
    <StyledNavLink
      to={to}
      style={({ isActive }) => {
        if (!isActive) return;
        return {
          color: colors.orange,
        };
      }}
    >
      {icon}
    </StyledNavLink>
  );
}

export default FooterItem;