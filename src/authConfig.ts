// src/authConfig.ts
import { Configuration, PublicClientApplication } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "50de5e9b-210c-47ef-9c7f-9c4390830eed", // Replace with your Azure AD app's client ID
    authority: "https://login.microsoftonline.com/4258257d-d3fc-442c-9839-27f31a89da9e", // Replace with your tenant ID
    redirectUri: "http://localhost:5173", // Replace with your redirect URI
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);

// Ensure the MSAL instance is properly initialized
await msalInstance.initialize().then(() => {
  // MSAL is initialized and ready to use
  console.log("MSAL initialized");
}).catch((error) => {
  console.error("MSAL initialization failed", error);
});

export const loginRequest = {
  scopes: ["User.Read"]
};