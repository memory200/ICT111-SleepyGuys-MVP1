# User Testing Plan (Lab 13)

**Group Name:** SleepyGuys  
**Project:** Smart Campus Lost and Found System  

---

## 1. Testing Objectives
* **Usability Verification:** Evaluate how easily university students can discover, search, and claim lost items using the platform.
* **Flow Seamlessness:** Test cross-module navigation between the landing page (`landing-page/index.html`) and the interactive prototype (`prototype/index.html`).
* **Traceability Validation:** Ensure all requirement flows (`REQ-NAV-01`, `REQ-SRC-01`, `REQ-DET-01`, `REQ-CLM-01`, `REQ-ADM-01`) function as expected during real user interactions.

---

## 2. Participant Profiles & Selection
* **Target Sample Size:** 5 - 8 Users
* **User Demographics:**
  * **Students (Primary Users):** 4-5 undergraduate/postgraduate students looking for lost personal belongings.
  * **Campus Admin / Staff (Secondary Users):** 1-2 administrative staff responsible for approving claims and managing lost-and-found items.

---

## 3. Test Tasks & Scenarios

| Task # | Task Description | Expected Outcome | Associated Req ID |
| :--- | :--- | :--- | :--- |
| **Task 1** | Access landing page and click "Try Interactive Demo". | User lands smoothly on `prototype/index.html`. | `REQ-NAV-01` |
| **Task 2** | Search for a specific item using category and location filters. | Filtered list correctly displays relevant item cards. | `REQ-SRC-01` |
| **Task 3** | Open item modal to inspect item details and status. | Modal opens showing timestamp, status, and description. | `REQ-DET-01` |
| **Task 4** | Submit a claim for a lost item with contact details. | Claim form submits, gives user feedback, and updates state in local storage. | `REQ-CLM-01` |
| **Task 5** | Verify status change to "Claim Pending" or "Claimed". | System reflects status update across the UI. | `REQ-ADM-01` |

---

## 4. Evaluation Metrics & Feedback Collection
* **Quantitative Metrics:**
  * **Task Completion Rate (%):** Percentage of users who successfully submit a claim without assistance.
  * **Time-on-Task (Seconds):** Time spent searching for an item and submitting a claim.
  * **Error Rate:** Number of incorrect filtering attempts or validation failures.
* **Qualitative Metrics:**
  * Post-test System Usability Scale (SUS) survey.
  * Direct user feedback regarding visual clarity, navigation speed, and overall trust in the system.
