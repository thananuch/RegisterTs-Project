import { Value } from "./inputHandler";

const isEmpty = (value: any) => {
  return (
    !value ||
    value === null ||
    value === "" ||
    value === "0" ||
    value === "Invalid date"
  );
};

const validate = ({ jsonData }: { jsonData: any }) => {
  const errors: { [key: string]: string } = {};

  try {
    if ("name" in jsonData && isEmpty(jsonData.name)) {
      errors.name = "Please fill in name";
    }
    if ("lastname" in jsonData && isEmpty(jsonData.lastname)) {
      errors.lastname = "Please fill in lastname";
    }
    if ("email" in jsonData && isEmpty(jsonData.email)) {
      errors.email = "Please fill in email";
    }
    if ("phone" in jsonData && isEmpty(jsonData.phone)) {
      errors.phone = "Please fill in phone";
    }
    if ("address" in jsonData && isEmpty(jsonData.address)) {
      errors.address = "Please fill in address";
    }
    if ("gender" in jsonData && isEmpty(jsonData.gender)) {
      errors.gender = "Please fill in gender";
    }
    if ("id" in jsonData && isEmpty(jsonData.id)) {
      errors.id = "Please fill in id";
    }
    if ("password" in jsonData && isEmpty(jsonData.password)) {
      errors.password = "Please fill in password";
    }
    if ("conpassword" in jsonData && isEmpty(jsonData.conpassword)) {
      errors.conpassword = "Please fill in confirm password";
    }
    if ("birthDate" in jsonData && isEmpty(jsonData.birthDate)) {
      errors.birthDate = "Please fill in birthDate";
    }
  } catch (error) {
    console.error(error);
  }

  return errors;
};


//======================== validateProfile =========================
const validateProfile = ({ p }: { p: Value }) => {
  const profile = {
    name: p.name,
    lastname: p.lastname,
    email: p.email,
    phone: p.phone,
    address: p.address,
    gender: p.gender,
    birthDate: p.birthDate
  };

  return validate({ jsonData: profile });
};

const validateUserName = ({ u }: { u: Value }) => {
  const username = {
    id: u.id,
    password: u.password,
    conpassword: u.conpassword
  };

  return validate({ jsonData: username });
};


//======================== VALIDATE_PROC =========================
export const VALIDATE_PROC = {
  validateProfile: validateProfile,
  validateUserName: validateUserName
};
