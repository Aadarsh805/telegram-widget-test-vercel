'use client';

import { useEffect } from 'react';

const TelegramAuthCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const telegramData = Object.fromEntries(params.entries());

    console.log('[TELEGRAM LOGIN DATA]', telegramData);

    // Save to localStorage
    localStorage.setItem('locallocallocaluser', JSON.stringify(telegramData));

    // Redirect to home or dashboard
    // window.location.href = '/';
  }, []);

  return <div>Logging you in with Telegram...</div>;
};

export default TelegramAuthCallback;
