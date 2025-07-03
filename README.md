Compliance Analyst Tool

This app was built with the React and TypeScript. 

It was mentioned that Norm is in the process of integrating Shadcn, so initially I planned on leveraging it in this assessment. I ended up de-scoping that because I felt like it might be overkill on an app this small. For a larger app I think it is a great tool because it will handle accessibility, which I did not cover here.

I did however use Tailwind to build components and styles quickly. Thank you, Tailwind!

I built two primitive UI components (Badge, Button). The Button component is closer to what you might see functioning in a production-level application. It handles variants (ghost, outline, solid), colors (blue, gray), and sizing (small, medium, large). There is a ton of room to expand this component (ex: Icons, button groups, etc).

I added an additional feature called the Audit Log (src/components/AuditLog.tsx). From a new file being uploaded, to changes like status overrides, users will be able to see a full history of actions taken. I believe this would be more impactful on a larger, production level application, where load times are longer and processing states may take several seconds/minutes. 

In retrospect, there are a few changes I would make from a usability standpoint. For example, I would render the compliance items within a table, allowing me to sort, filter, etc. I would also include more details in the ComplianceOverview component (ex: pass/fail totals). 

Overall, it was enjoyable building this tool. Looking forward to hearing your feedback.


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
The app will be running at http://localhost:5173
