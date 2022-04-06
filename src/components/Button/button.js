import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

function typeStyles() {
  return `
    background-color: ${colors.orange};
    color: ${colors.white};
    &:hover {
      background-color: ${colors.orange};
      opacity: 0.6;
    }
    &:active {
      background-color: ${colors.highorange};
    }
    &:focus {
      outline: 2px solid ${colors.highorange};
    }
  `;
}

function sizeStyles() {
  return `
    padding: 0.75rem 1rem;
    ${typography.semibold.md}
    line-height: 1em;
  `;
}

const StyledButton = styled.button`
  display: flex;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem ${({ rounded }) => (rounded ? "0.75rem" : "1rem")};
  background-color: ${colors.gray[200]};
  border-radius: 1.875rem;
  color: ${colors.orange};
  border: none;

  ${(props) => typeStyles(props.type)}
  ${(props) => sizeStyles(props.size, props.rounded)}
`;

function Button({ children, ...props }) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
};

export default Button;
