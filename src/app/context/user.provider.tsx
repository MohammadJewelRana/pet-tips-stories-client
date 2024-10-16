"use client"

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { useGetUserDetails } from "@/hooks/auth.hook";
import { getCurrentUser } from "@/services/AuthService";

export interface IUser {
  userId: string;
  name: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

interface IUserProviderValues {
  user: IUser | null;
  isLoading: boolean;
  userDetails: any; // Update according to your user details structure
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<any>(null);  

  // Fetch current user on mount
  useEffect(() => {
    const handleUser = async () => {
      const currentUser = await getCurrentUser() || undefined;

      setUser(currentUser);

      setIsLoading(false);
    };

    handleUser();
  }, []);

  // Use the hook to fetch user details
  const {
    data: userDetailData,
    error,
    isLoading: userDetailsLoading,
  } = useGetUserDetails(user?.userId || "");
  // console.log(user?.userId);
  
  // console.log(userDetailData);
  

  // Set user details when fetched
  useEffect(() => {
    if (userDetailData) {
      setUserDetails(userDetailData);
    }
  }, [userDetailData]);

    // console.log(userDetailData);
    // console.log(userDetails);
    

  const userInfo = {
    user,
    isLoading: isLoading || userDetailsLoading,
    userDetails,
    setIsLoading,
    setUser,
    userDetailData
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};

export default UserProvider;
