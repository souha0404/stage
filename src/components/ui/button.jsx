import React from "react";

export const Button = ({ children, variant = "primary", className, ...props }) => {
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-100",
    ghost: "text-gray-500 hover:text-red-500 hover:bg-gray-100",
  };

  return (
    <button
      className={`px-4 py-2 rounded-md font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};