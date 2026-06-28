import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

export const registerService = async (userData) => {
  const { name, email, password } = userData;

  // MongoDB Logic Will Come Here

  const hashedPassword = await bcrypt.hash(password, 10);

  return {
    success: true,
    message: "Register service ready",
    hashedPassword,
    token: generateToken("temporary-user-id"),
    data: {
      name,
      email,
    },
  };
};

export const loginService = async (loginData) => {
  const { email } = loginData;

  return {
    success: true,
    message: "Login service ready",
    token: generateToken("temporary-user-id"),
    data: {
      email,
    },
  };
};