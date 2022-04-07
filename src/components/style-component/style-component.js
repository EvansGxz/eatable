import styled from "@emotion/styled";
import { typography } from "../../styles";
import { colors } from "../../styles/colors";

export const NavCategories = styled.div`
  font-weight: ${typography.regular.sm};
  line-height: 20px;
  text-align: center;
  color: ${colors.DarkGray};
  font-weight: ${typography.semibold.lg};
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
`;
