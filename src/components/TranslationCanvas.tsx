'use client';

import React from 'react';
import Editor from '@monaco-editor/react';

interface TranslationCanvasProps {
    sourceCode: string;
    targetCode: string;
    sourceLang: string;
    targetLang: string;
    onSourceChange: (value: string | undefined) => void;
    isLoading: boolean;
}

export function TranslationCanvas({
    sourceCode,
    targetCode,
    sourceLang,
    targetLang,
    onSourceChange,
    isLoading,
}: TranslationCanvasProps) {
    return (
        <div className="flex flex-1 overflow-hidden border-t border-gray-800">
            {/* Source Panel */}
            <div className="flex-1 flex flex-col border-r border-gray-800 relative">
                <Editor
                    height="100%"
                    language={sourceLang.toLowerCase()}
                    theme="vs-dark"
                    value={sourceCode}
                    onChange={onSourceChange}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        padding: { top: 20 },
                        scrollBeyondLastLine: false,
                    }}
                />
            </div>

            {/* Target Panel */}
            <div className="flex-1 flex flex-col relative bg-[#1e1e1e]">
                {isLoading && (
                    <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                )}
                <Editor
                    height="100%"
                    language={targetLang.toLowerCase()}
                    theme="vs-dark"
                    value={targetCode}
                    options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        fontSize: 14,
                        padding: { top: 20 },
                        scrollBeyondLastLine: false,
                    }}
                />
            </div>
        </div>
    );
}
