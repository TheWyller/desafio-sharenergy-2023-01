import CryptoJS from "crypto-js";
import env from "react-dotenv";

const secretPass = env.SECRET_KEY;

export const encryptData = (text: string) => {
  const data = CryptoJS.AES.encrypt(
    JSON.stringify(text),
    secretPass
  ).toString();

  return data;
};

export const decryptData = (text: string) => {
  const bytes = CryptoJS.AES.decrypt(text, secretPass);
  const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return data;
};
