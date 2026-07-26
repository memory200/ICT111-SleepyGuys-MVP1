 
# ICT111-SleepyGuys-MVP1

## Course Information

Course Code: ICT111
Course Name: Introduction to Information Technology
Instructor: Dr. Herison Surbakti 

## Team Name

SleepyGuys

## Team Members and Roles

| Student ID | Name | Role | Responsibility |
|---|---|---|---|
| 6702854 | **HTUN NAUNG OO** | Product Lead | Overall team coordination, problem definition, Technical Lead, Docs Lead and project direction |
| 6708563 | **MIN KHANT MAUNG MAUNG** | UX/UI Lead | Design interface screens, wireframes, and user flow,Power BI |
| 6610464 | **AUNG KHANT ZAYAR OO** | Validation Lead | Manage customer discovery and validation metrics |
| 6709782 | **AUNG HTET THU** | Presentation | Manage report, prototype feasibility, and documentation |

---

## Venture Overview

## Initial Problem Area

Students frequently lose personal belongings on campus and have difficulty recovering them.

## Target Users

- University Students
- University Staff


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

## Lab 04: User Persona, Requirements, and User Stories

### Primary Target User
The primary target users of our Smart Campus Lost-and-Found System are **University Students** who frequently lose or find personal items on campus, as well as **Campus Security Staff** responsible for managing and verifying lost-and-found claims.

### Persona Summary
- **Persona name:** Min Thuta (Campus Student) & U Ba Maung (Security Officer)
- **User type:** Student / Campus Staff
- **Main goal:** Quickly report found items, search for lost personal belongings, and streamline the claim verification process.
- **Main pain point:** High friction in physical reporting, lack of immediate visual proof/photo attachments, and slow status tracking.
- **Current workaround:** Asking around in social media groups or manually visiting the physical security office.

### Key Requirements
| Req ID | Requirement | Priority | Related Evidence |
|---|---|---|---|
| FR-1.1 | The system shall allow users to upload item photos when submitting a lost/found report. | Must | Validated in Lab 08 (`User_01`, `User_07`) |
| FR-1.2 | The system shall validate required location tags for found items. | Must | Identified issue in Lab 08 (`User_05`) |
| FR-2.2 | The system shall provide a search bar and category filter dropdown. | Must | Tested in Lab 08 (`User_02`, `User_06`) |
| FR-3.1 | The system shall display security desk location and pickup hours. | High | Validated in Lab 08 (`User_03`) |
| FR-3.2 | The system shall allow security staff to update item status to 'Claimed'. | Must | Tested in Lab 08 (`User_04`, `User_08`) |
| NFR-01 | The user interface shall load search results within 2 seconds. | Must | Performance tested in Lab 08 |

### MVP Feature Scope
| Feature | Priority | Included in Final Prototype? |
|---|---|---|
| Found Item Photo Upload | Must | Yes |
| Keyword Search & Category Filter | Must | Yes |
| Security Desk Map & Location Info | High | Yes |
| Claim Status Update Console (Admin) | Must | Yes |

### Diagram Links
- **User flow diagram:** `/docs/diagrams/user-flow.png`
- **Use case diagram:** `/docs/diagrams/use-case.png`

### GitHub Contribution Evidence
All group members (ICT111 - Sleepy Guys) contributed to this repository through commits, issues, feature implementations, and documentation updates.

### Diagrams
![User Flow Diagram](diagram/flowchart.png)
![Use Case Diagram](diagram/usecasediagram.png)

---

## Lab 05: Product Concept and UI/UX Wireframe

### Product Concept
Our product, **Smart Campus Lost-and-Found System**, is a centralized digital web application designed for university students and security staff. It solves the issue of missing belongings on campus by offering instant photo upload reporting, interactive map/location tagging, fast keyword filtering, and an automated claim status management dashboard.

### Requirement-Driven Screens
List of core screens designed based on our system requirements and validated in Lab 08 testing:

