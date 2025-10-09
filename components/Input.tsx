import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => (
    <div className="flex flex-col gap-2">
        {label && (
            <label className="text-medium font-bold text-gray-200">{label}</label>
        )}
        <input
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white text-gray-900 shadow-sm placeholder-gray-400"
            {...props}
        />
    </div>
);

export default Input;