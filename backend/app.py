from flask import Flask, request, jsonify
from flask_cors import CORS
from engine.translator import translate_code_with_gemini
import os

app = Flask(__name__)
CORS(app)  # Allow frontend requests

@app.route('/api/translate', methods=['POST'])
def translate():
    data = request.json
    
    # Support both snake_case (Python style) and camelCase (JS style) payloads
    source_code = data.get('source_code') or data.get('sourceCode')
    source_lang = data.get('source_lang') or data.get('fromLang')
    target_lang = data.get('target_lang') or data.get('toLang')

    if not source_code or not source_lang or not target_lang:
        return jsonify({"error": "Missing required fields: source_code, source_lang, target_lang"}), 400

    # Call the Gemini service
    translated_code = translate_code_with_gemini(source_code, source_lang, target_lang)

    return jsonify({
        "code": translated_code, # Maintain compatibility with frontend expectation ('code' key)
        "translated_code": translated_code,
        "status": "success"
    })

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy"}), 200

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