| Screen | Related Requirement IDs | Wireframe File |
|---|---|---|
| Homepage / Landing Page | FR-2.2, FR-3.1 | `/wireframes/homepage.png` |
| Found Item Submission Form | FR-1.1, FR-1.2 | `/wireframes/input-form.png` |
| Search & Lost Items List | FR-2.2 | `/wireframes/record-list.png` |
| Item Detail & Location View | FR-1.2, FR-3.1 | `/wireframes/detail-view.png` |
| Customer Validation Dashboard | FR-1.1, FR-3.2 | `/wireframes/dashboard.png` |
| Admin / Security Action Console | FR-3.2 | `/wireframes/admin-view.png` |

### User Flow
Users start at the Homepage where they can choose to either report a found item or search for a lost item. 

1. **Found Item Flow:** User fills in details $\rightarrow$ attaches photo (`FR-1.1`) $\rightarrow$ selects location tag (`FR-1.2`) $\rightarrow$ submits report.
2. **Search Lost Item Flow:** User searches by keyword/category (`FR-2.2`) $\rightarrow$ views item details & security desk location (`FR-3.1`) $\rightarrow$ claims item at security desk.
3. **Security Admin Flow:** Security staff log into the Console $\rightarrow$ verify claim $\rightarrow$ update item status to 'Claimed' (`FR-3.2`).

- **User Flow Diagram Link:** `/diagrams/user-flow.png`

### Team Contribution
All group members (ICT111 - Sleepy Guys) contributed to wireframe design, workflow mapping, requirement linking, and documentation updates in this shared GitHub repository.


## Lab 06 Summary
In Lab 06, our group connected our product concept, requirements, user stories, and wireframes into business logic and technical structure for the Smart Campus Lost-and-Found System. We defined key value propositions, user segments, tech stack components, and data flows to ensure our MVP scales smoothly into the final prototype deliverable.

## Files Added or Updated

- [Business Model Canvas](docs/business-model-canvas.md)
- [Feature-Value Mapping](docs/feature-value-mapping.md)
- [Technical Architecture](docs/technical-architecture.md)
- [Data Structure](docs/data-structure.md)
- [System Architecture Diagram](diagrams/system-architecture.png)
- [Data Flow Diagram](diagrams/data-flow.png)
- [Weekly Logbook](docs/weekly-logbook.md)

## Technical Direction
Our prototype uses a **Frontend + Express.js Web Server (EJS) with Local Dataset/JSON Storage** architecture (`v1.0-EJS`). This stack enables fast HTML rendering, easy photo file handling for item submissions (`FR-1.1`), responsive search filtering (`FR-2.2`), and clear admin status updates (`FR-3.2`) without complex external database overhead during validation testing.

## Final Prototype Connection
The business canvas and architecture defined in Lab 06 serve as the technical blueprint for our final project deliverable. They map our system requirements (`FR-1.1`, `FR-1.2`, `FR-2.2`, `FR-3.1`, `FR-3.2`) directly to data models and system components, ensuring that every user interface element and API endpoint directly fulfills documented user needs and business value.


## Lab 07: MVP Experiment Design

### Experiment Objective
The objective of this experiment was to test the usability, workflow efficiency, and user demand for our Smart Campus Lost-and-Found System MVP (`v1.0-EJS`) before proceeding to full-scale backend development. We aimed to evaluate photo uploads, category searches, location tagging, and status updates with real target users.

### Critical Assumptions
1. **Usability Assumption:** Campus students can easily navigate the report form, upload item photos (`FR-1.1`), and select accurate location tags (`FR-1.2`) without assistance.
2. **Value Assumption:** Students actively prefer searching a digital lost-and-found system (`FR-2.2`) over visiting physical security desks or posting on social media.
3. **Operational Assumption:** Campus security staff will regularly use the admin console (`FR-3.2`) to update claim statuses and manage reported items.

### MVP Experiment Type
We selected a **Wizard of Oz / Interactive Prototype Experiment** using our Express.js web server (`v1.0-EJS`). This fit our project because it allowed real users to interact with actual UI flows (uploading photos, searching, filtering) while storing test results locally, giving us realistic usability feedback without complex database infrastructure.

