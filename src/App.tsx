import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import BackgroundBlobs from "./components/BackgroundBlobs.tsx";

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
import MayaAI from "./pages/MayaAI";
import Countdown from "./pages/Countdown";
import ThankYou from "./pages/ThankYou";
import Consult499 from "./pages/Consult499";

import 'swiper/css';
import 'swiper/css/autoplay';

import 'swiper/css';
import 'swiper/css/autoplay';

import 'react-phone-input-2/lib/style.css';

const queryClient = new QueryClient();

// Wrapper to use useLocation inside BrowserRouter
function BlobsConditional() {
  const { pathname } = useLocation();
  return pathname === "/product-updates" ? <BackgroundBlobs /> : null;
}

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <BlobsConditional />
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
                    <Route path="/maya-ai" element={<MayaAI />} />
                    <Route path="/countdown" element={<Countdown />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                    <Route path="/consult-499" element={<Consult499 />} />
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
}