import styled from "@emotion/styled";
import { BiCategoryAlt } from "react-icons/bi";
import { BsReceiptCutoff } from "react-icons/bs";
import { GiTargeted } from "react-icons/gi";
import FooterItem from "./footer-item";
//import { useAuth } from "../context/auth-context";

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
`;


function Footer() {
  //const { logout } = useAuth();

  const navigation = [
    {
      name: "home",
      to: "/home",
      icon: <BiCategoryAlt />,
    },
    {
      name: "profile",
      icon: <BsReceiptCutoff />,
      to: "/profile",
    },
    { name: "history", to: "/history", icon: <GiTargeted /> },
  ];



  return (
    
    <Wrapper>
    {navigation.map((nav) => (
      <FooterItem key={nav.name} {...nav} />
    ))}
    </Wrapper>
  );
}

export default Footer;
