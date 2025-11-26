import os
from google import genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def get_client():
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("WARNING: GEMINI_API_KEY not found in environment variables.")
        return None
    return genai.Client(api_key=api_key)

# Initialize client lazily
client = None

def translate_code_with_gemini(source_code, source_lang, target_lang):
    """
    Sends code to Gemini 2.5 Flash for translation.
    """
    global client
    if not client:
        client = get_client()
        if not client:
            return "Error: GEMINI_API_KEY is not configured on the server."

    # Construct a strict prompt to ensure only code is returned
    prompt = f"""
    Act as an expert code translator.
    Task: Translate the following code from {source_lang} to {target_lang}.
    
    Rules:
    1. Output ONLY the translated code.
    2. Do NOT add Markdown backticks (```).
    3. Do NOT add explanations or comments unless they are inside the code as comments.
    4. Maintain the original logic and variable naming style where idiomatic.
    
    Source Code:
    {source_code}
    """

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash", 
            contents=prompt
        )
        
        # Clean up the response just in case Gemini adds markdown
        cleaned_code = response.text.strip()
        if cleaned_code.startswith("```"):
            # Remove first line (```language)
            cleaned_code = cleaned_code.split("\n", 1)[1]
        if cleaned_code.endswith("```"):
            # Remove last line (```)
            cleaned_code = cleaned_code.rsplit("\n", 1)[0]
            
        return cleaned_code.strip()

    except Exception as e:
        print(f"Gemini API Error: {e}")
        return f"Error: Failed to translate code. {str(e)}"
