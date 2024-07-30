// src/hooks/useAccessToken.ts
import { useState, useEffect } from 'react';
import { useMsal } from "@azure/msal-react";
import { InteractionRequiredAuthError } from '@azure/msal-browser';
import { loginRequest } from "../authConfig";

export const useAccessToken = () => {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const getAccessToken = async () => {
      if (accounts.length > 0) {
        const request = {
          ...loginRequest,
          account: accounts[0]
        };

        try {
          const response = await instance.acquireTokenSilent(request);
          setAccessToken(response.accessToken);
        } catch (error) {
          if (error instanceof InteractionRequiredAuthError) {
            instance.acquireTokenPopup(request).then((response) => {
              setAccessToken(response.accessToken);
            });
          }
          console.error(error);
        }
      }
    };

    getAccessToken();
  }, [instance, accounts]);

  return accessToken;
};