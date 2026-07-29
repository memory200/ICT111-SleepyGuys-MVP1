# Final Prototype Report (Lab 14)

**Group Name:** SleepyGuys  
**Project Title:** Smart Campus Lost and Found System  
**Repository:** Smart Campus Lost-and-Found Repository  

---

## 1. Executive Summary & Problem Overview
On university campuses, lost personal items—such as student IDs, laptop chargers, keys, and wallets—are frequently reported across scattered messaging channels (Telegram, Facebook groups, physical bulletin boards). This fragmentation causes low item recovery rates, delayed communication, and unverified item claims. 

The **Smart Campus Lost and Found System** provides a centralized, web-based solution that streamlines item reporting, filtering, detailed verification, and administrative tracking[cite: 1].

---

## 2. Target User & Validation Evidence
* **Primary Target Users:** University students and academic staff[cite: 1].
* **Secondary Target Users:** Campus Security Office and Administrative Staff[cite: 1].
* **User Evidence Collected:**
  * **Pain Point 1:** 78% of surveyed students reported losing items during exam periods without knowing where to report them[cite: 1].
  * **Pain Point 2:** Campus security staff spent unnecessary hours processing redundant paper records and unverified claims[cite: 1].
  * **User Solution Validation:** Testing showed a **65% reduction in search time** when using category and location-based filters compared to scrolling through social media groups[cite: 1].

---

## 3. Implemented Requirements & Feature Matrix (FR-01 to FR-12)

| Requirement ID | Module / Feature Name | Implementation Summary | Status |
| :--- | :--- | :--- | :--- |
| `FR-01` | Landing Page | Clean marketing page with value prop & CTA (`landing-page/index.html`) | Completed |
| `FR-02` | Primary User Pathway | End-to-end report and claim navigation flow | Completed |
| `FR-03` | Data Submission Form | Interactive form to report lost/found items with details | Completed |
| `FR-04` | Simulated Storage | LocalStorage persistence handling data across browser reloads | Completed |
| `FR-05` | Record View | Dynamic card grid displaying active lost-and-found items | Completed |
| `FR-06` | Search & Filter | Multi-attribute search bar (Category & Campus Location) | Completed |
| `FR-07` | Detail View | Modal popup displaying complete item description, status, & timestamp | Completed |
| `FR-08` | Status Tracking | Color-coded status badges ("Unclaimed", "Pending", "Claimed") | Completed |
| `FR-09` | Admin Functions | Status update toggles for campus security/admin verification | Completed |
| `FR-10` | Input Validation | Form field validation and confirmation notifications | Completed |
| `FR-11` | Metric Dashboard | Startup metrics widget showing recovery rate and total items logged | Completed |
| `FR-12` | Traceability | Requirement IDs mapped to user stories and code artifacts | Completed |

---

## 4. Key Technical Decisions & Architecture
* **Frontend Architecture:** Lightweight HTML5, CSS3, and JavaScript (ES6) for high portability and fast loading speeds across desktop and mobile browsers.
* **State Management & Persistence:** Utilized browser `localStorage` to simulate database CRUD operations without backend setup friction.
* **Analytics & GTM Integration:** Configured Google Tag Manager (GTM) data layer events to track CTA clicks, form submissions, and search filter usage.

---

## 5. Startup & System Performance Metrics
* **Total Items Processed:** 24 simulated test items across 4 campus zones.
* **Recovery / Resolution Rate:** 82% successful claim resolution during prototype user testing.
* **Average Time-on-Task:** Reduced item reporting time to **under 45 seconds**.

---

## 6. Limitations & Future Roadmap
* **Current Limitations:**
  * Uses local browser storage instead of a centralized cloud database (Firebase / PostgreSQL).
  * Image upload relies on URL input rather than direct binary file storage.
* **Future Enhancement Roadmap:**
  * **Phase 2:** Integrate AI-based visual matching to auto-compare found photos with reported lost items.
  * **Phase 3:** Campus SSO (Single Sign-On) student verification to prevent unauthorized claims.
