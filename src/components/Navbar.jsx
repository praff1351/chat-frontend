import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  LogOut,
  LogOutIcon,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <header>
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1 px-8">
          <MessageSquare className="s-5 text-primary " />
          <Link to="/" className="btn btn-ghost text-xl">
            Chatty
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to={"/settings"}
            className={`
              btn btn-sm gap-2 transition-colors
              
              `}
          >
            <Settings className="size-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>
          {authUser && (
            <>
              <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                <User className="size-5" />
                <span className="hidden sm:inline">Profile</span>{" "}
              </Link>
              <button className="flex gap-2 items-center" onClick={logout}>
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Logout</span>{" "}
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
