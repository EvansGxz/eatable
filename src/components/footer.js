import styled from "@emotion/styled";
import { useAuth } from "../context/auth-context";

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 50px;
  justify-content: space-between;
`;

const Styledh1 = styled.h3`
  display: inline-block;
  cursor: pointer;
`;
function Footer() {
  const { logout } = useAuth();
  return (
    <StyledFooter>
      <Styledh1>Home</Styledh1>
      <Styledh1>Profile</Styledh1>
      <Styledh1>History</Styledh1>
      <Styledh1 onClick={() => logout()}>Logout</Styledh1>
    </StyledFooter>
  );
}

export default Footer;
