import { createContext, ReactNode, useContext } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const userInfo = {
    user: { name: "jewel" },
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("use user must be used within the user provider context");
  }

  return context;
};

export default UserProvider;
