import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
    posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_KEY, {
      api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
      capture_pageview: true, // Moved here
      capture_pageleave: true, // Moved here
      // Enable debug mode in development
      loaded: (posthog) => {
        if (import.meta.env.MODE === 'development') posthog.debug();
      }
    })
  }
  
  createRoot(document.getElementById("root")!).render(
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  );