
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import ReportAnalysis from "./pages/ReportAnalysis";
import ProductUpdates from "./pages/ProductUpdates";
import OurStory from "./pages/OurStory";
import Pricing from "./pages/Pricing";
import Partners from "./pages/Partners";
import CancellationRefunds from "./pages/CancellationRefunds";
import ShippingDelivery from "./pages/ShippingDelivery";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";

const queryClient = new QueryClient();

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <Layout onLoginClick={() => setShowLogin(true)} onSignupClick={() => setShowSignup(true)}>
                  <Index />
                </Layout>
              }
            />
            <Route 
              path="/home" 
              element={
                <Layout onLoginClick={() => setShowLogin(true)} onSignupClick={() => setShowSignup(true)}>
                  <Index />
                </Layout>
              }
            />
            <Route 
              path="/*" 
              element={
                <Layout onLoginClick={() => setShowLogin(true)} onSignupClick={() => setShowSignup(true)}>
                  <Routes>
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/report-analysis" element={<ReportAnalysis onLoginClick={() => setShowLogin(true)} onSignupClick={() => setShowSignup(true)} />} />
                    <Route path="/product-updates" element={<ProductUpdates />} />
                    <Route path="/our-story" element={<OurStory />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/cancellation-refunds" element={<CancellationRefunds />} />
                    <Route path="/shipping-delivery" element={<ShippingDelivery />} />
                    <Route path="/terms-conditions" element={<TermsConditions />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              } 
            />
          </Routes>
          <LoginModal open={showLogin} onOpenChange={setShowLogin} />
          <SignupModal open={showSignup} onOpenChange={setShowSignup} />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