### Success Metrics
- **Task Success Rate:** Minimum 80% completion rate for main workflows (Achieved: **87.5%** in Lab 08).
- **Usability Score:** Average ease-of-use rating above 3.5 / 5.0 (Achieved: **4.12 / 5.00** in Lab 08).
- **User Interest Level:** Average interest rating above 4.0 / 5.0 (Achieved: **4.38 / 5.00** in Lab 08).
- **Efficiency:** Average completion time under 90 seconds (Achieved: **63.1 seconds** in Lab 08).

### Files Added in Lab 07
- `/docs/mvp-experiment-plan.md`
- `/docs/critical-assumptions.md`
- `/docs/experiment-script.md`
- `/docs/success-metrics.md`
- `/docs/feedback-form.md`
- `/docs/weekly-logbook.md`

### Connection to Final Prototype
This experiment validated that our core product concept resonates with users while highlighting specific friction points (such as location field validation and status button visibility). The empirical evidence collected directly guides our UI/UX revisions and feature prioritizing before delivering the final prototype.

## Lab 08: Customer Validation and Analytics Sheet

### Validation Objective
The objective of this lab was to evaluate the core user workflows of our Smart Campus Lost-and-Found System MVP (`v1.0-EJS`). We tested item reporting, searching, and status management with real target users (Students and Security Staff) to collect empirical evidence, measure usability metrics, and inform our MVP prototype decision.

### Prototype Version Tested
- **Version:** `v1.0-EJS`
- **Link:** [Link to MVP Demo / Repository]
- **Screenshots:** `/screenshots/lab08-powerbi-dashboard.png`

### Analytics Summary
| Metric | Result |
|---|---:|
| Total test users | 8 |
| Task success rate | 87.5% |
| Average feedback score | 4.12 / 5.00 |
| Average interest level | 4.38 / 5.00 |
| Main confusion point | Location Field Tagging & Category Filter Dropdown |

### MVP Decision
**Partially Validated (Revise Before Implementation)**  
The team will revise the prototype based on user feedback before moving into full implementation. While high interest (4.38/5) and task success (87.5%) validate strong demand, key improvements are required for location input validation (`FR-1.2`), category filter contrast (`FR-2.2`), and security action buttons (`FR-3.2`).

### Files Added
- `/data/validation-results.xlsx`
- `/data/validation-results.csv`
- `/docs/customer-validation-summary.md`
- `/docs/analytics-insights.md`
- `/docs/mvp-decision.md`
- `/screenshots/lab08-powerbi-dashboard.png`
- `/docs/weekly-logbook.md`

## Lab 09 - Responsible IT Check

### Responsible Design Summary
Before finalizing our MVP prototype (`v1.0-EJS`), our team conducted a comprehensive responsible IT design check for the **Smart Campus Lost-and-Found System**[cite: 6]:
- **Privacy & Data Protection:** Applied data minimization principles to ensure we only collect necessary operational fields (such as item descriptions and security location tags) while avoiding unnecessary personal/sensitive user data[cite: 6].
- **Ethical Considerations:** Guaranteed equal access for both Students and Security Staff without misleading status displays or deceptive reporting mechanisms[cite: 6].
- **Intellectual Property (IP):** Cataloged all open-source UI frameworks, fonts, and icon sets (Bootstrap/Tailwind, Lucide Icons) with appropriate MIT/CC license attribution[cite: 6].
- **Basic Security Controls:** Implemented form validation for location tagging (`FR-1.2`), restricted status modification access to the Security Admin Console (`FR-3.2`), and enforced file type constraints (`.jpg`, `.png`) on photo submissions (`FR-1.1`)[cite: 6].

### Files Added
- docs/legal-ethical-checklist.md
- docs/privacy-and-data-protection.md
- docs/ip-and-third-party-assets.md
- docs/security-risk-check.md
- docs/risk-register.md
- docs/updated-requirements-note.md
- docs/weekly-logbook.md

