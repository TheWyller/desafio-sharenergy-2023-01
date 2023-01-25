import React from "react";
import { Ichildren } from "../interfaces/react.interfaces";
import { CreateClientProvider } from "./CreateClientContext";
import { EditClientProvider } from "./EditClientContext";
import { GetAllClientsProvider } from "./GetAllClientsContext";
import { LoginProvider } from "./LoginContext";
import { SignUpProvider } from "./SignUpContext";

const Providers = ({ children }: Ichildren) => {
  return (
    <GetAllClientsProvider>
      <LoginProvider>
        <SignUpProvider>
          <CreateClientProvider>
            <EditClientProvider>{children}</EditClientProvider>
          </CreateClientProvider>
        </SignUpProvider>
      </LoginProvider>
    </GetAllClientsProvider>
  );
};

export default Providers;
