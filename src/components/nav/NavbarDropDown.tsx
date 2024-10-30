"use client";

import { useUser } from "@/app/context/user.provider";
import { logout } from "@/services/AuthService";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import img from "@/assets/profile/profilePicture/dp.jpg";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function NavbarDropdown() {
  const router = useRouter();
  const { user, setIsLoading: userLoading } = useUser();
  // console.log(user);
  // const pathname = usePathname();

  const handleLogout = () => {
    logout();
    // userLoading(true);
    router.push("/login");
    toast("Successfully Logged out!!");
  };

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={img.src} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation("/profile")}>
          Profile
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/admin")}>
          Dashboard
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/settings")}>
          Settings
        </DropdownItem>
 

        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onClick={() => handleLogout()}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
