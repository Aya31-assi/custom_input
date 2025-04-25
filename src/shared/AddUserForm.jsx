import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function AddUserForm() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    isBlocked: ""
  });
  

  return (
    <form >
      <CustomInput
        label="ID"
        type="number"
        name="id"
        id="id"
        value={formData.id}
      />
      <CustomInput
        label="Name"
        type="text"
        name="name"
        id="name"
        value={formData.name}
      />
      <CustomInput
        label="Email"
        type="email"
        name="email"
        id="email"
        value={formData.email}
      />
      <CustomInput
        label="Is Blocked"
        type="text"
        name="isBlocked"
        id="isBlocked"
        value={formData.isBlocked}
      />
      <CustomButton text="Submit" type="primary" />
    </form>
  );
}

export default AddUserForm;

