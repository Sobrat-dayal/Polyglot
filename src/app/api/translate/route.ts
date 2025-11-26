import { NextResponse } from 'next/server';
import { LanguageRegistry } from '@/engine/Translator';

export async function POST(request: Request) {
    try {
        const { sourceCode, fromLang, toLang } = await request.json();

        if (!sourceCode || !fromLang || !toLang) {
            return NextResponse.json(
                { error: 'Missing required fields: sourceCode, fromLang, toLang' },
                { status: 400 }
            );
        }

        const registry = LanguageRegistry.getInstance();
        const translator = registry.getTranslator(fromLang, toLang);
        const translatedCode = await translator.translate(sourceCode, fromLang, toLang);

        return NextResponse.json({ code: translatedCode });
    } catch (error) {
        console.error('Translation error:', error);
        return NextResponse.json(
            { error: 'Failed to translate code' },
            { status: 500 }
        );
    }
}
