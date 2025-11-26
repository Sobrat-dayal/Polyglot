import React from 'react';
import { ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
    selected: string;
    onChange: (lang: string) => void;
    options: string[];
    label?: string;
}

export function LanguageSelector({ selected, onChange, options, label }: LanguageSelectorProps) {
    return (
        <div className="relative group">
            {label && <span className="text-xs text-gray-400 mb-1 block">{label}</span>}
            <div className="flex items-center space-x-2 cursor-pointer bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors">
                <select
                    value={selected}
                    onChange={(e) => onChange(e.target.value)}
                    className="appearance-none bg-transparent border-none text-white font-medium focus:outline-none cursor-pointer w-full pr-8"
                >
                    {options.map((opt) => (
                        <option key={opt} value={opt} className="bg-gray-800 text-white">
                            {opt}
                        </option>
                    ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 pointer-events-none" />
            </div>
        </div>
    );
}
