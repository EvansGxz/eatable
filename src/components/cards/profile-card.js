import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import Button from "../Button/index";
import Input from "../input";

const ContainerCardProfile = styled.div`
  width: 315px;
  height: 197px;
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
  user,
  update,
  onUpdate,
  onChange,
}) {
  // const { user, update } = useAuth();
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

    update(form).catch((error) => {
      console.log(error);
      const newErrors = JSON.parse(error.message);
      setErrors({ ...errors, ...newErrors });
    });
  }

  return (
    <ContainerCardProfile>
      <StyledForm onSubmit={onUpdate}>
        <Input
          id="name"
          label="Name"
          placeholder="John"
          defaultValue={user.name}
          onChange={onChange}
          error={errors.name}
          disabled={disabled}
          styled={{ backgroundColor: "white" }}
        />

        <Input
          id="phone"
          label="Phone"
          placeholder="933 553 159"
          value={user.phone}
          onChange={onChange}
          error={errors.phone}
          disabled={disabled}
          styled={{ backgroundColor: "white" }}
        />

        <Input
          id="address"
          label="Address"
          placeholder="Calle 16 N°214, Mexico"
          value={user.address}
          onChange={onChange}
          error={errors.address}
          disabled={disabled}
          styled={{ backgroundColor: "white" }}
        />
        {change ? (
          <Button isFullWidth type="primary" style={{ margin: "1rem 0" }}>
            confirm
          </Button>
        ) : null}
      </StyledForm>
    </ContainerCardProfile>
  );
}
