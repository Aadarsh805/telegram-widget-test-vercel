'use client'; // Only needed if you're in App Router

import { useEffect } from 'react';

const LoginWithTelegram = () => {
  useEffect(() => {
    const container = document.getElementById('telegram-login-container');
    if (!container) return;

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'login_widget_testing_bot');
    script.setAttribute('data-size', 'medium');

    // 👇 Set the frontend route you want Telegram to redirect to after login
    script.setAttribute('data-auth-url', 'http://localhost:3000/telegram-auth');
    // In production, you'd use your real domain like:
    // script.setAttribute('data-auth-url', 'https://yourdomain.com/telegram-auth');

    script.setAttribute('data-request-access', 'write');

    // Clean container before adding the script
    container.innerHTML = '';
    container.appendChild(script);
  }, []);

  return <div id="telegram-login-container" />;
};

export default LoginWithTelegram;
