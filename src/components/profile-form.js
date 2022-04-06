import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Button from "./Button";
import Input from "./input";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 258px;
`;

export default function ProfileForm() {
  const { user, update } = useAuth();
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

  function handleFormChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        id="name"
        label="Name"
        placeholder="John"
        value={form.name}
        onChange={handleFormChange}
        error={errors.name}
      />
      <Input value={user.email} readOnly="readonly" />

      <Input
        id="phone"
        label="Phone"
        placeholder="933 553 159"
        value={form.phone}
        onChange={handleFormChange}
        error={errors.phone}
      />

      <Input
        id="address"
        label="Address"
        placeholder="Calle 16 N°214, Mexico"
        value={form.address}
        onChange={handleFormChange}
        error={errors.address}
      />
      <Button isFullWidth type="primary">
        Update
      </Button>
    </StyledForm>
  );
}
