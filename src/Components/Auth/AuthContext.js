import React, { createContext, useState, useEffect } from "react";

import TokenManager from "../../Managers/TokenManager";

// Create a context object
export const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!TokenManager.getToken());

  const login = (token) => {
    TokenManager.saveToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    TokenManager.clearToken();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    setIsAuthenticated(!!TokenManager.getToken());
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
