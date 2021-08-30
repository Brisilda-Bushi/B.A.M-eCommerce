import React from "react";
import RegistrationForm from "../Components/RegistrationForm";
import ScrollButton from "../Components/ScrollButton"

import "../styles/RegistrationForm.css";

export default function RegistrationPage() {
  return (
    <div>
      <ScrollButton />
      <RegistrationForm />
    </div>
  );
}