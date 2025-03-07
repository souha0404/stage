import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white shadow-lg rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 style={{textAlign: 'center'}} className="text-xl font-bold">{children}</h2>
);

export const CardDescription = ({ children }) => (
  <p className="text-gray-500">{children}</p>
);

export const CardContent = ({ children }) => (
  <div className="space-y-4">{children}</div>
);