'use client';

import { useEffect } from 'react';

const LoginWithTelegram = () => {
  useEffect(() => {
    const container = document.getElementById('telegram-login-container');
    if (!container) return;

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;

    // 🔁 Replace with your actual bot username (NO @ symbol)
    script.setAttribute('data-telegram-login', 'auth_widget_test_bot');

    script.setAttribute('data-size', 'large');
    script.setAttribute('data-radius', '14');

    // ✅ This must match the domain you set with BotFather
    script.setAttribute('data-auth-url', 'https://telegram-widget-test-server.vercel.app/telegram-auth');

    // Clean and add script
    container.innerHTML = '';
    container.appendChild(script);
  }, []);

  return <div id="telegram-login-container" />;
};

export default LoginWithTelegram;