### Requirement Update
Yes, `system-requirements.md` was updated following the Lab 09 review[cite: 6]. Specifically, `FR-1.2` (Location Field Validation) was updated to enforce mandatory dropdown selection and input validation[cite: 6]. This change prevents user input errors identified during testing (`User_05`) and enhances report data integrity[cite: 6]. The update is documented in `docs/updated-requirements-note.md` and linked to GitHub Issue #12[cite: 6].

### Team Contributions
All group members (ICT111 - Sleepy Guys) actively contributed to this lab's deliverables in the repository[cite: 6]:
- **HTUN NAUNG OO:** Authored `docs/legal-ethical-checklist.md` and `docs/privacy-and-data-protection.md`[cite: 6].
- **MIN KHANT MAUNG MAUNG:** Created `docs/ip-and-third-party-assets.md` and documented `docs/updated-requirements-note.md`[cite: 6].
- **AUNG KHANT ZAYAR OO:** Conducted the security risk audit and compiled `docs/security-risk-check.md`[cite: 6].
- **AUNG HTET THU:** Constructed `docs/risk-register.md`, updated `docs/weekly-logbook.md`, and integrated the Lab 09 section into `README.md`[cite: 6, 7].

## Lab 10 - MVP Implementation Sprint 1

### Sprint Goal
Our goal in Lab 10 is to begin building the first working version of the prototype based on the approved requirements, wireframes, architecture, and responsible-design checks for the Smart Campus Lost-and-Found System[cite: 8, 9].

### Implementation Approach
- **Platform/tools:** Frontend Web Prototype (HTML5, CSS3, Vanilla JavaScript)[cite: 8]
- **Backend status:** Frontend-only simulation (No complex backend overhead required for Sprint 1)[cite: 8]
- **Data storage/simulation:** Web `localStorage` API with initial sample dataset[cite: 8]
- **Prototype link or folder:** `/prototype/` directory (`/prototype/index.html`)[cite: 8]

### Features Implemented in Sprint 1

| Feature | Requirement ID | Status | Evidence |
|---|---|---|---|
| Homepage | FR-1.1, FR-2.2 | Working Draft | `/screenshots/homepage.png` |
| Input form | FR-1.1, FR-1.2 | Working Draft | `/screenshots/input-form.png` |
| Record list | FR-2.2 | Working Draft | `/screenshots/record-list.png` |
| Search/filter | FR-2.2 | Working Draft | `/screenshots/record-list.png` |
| Detail view | FR-3.1 | Working Draft | `/screenshots/detail-view.png` |
| Status tracking | FR-3.2 | Working Draft | `/screenshots/admin-view.png` |
| Admin view | FR-3.2 | Working Draft | `/screenshots/admin-view.png` |
| Dashboard | NFR-01 | Working Draft | `/screenshots/homepage.png` |

### Screenshots
- **Homepage:** `/screenshots/homepage.png`[cite: 8]
- **Input form:** `/screenshots/input-form.png`[cite: 8]
- **Record list:** `/screenshots/record-list.png`[cite: 8]
- **Detail view:** `/screenshots/detail-view.png`[cite: 8]
- **Admin/status view:** `/screenshots/admin-view.png`[cite: 8]

### Team Contribution
All group members (ICT111 - Sleepy Guys) contributed to the same GitHub repository/page for Sprint 1 implementation[cite: 8, 9]:
- **HTUN NAUNG OO:** Structured HTML views and layout setup in `/prototype/index.html`[cite: 8].
- **MIN KHANT MAUNG MAUNG:** Designed responsive CSS styles in `/prototype/style.css`[cite: 8].
- **AUNG KHANT ZAYAR OO:** Implemented JS data logic, search filtering, and status updates in `/prototype/script.js`[cite: 8].
- **AUNG HTET THU:** Updated feature status tables, documented Sprint 1 progress, captured screenshot evidence, and updated `README.md` & weekly logbook[cite: 8].
