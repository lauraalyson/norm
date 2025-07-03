Compliance Analyst Tool

Visualizes the results of an AI-created compliance analysis on a document.

What You Need

Python 3.7+
Node.js 16+
The norm.db database file (should be provided)

Backend Setup

Set up Python environment:
bashpython -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt

Start the backend:
bashsource .venv/bin/activate  # if not already activated
uvicorn app:app --reload
The API will be running at http://localhost:8000

Frontend Setup

Install dependencies:
npm install

Start the dev server:
npm run dev
The React app will be running at http://localhost:5173

Visit http://localhost:8000/ - you should see JSON data
Visit http://localhost:5173/ - you should see the React app displaying the tree

Click "New Document" to get different data
