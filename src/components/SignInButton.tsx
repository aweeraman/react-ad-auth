// src/components/SignInButton.tsx
import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

export const SignInButton: React.FC = () => {
    const { instance } = useMsal();

    const handleLogin = async () => {
        try {
            const response = await instance.loginPopup(loginRequest);
            console.log("Login successful", response.account);
            // You can add more specific logging here if needed
        } catch (e) {
            console.error("Login failed", e);
        }
    }

    return (
        <button onClick={handleLogin}>Sign In</button>
    );
}