import React, { useState, createContext, useContext } from "react";

const SelectContext = createContext();

export const Select = ({ children, onValueChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onValueChange) onValueChange(value);
  };

  return (
    <SelectContext.Provider
      value={{ isOpen, setIsOpen, selectedValue, handleSelect }}
    >
      <div className={`relative ${className}`}>{children}</div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger = ({ children, className }) => {
  const { setIsOpen, selectedValue } = useContext(SelectContext);
  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className={`block w-full px-3 py-2 text-left text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 ${className}`}
    >
      {selectedValue || children || "Select..."}
    </button>
  );
};

export const SelectValue = ({ placeholder, className }) => {
  const { selectedValue } = useContext(SelectContext);
  return (
    <span className={`text-sm ${className}`}>
      {selectedValue || placeholder || "Select..."}
    </span>
  );
};

export const SelectContent = ({ children, className }) => {
  const { isOpen } = useContext(SelectContext);
  return (
    isOpen && (
      <div
        className={`absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg ${className}`}
      >
        {children}
      </div>
    )
  );
};

export const SelectItem = ({ value, children, className }) => {
  const { handleSelect } = useContext(SelectContext);
  return (
    <div
      onClick={() => handleSelect(value)}
      className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${className}`}
    >
      {children}
    </div>
  );
};