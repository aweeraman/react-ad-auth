import React from "react";
import { useMsal } from "@azure/msal-react";

export const SignOutButton: React.FC = () => {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutPopup().catch(e => {
            console.error(e);
        });
    }

    return (
        <button onClick={handleLogout}>Sign Out</button>
    );
}