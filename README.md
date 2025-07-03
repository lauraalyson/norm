Node Tree Viewer
A React frontend connected to a FastAPI backend that displays hierarchical node data.

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
bashnpm install

Start the dev server:
bashnpm run dev
The React app will be running at http://localhost:5173

How It Works

The FastAPI backend serves random node trees from a SQLite database
The React frontend fetches and displays this data in a tree structure
A Vite proxy handles the connection between frontend and backend (no CORS issues!)

Troubleshooting
"No root node found" error?

Make sure the norm.db file is in the same directory as app.py

CORS errors?

Check that your vite.config.js has the proxy setup
Make sure both servers are running on the expected ports

Backend not starting?

Double-check you activated the virtual environment
Try pip install -r requirements.txt again

Project Structure
├── app.py              # FastAPI backend
├── requirements.txt    # Python dependencies
├── norm.db            # SQLite database
├── src/
│   ├── App.jsx        # Main React component
│   └── ...
├── vite.config.js     # Vite config with proxy
└── package.json       # Node dependencies
Testing the Connection

Visit http://localhost:8000/ - you should see JSON data
Visit http://localhost:5173/ - you should see the React app displaying the tree
Click "Fetch New Random Node" to get different data