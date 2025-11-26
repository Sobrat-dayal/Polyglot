# Polyglot: Universal Code Translator

![Polyglot Banner](https://img.shields.io/badge/Polyglot-Universal_Code_Translator-blue?style=for-the-badge&logo=google-translate)

**Polyglot** is a powerful, AI-driven platform that acts as a "Google Translate for Code". It allows developers to instantly translate code snippets from any programming language to another with high accuracy, preserving logic and structure.

## 🚀 What Does It Do?

Polyglot solves the "Tower of Babel" problem in software engineering.
- **Input:** Code in Language A (e.g., Python).
- **Process:** The engine analyzes the syntax, semantics, and logic using advanced AI models (Google Gemini).
- **Output:** Semantically equivalent code in Language B (e.g., JavaScript, Go, Rust).

### 💡 How It Helps Programmers

1.  **Legacy Migration:** Quickly convert old codebases (e.g., Java 7, PHP) to modern stacks (Go, Rust, TypeScript) without rewriting from scratch.
2.  **Learning New Languages:** Understand how a concept you know in Python is implemented in Rust or C++. It's the ultimate learning tool.
3.  **Cross-Platform Development:** Port logic from a backend service (Python) to a frontend SDK (TypeScript) or a mobile app (Swift) instantly.
4.  **Quick Prototyping:** Write in the language you are fastest in (e.g., Python), then translate to the target production language (e.g., C++).

---

## 🛠️ Tech Stack

### Frontend (The Face)
-   **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Editor:** [Monaco Editor](https://microsoft.github.io/monaco-editor/) (VS Code's editor engine) for professional syntax highlighting.
-   **Icons:** Lucide React.

### Backend (The Brain)
-   **Framework:** [Flask](https://flask.palletsprojects.com/) (Python)
-   **AI Engine:** [Google Gemini 2.5 Flash](https://deepmind.google/technologies/gemini/) via `google-genai` SDK.
-   **Architecture:** REST API serving the frontend.

---

## ⚡ Getting Started

Follow these steps to run the application locally.

### Prerequisites
-   Node.js & npm
-   Python 3.11+
-   A Google Gemini API Key (Get one [here](https://aistudio.google.com/app/apikey))

### Step 1: Start the Backend (Python)

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Create a `.env` file and add your API key:
    ```bash
    # Create .env file
    echo "GEMINI_API_KEY=your_actual_api_key_here" > .env
    ```
3.  Install dependencies:
    ```bash
    pip install flask flask-cors google-genai python-dotenv
    ```
4.  Run the server:
    ```bash
    python app.py
    ```
    *Server will start on `http://localhost:5000`*

### Step 2: Start the Frontend (Next.js)

1.  Open a **new terminal** window.
2.  Navigate to the root directory:
    ```bash
    # If you are in backend, go back up
    cd ..
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```
    *Frontend will start on `http://localhost:3000`*

### Step 3: Translate!

Open [http://localhost:3000](http://localhost:3000) in your browser.
1.  Select your **Source Language** (e.g., Python).
2.  Type your code in the left editor.
3.  Select your **Target Language** (e.g., JavaScript).
4.  Click **Translate**.

---

## 🔮 Future Roadmap

-   [ ] **File Upload:** Translate entire files or projects.
-   [ ] **AST Visualization:** See the abstract syntax tree of your code.
-   [ ] **History:** Save your past translations.
-   [ ] **Custom Models:** Fine-tune models for specific company coding styles.
