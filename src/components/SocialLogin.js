// src/components/SocialLogin.js

import React from 'react';

const backendUrl = 'http://localhost:5000/api/auth'; // Change this to your production backend URL after deployment

const SocialLogin = () => {
  return (
    <div className="flex flex-col space-y-2 mt-4">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => window.location.href = `${backendUrl}/google`}
      >
        Continue with Google
      </button>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => window.location.href = `${backendUrl}/facebook`}
      >
        Continue with Facebook
      </button>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded"
        onClick={() => window.location.href = `${backendUrl}/github`}
      >
        Continue with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
