
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import CursorGlow from "@/components/CursorGlow";

interface LayoutProps {
  children: ReactNode;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Layout = ({ children, onLoginClick, onSignupClick }: LayoutProps) => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-main-bg relative">
      <CursorGlow />
      <Header onLoginClick={onLoginClick} onSignupClick={onSignupClick} />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
