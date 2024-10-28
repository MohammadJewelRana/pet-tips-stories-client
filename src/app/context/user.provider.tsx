"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { useGetSingleUserDetails } from "@/hooks/auth.hook";
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
  userDetails: any; // Update this to match the actual type of user details
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<any>(null); // Adjust type if necessary

  // Fetch current user on mount
  useEffect(() => {
    const handleUser = async () => {
      const currentUser = (await getCurrentUser()) || null;
      setUser(currentUser);
      setIsLoading(false);
    };
    handleUser();
  }, []);

  // Fetch user details whenever `user` changes
  const { data: fetchedUserDetails, isLoading: userDetailsLoading, isError, error } =
    useGetSingleUserDetails(user?.userId as string);

  useEffect(() => {
    if (fetchedUserDetails) {
      setUserDetails(fetchedUserDetails);
    } else if (isError) {
      console.error("Error fetching user details:", error);
    }
  }, [fetchedUserDetails, isError, error]);

  const userInfo = {
    user,
    isLoading: isLoading || userDetailsLoading,
    setIsLoading,
    setUser,
    userDetails,
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
