import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import Button from "../Button/index";
import Input from "../input";
import { LoggedOut } from "../../stories/Header.stories";
import { logout } from "../../services/session-service";
import { useNavigate } from "react-router-dom";

const ContainerCardProfile = styled.div`
  width: 315px;
  /* height: 197px; */
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
  min-width: 258px;
`;

export function CardProfile({
  disabled,
  change,
  personalData,
  type,
  onChange,
  exist,
}) {
  const { update, user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    address: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    update(personalData)
      .then(navigate("/home"))
      .catch((error) => {
        console.log(error);
        const newErrors = JSON.parse(error.message);
        setErrors({ ...errors, ...newErrors });
      });
  }

  return (
    <ContainerCardProfile>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Name"
          placeholder="John"
          value={personalData.name}
          onChange={onChange}
          error={errors.name}
          disabled={disabled}
          styled={{ backgroundColor: "white" }}
        />
        {type !== "checkout" ? (
          <Input
            label="Email"
            placeholder="JohnDoe@mail.com"
            value={personalData.email}
            onChange={onChange}
            // readOnly="readonly"
            disabled={type === "checkout" ? disabled : null}
          />
        ) : null}
        <Input
          id="phone"
          label="Phone"
          placeholder="933 553 159"
          value={personalData.phone}
          onChange={onChange}
          error={errors.phone}
          disabled={disabled}
          styled={{ backgroundColor: "white" }}
        />
        <Input
          id="address"
          label="Address"
          placeholder="Calle 16 N°214, Mexico"
          value={personalData.address}
          onChange={onChange}
          error={errors.address}
          disabled={disabled}
          styled={{ backgroundColor: "white" }}
        />
        {console.log(
          "%c 🚜: CardProfile -> change, exist ",
          "font-size:16px;background-color:#804b93;color:white;",
          change,
          exist
        )}
        {(change || !user.name) && type !== "checkout" ? (
          <Button isFullWidth type="primary" style={{ margin: "1rem 0" }}>
            update
          </Button>
        ) : null}
      </StyledForm>
    </ContainerCardProfile>
  );
}
