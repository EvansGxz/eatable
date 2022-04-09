import styled from "@emotion/styled";
import { typography } from "../../styles";
import { colors } from "../../styles/colors";
import { NavLink } from "react-router-dom";

export const NavCategories = styled.div`
  font-weight: ${typography.regular.sm};
  line-height: 20px;
  text-align: center;
  color: ${colors.DarkGray};
  ${typography.semibold.lg};
  margin-bottom: 1.5rem;
`;

export const Category = styled.span`
  padding-bottom: 10px;
  cursor: pointer;
`;

export const NavContainer = styled.span`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerDishes = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  height: 70vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 9.75rem;
  height: 13.25rem;
  border-radius: 30px;
  position: relative;
  background-color: ${colors.white};
  align-items: center;
  margin-top: 40px;
  padding: 100px 13px 26px 13px;
  gap: 0.75rem;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  ${typography.semibold.lg};
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 8.125rem;
  height: 8.125rem;
  position: absolute;
  top: -40px;
  box-shadow: 0px 10px 17px 8px rgb(57 57 57 / 15%);
`;

export const NameDish = styled.p`
  font-style: normal;
  ${typography.semibold.lg};
  line-height: 35px;
  text-align: center;
  text-transform: capitalize;
`;

export const PriceDish = styled.p`
  font-style: normal;
  ${typography.semibold.lg};
  line-height: 28px;
  text-align: center;
  color: ${colors.orange};
`;

export const TitleDescription = styled.p`
  ${typography.semibold.md};
  line-height: 23px;
  align-self: flex-start;
`;

export const DescriptionDish = styled.p`
  ${typography.regular.sm};
  line-height: 23px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &:visited {
    text-decoration: none;
  }
`;

export const ContainerDishPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const ContainerTotal = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const Total = styled.p`
  padding-top: 1rem;
  ${typography.regular.xs}
  color: ${colors.dark}
`;
export const TotalValue = styled.p`
  padding-top: 1rem;
  ${typography.semibold.md}
  color: ${colors.dark}
`;
export const FooterDishPage = styled.div`
  position: fixed;
  bottom: 4.5rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
