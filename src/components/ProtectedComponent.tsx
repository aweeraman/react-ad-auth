import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useAccessToken } from "../hooks/useAccessToken";

export const ProtectedComponent: React.FC = () => {
    const accessToken = useAccessToken();

    return (
        <>
            <AuthenticatedTemplate>
                <p>This will only be visible when a user is authenticated.</p>
                <p>Access Token: {accessToken}</p>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p>This will only be visible when a user is NOT authenticated.</p>
            </UnauthenticatedTemplate>
        </>
    );
}