import styled from "@emotion/styled";
import { HiHome } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { MdHistory } from "react-icons/md";
import FooterItem from "./footer-item";
//import { useAuth } from "../context/auth-context";
import { colors } from '../../styles/colors';

const Wrapper = styled.div`
  display: flex;
  padding: 15px 70px 30px 70px;
  box-sizing: border-box;
  justify-content: space-between;
  
`;

//border-top: 1px solid ${colors.DarkGray};

function Footer() {

  const navigation = [
    {
      name: "home",
      to: "/home",
      icon: <HiHome size={25}/>,
    },
    {
      name: "profile",
      icon: <BsPersonFill size={25}/>,
      to: "/profile",
    },
    { name: "history", to: "/history", icon: <MdHistory size={25}/> },
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
