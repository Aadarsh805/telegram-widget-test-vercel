'use client'; // Only needed if you're in App Router

import { useEffect } from "react";

const TelegramAuthCallback = () => {
  useEffect(() => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const telegramData = Object.fromEntries(params.entries());

    console.log("[TELEGRAM LOGIN DATA]", telegramData);

    // Check if necessary data is present in the URL
    if (telegramData) {
      // Save data to localStorage
      localStorage.setItem("telegramUser", JSON.stringify(telegramData));

      // Optional: Redirect to home or dashboard (after saving)
      // window.location.href = '/';
    } else {
      console.error("Telegram login data is missing or invalid.");
    }
  }, []);

  return <div>Logging you in with Telegram...</div>;
};

export default TelegramAuthCallback;
