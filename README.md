**Repository Name:** `ICT111-SleepyGuys-MVP1`  
**Team Name:** Sleepy Guys  

---

## Team Members & Roles

| Student ID | Name | Role | Responsibility |
|---|---|---|---|
| 6702854 | **HTUN NAUNG OO** | Product Lead | Overall team coordination, problem definition, Technical Lead, Docs Lead and project direction |
| 6708563 | **MIN KHANT MAUNG MAUNG** | UX/UI Lead | Design interface screens, wireframes, and user flow |
| 6610464 | **AUNG KHANT ZAYAR OO** | Validation Lead | Manage customer discovery and validation metrics |
| 6709782 | **HTET THU** | Presentation | Manage repo, prototype feasibility, and documentation |

---

## Venture Overview

### Primary Problem Area
Students and staff often lose personal belongings (IDs, laptops, keys, wallets) on campus but face difficulties reporting or locating missing items due to decentralized and informal communication channels.

### Target Users
* University Students
* Campus Security & Administrative Personnel
* Lecturers & Campus Visitors

### Proposed IT Venture Direction
A centralized **Smart Campus Lost-and-Found Web Platform** where students can quickly report found items, search missing belongings with filtering tools, and securely verify/contact campus staff to claim lost property.

### Technology Stack
* **Frontend:** Responsive Web Application (HTML5, CSS3, JavaScript ES6+, EJS)
* **Backend:** Node.js & Express architecture
* **Features:** Image upload, categorization/filtering system, and status tracking (Lost / Found / Claimed)

---

## Project Journey & Development Progress

###  Lab 01: Team Setup & Structure
* Established team roles, core responsibilities, and internal workflow agreements.
* Initialized standard repository structure (`docs/`, `prototype/`, `data/`, `finance/`, `diagrams/`, `screenshots/`, `pitch/`).

###  Lab 02: Opportunity Scanning & NUF Evaluation
* **Opportunity Scanning:** Evaluated 6 distinct IT solution ideas across campus utility and business domains.
* **Constraint Check:** Filtered out IoT/cybersecurity complexity to focus strictly on feasible web solutions.
* **NUF Evaluation:** Assessed all ideas in `data/opportunity-scoring.csv` using the New, Useful, Feasible framework.
* **Selection Decision:** **Campus Lost-and-Found System** selected as the highest-scoring ($13/15$) and most feasible MVP candidate.

###  Lab 03: Customer Problem Discovery & Evidence Summary
* **Target Respondents:** Defined core respondent profiles in `docs/problem-notes.md` (Students & Security Staff).
* **Non-Leading Questions:** Prepared discovery questions focusing on past behavior and pain points in `docs/customer-questions.md`.
* **Evidence Collection:** Logged response data in `data/raw-responses.csv` to validate problem assumptions.
* **Assumption vs. Evidence:** Mapped team beliefs against user evidence in `docs/assumption-evidence-table.md`.
* **Findings Synthesis:** Summarized validated problem signals and next steps in `docs/customer-discovery-summary.md`.

---

## Key Discovery Findings (Lab 03 Highlights)
* **Chat Group Overload:** 80% of interviewed students confirmed that lost item posts in large chat groups get buried within hours.
* **Physical Search Friction:** Students waste substantial time walking between multiple security desks scattered across campus.
* **Paper Log Limitations:** Security staff struggle to quickly match lost reports with collected items using manual paper logbooks.

---

## Repository Structure Overview
```text
├── docs/                # Documentation, questions, problem notes, logbooks
├── prototype/           # Interactive wireframes and source code
├── data/                # Survey data, raw responses, scoring matrices
├── finance/             # Cost structure and financial assumptions
├── diagrams/            # User flows and system architecture diagrams
├── screenshots/         # UI previews and progress captures
└── pitch/               # Presentation slides and video materials
