import React from 'react';
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from './components/SignInButton';
import { SignOutButton } from './components/SignOutButton';
import { ProtectedComponent } from './components/ProtectedComponent';

const App: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div>
      <h1>Azure AD Authentication Example</h1>
      {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      <ProtectedComponent />
    </div>
  );
}

export default App;