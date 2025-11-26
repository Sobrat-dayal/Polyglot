import { useState, useCallback, useEffect } from 'react';

export function useTranslation() {
    const [sourceCode, setSourceCode] = useState('');
    const [targetCode, setTargetCode] = useState('');
    const [sourceLang, setSourceLang] = useState('Python');
    const [targetLang, setTargetLang] = useState('JavaScript');
    const [isLoading, setIsLoading] = useState(false);

    // Debounce translation trigger
    useEffect(() => {
        const timer = setTimeout(() => {
            if (sourceCode.trim()) {
                handleTranslate();
            }
        }, 800);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sourceCode, sourceLang, targetLang]);

    const handleTranslate = async () => {
        if (!sourceCode.trim()) return;

        setIsLoading(true);
        try {
            // Point to the Python Flask API (defaulting to localhost:5000 if not proxied)
            const apiUrl = 'http://localhost:5000/api/translate';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    source_code: sourceCode,
                    source_lang: sourceLang,
                    target_lang: targetLang,
                }),
            });

            const data = await response.json();
            if (data.translated_code) {
                setTargetCode(data.translated_code);
            } else if (data.code) {
                setTargetCode(data.code);
            } else {
                console.error('Translation error:', data.error);
                setTargetCode(`// Error: ${data.error || 'Translation failed'}`);
            }
        } catch (error) {
            console.error('Translation failed:', error);
            setTargetCode('// Error: Network request failed. Is the backend running?');
        } finally {
            setIsLoading(false);
        }
    };

    const swapLanguages = useCallback(() => {
        setSourceLang(targetLang);
        setTargetLang(sourceLang);
        setSourceCode(targetCode);
        setTargetCode(sourceCode);
    }, [sourceLang, targetLang, sourceCode, targetCode]);

    return {
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
    };
}
