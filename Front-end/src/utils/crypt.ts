import CryptoJS from "crypto-js";

const secretPass = "ASDsadasvzxc!!@ASdQWezxcdfgQWE123#$z";

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
