## TEAM NAME Sleepy Gyus

| Student ID | Name | Role | Responsibility |
|---|---|---|---|
| 6702854 | **HTUN NAUNG OO** |  Product Lead | Overall team coordination, problem definition,Technical Lead + Docs Lead and project direction |
| 6708563 | **MIN KHANT MAUNG MAUNG** | UX/UI Lead | Design interface screens, wireframes, and user flow |
| 6610464 | **AUNG KHANT ZAYAR OO** | Validation Lead | Manage customer discovery and validation metrics |
| 6709782 | **HTET THU** | Persetation | Manage repo, prototype feasibility, and documentation |

---

##  Primary Problem Area
Students and staff often lose personal belongings (IDs, laptops, keys, wallets) on campus but face difficulties reporting or locating missing items due to decentralized and informal communication channels.

##  Target Users
* University Students
* Campus Security & Administrative Personnel
* Lecturers & Campus Visitors

## Initial IT Venture Direction
A centralized **Smart Campus Lost-and-Found Web Platform** where students can quickly report found items, search missing belongings with filtering tools, and securely verify/contact campus staff to claim lost property.

##  Technology Possibility
- Responsive Web Application (HTML5, CSS3, JavaScript ES6+, EJS)
- Node.js & Express backend architecture
- Image upload and categorization/filtering system
- Database integration for tracking item status (Lost / Found / Claimed)

---

##  Repository Structure
- **`docs/`**: Project documentation, team profiles, idea logs, and weekly logbooks.
- **`prototype/`**: Source code, HTML/CSS/JS, and interactive prototype files.
- **`data/`**: Survey responses, validation data, and metric collection.
- **`finance/`**: Financial model, assumptions, and cost calculations.
- **`diagrams/`**: User flow, wireframes, and system architecture diagrams.
- **`screenshots/`**: Visual evidence of prototype, UI, and project progress.
- **`pitch/`**: Pitch deck presentation slides and demo video materials.

### 🔹 Lab 02: Opportunity Scanning & NUF Framework Evaluation
* **Opportunity Scanning:** Expanded brainstorming to 6 distinct IT solution ideas spanning academic, campus, and business utility.
* **Constraint Check:** Filtered ideas to ensure zero reliance on IoT hardware or complex cybersecurity infrastructure, focusing strictly on web/dashboard solutions.
* **NUF Evaluation:** Evaluated all 6 ideas using the **NUF (New, Useful, Feasible)** framework in `data/opportunity-scoring.csv`.
* **Selection Decision:** **Campus Lost-and-Found System** scored the highest ($13/15$) as the most impactful and feasible MVP to build within the course timeframe.
* **Documentation Completed:**
  * `docs/opportunity-scan.md`: Full scanning table, current alternatives, and technology feasibility mapping.
  * `docs/selected-opportunity.md`: Detailed selection narrative, problem statement, current alternatives, and validation plan.
  * `docs/weekly-logbook.md`: Lab 02 reflection log and team contributions.

---

## Selected IT Venture Direction

### Problem Statement
Students and staff frequently lose personal items (ID cards, keys, water bottles, electronics) across campus. Currently, they lack a centralized platform to report or search for items, relying on cluttered messaging groups (Telegram, Viber) or physical security desks.

### Proposed Solution
A centralized, web-based Lost-and-Found portal where users can:
1. Submit reports for found items with images, descriptions, and recovery locations.
2. Search and filter lost items easily by category and campus area.
3. Securely contact finders or campus security to claim belongings.

---

## Current Status
* [x] Team workspace and repository structure created.
* [x] Opportunity scan table populated with 6 ideas.
* [x] NUF scoring completed in `data/opportunity-scoring.csv`.
* [x] Core venture documentation finalized in `docs/`.
* [x] GitHub Issues created to track task management.

## Lab 03: Customer Problem Discovery & Evidence Summary

### 1. Target Respondent Definition
* **Campus Students:** Primary users who lose or find personal belongings daily on campus.
* **Security & Admin Staff:** Key operators responsible for managing found items physically and handling inquiry claims.

---

### 2. Validated Problem Statement
Students and staff frequently lose personal items (ID cards, keys, water bottles, electronics) across campus. Current alternatives rely on informal chat groups (Telegram, Viber) where messages are quickly buried, or manual paper logbooks at physical security desks.

---

### 3. Key Discovery Findings (What We Learned in Lab 03)
* **Chat Group Overload:** 80% of interviewed students confirmed that lost item posts in large chat groups get buried within hours.
* **Physical Search Friction:** Students waste substantial time walking between multiple security desks scattered across campus.
* **Paper Log Limitations:** Security staff struggle to quickly match lost reports with collected items using manual logbooks.

---

### 4. Proposed IT Solution & MVP Direction
A simple, web-based Lost-and-Found system where users can:
1. **Report Found Items:** Upload details with descriptions, photos, and location tags.
2. **Search & Filter:** Find lost items quickly by category, date, and campus building.
3. **Verify Ownership:** Safely coordinate item retrieval with security personnel.

---

## Key Artifacts & Documentation (Lab 03)
* **Interview/Survey Questions:** `/docs/customer-questions.md`
* **Target Respondents & Pain Points:** `/docs/problem-notes.md`
* **Raw Response Data:** `/data/raw-responses.csv`
* **Assumption vs. Evidence Mapping:** `/docs/assumption-evidence-table.md`
* **Discovery Summary & Decision:** `/docs/customer-discovery-summary.md`

---
