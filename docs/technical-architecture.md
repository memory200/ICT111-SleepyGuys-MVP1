# Technical Architecture & Stack Selection - ICT111-SleepyGuys-MVP1

## 1. Selected Architecture Model
- **Choice:** Spreadsheet-Backed / Database-Backed Web Application.
- **Justification:** Aligns with our team skill level, guarantees rapid prototyping within the semester timeline, and handles interactive data submission, record updates, and status filtering required by `system-requirements.md`.

## 2. Technical Stack Definition
- **Frontend Layer:** HTML5, CSS3 (TailwindCSS / Bootstrap), JavaScript (ES6) for reactive UI components.
- **Backend / Data Layer:** Google Sheets API / Supabase / Firebase / LocalStorage JSON for structured data storage.
- **Hosting / Deployment:** GitHub Pages / Vercel for continuous web deployment.

## 3. Data Flow & Simulation Strategy
- User input submitted through the web form updates data records directly.
- Search and status filter queries fetch live records from the storage backend.
- Admin approval actions simulate live status changes from `Pending` to `Verified` or `Returned`.
