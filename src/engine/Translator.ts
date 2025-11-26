export interface Translator {
    translate(sourceCode: string, fromLang: string, toLang: string): Promise<string>;
}

export class MockTranslator implements Translator {
    async translate(sourceCode: string, fromLang: string, toLang: string): Promise<string> {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 600));

        return `// [${fromLang} -> ${toLang}] Translation
// Source length: ${sourceCode.length} chars

/*
  This is a MOCK translation. 
  In the future, this will connect to an LLM or AST Engine.
*/

function translatedCode() {
  console.log("Hello from ${toLang}!");
  // Original code was:
  // ${sourceCode.replace(/\n/g, '\n  // ')}
}
`;
    }
}

export class LanguageRegistry {
    private static instance: LanguageRegistry;
    private translator: Translator;

    private constructor() {
        this.translator = new MockTranslator();
    }

    public static getInstance(): LanguageRegistry {
        if (!LanguageRegistry.instance) {
            LanguageRegistry.instance = new LanguageRegistry();
        }
        return LanguageRegistry.instance;
    }

    public getTranslator(fromLang: string, toLang: string): Translator {
        // In the future, we can return specific AST translators for specific pairs
        // For now, always return the universal mock translator
        return this.translator;
    }
}
