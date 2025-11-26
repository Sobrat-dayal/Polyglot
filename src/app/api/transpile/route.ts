import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { code } = await request.json();

        // Mock implementation for now
        const transpiledCode = `// Transpiled Output\nconsole.log("Hello from Polyglot!");\n// Input length: ${code.length}`;

        return NextResponse.json({ code: transpiledCode });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to transpile code' },
            { status: 500 }
        );
    }
}
