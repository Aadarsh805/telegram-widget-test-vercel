'use client'; // Only needed if you're in App Router

import { useEffect } from 'react';


declare global {
  interface Window {
    onTelegramAuth: (user: any) => void;
  }
}

const LoginWithTelegram = () => {
  useEffect(() => {
    const container = document.getElementById('telegram-login-container');
    if (!container) return;

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'login_widget_testing_bot');
    script.setAttribute('data-size', 'medium');
    script.setAttribute('data-radius', '14');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)'); // This triggers the callback on auth success
    script.setAttribute('data-request-access', 'write');

    // Clean container before adding the script
    container.innerHTML = '';
    container.appendChild(script);

    // Defining the onTelegramAuth callback function
    window.onTelegramAuth = (user) => {
      // Show user info alert
      alert(
        `Logged in as ${user.first_name} ${user.last_name} (${user.id}${user.username ? ', @' + user.username : ''})`
      );
      console.log('Logged in user:', user); // Log the user data for debugging

      // Save user info to localStorage
      localStorage.setItem('locallocallocaluser', JSON.stringify(user));

      // Optionally, you could send this data to your backend here as well
      // fetch('https://telegram-widget-test.vercel.app/save-user', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(user),
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log('User data saved:', data);
      //   })
      //   .catch((error) => {
      //     console.error('Error saving user data:', error);
      //   });
    };
  }, []);

  return <div id="telegram-login-container" />;
};

export default LoginWithTelegram;
