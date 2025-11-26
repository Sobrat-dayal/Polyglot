'use client';

import React from 'react';
import { ArrowRightLeft, Copy, Download, Share2, Sparkles } from 'lucide-react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { TranslationCanvas } from '@/components/TranslationCanvas';
import { useTranslation } from '@/hooks/useTranslation';

const LANGUAGES = [
  'Python', 'JavaScript', 'TypeScript', 'Go', 'Rust',
  'Java', 'C++', 'C#', 'Ruby', 'PHP', 'Swift'
];

export default function PolyglotPage() {
  const {
    sourceCode,
    setSourceCode,
    targetCode,
    sourceLang,
    setSourceLang,
    targetLang,
    setTargetLang,
    isLoading,
    swapLanguages,
    handleTranslate
  } = useTranslation();

  return (
    <div className="flex h-screen flex-col bg-[#0e0e0e] text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-800 px-6 py-4 bg-[#161616]">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">Polyglot</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Placeholder for user profile or settings */}
        </div>
      </header>

      {/* Control Bar */}
      <div className="flex items-center justify-between border-b border-gray-800 px-6 py-3 bg-[#161616]">
        <div className="flex items-center space-x-4 flex-1">
          <LanguageSelector
            selected={sourceLang}
            onChange={setSourceLang}
            options={LANGUAGES}
            label="Source"
          />

          <button
            onClick={swapLanguages}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors text-gray-400 hover:text-white"
            title="Swap Languages"
          >
            <ArrowRightLeft className="w-5 h-5" />
          </button>

          <LanguageSelector
            selected={targetLang}
            onChange={setTargetLang}
            options={LANGUAGES}
            label="Target"
          />
        </div>

        <button
          onClick={handleTranslate}
          disabled={isLoading || !sourceCode.trim()}
          className={`
            flex items-center space-x-2 px-6 py-2.5 rounded-lg font-medium transition-all
            ${isLoading || !sourceCode.trim()
              ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20'}
          `}
        >
          <span>{isLoading ? 'Translating...' : 'Translate'}</span>
        </button>
      </div>

      {/* Main Canvas */}
      <TranslationCanvas
        sourceCode={sourceCode}
        targetCode={targetCode}
        sourceLang={sourceLang}
        targetLang={targetLang}
        onSourceChange={(val) => setSourceCode(val || '')}
        isLoading={isLoading}
      />

      {/* Footer / Actions */}
      <div className="border-t border-gray-800 bg-[#161616] px-6 py-3 flex justify-between items-center text-sm text-gray-400">
        <div className="flex space-x-6">
          <button className="flex items-center space-x-2 hover:text-white transition-colors">
            <Copy className="w-4 h-4" />
            <span>Copy</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-white transition-colors">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
        <div className="flex space-x-6">
          <button className="flex items-center space-x-2 hover:text-white transition-colors">
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}
