"use client";

import React from 'react';
export default function Button({ children }: { children: React.ReactNode;}) {
  return (
    <button
      onClick={() => alert('Order Placed!')}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
    >
      {children}
    </button>
  );
}   