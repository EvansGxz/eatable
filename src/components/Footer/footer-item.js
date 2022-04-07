import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";
import { colors } from "../../styles";

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  display: flex;
  gap: 0.75rem;
  text-decoration: none;
  color: ${colors.gray};
  font-weight: 500;
  align-items: center;
  border-radius: 0.375rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: ${colors.ligthGray};
  }
  &:focus {
    outline: 1px solid ${colors.orange};
  }
  `;

function FooterItem({name, icon, to}){  
  return (
    <StyledNavLink
      to={to}
      style={({ isActive }) => {
        if (!isActive) return;
        return {
          backgroundColor: colors.orange,
          "&:hover": {
            backgroundColor: colors.ligthGray,
          },
          "&:visited": {
            color: colors.white,
          },
        };
      }}
    >
      {icon}
    </StyledNavLink>
  );
}

export default FooterItem;