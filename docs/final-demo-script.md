# Final Prototype Demo Script (Lab 14)

**Group Name:** SleepyGuys  
**Project Title:** Smart Campus Lost and Found System  
**Demo Duration:** 5 - 7 Minutes  

---

## 1. Demo Overview & Strategy
* **Goal:** Demonstrate the end-to-end user and admin workflow, data handling via LocalStorage, and metrics tracking of the Smart Campus Lost and Found system.
* **Target Audience:** Course Lecturers, Evaluators, and Venture Review Panel.

---

## 2. Step-by-Step Demo Script (5-7 Minutes)

### Step 1: Introduction & Landing Page (1 Min)
* **Screen:** `landing-page/index.html`
* **Presenter Action:** Show the landing page, highlight problem statement, value proposition, and click "Try Interactive Demo" CTA.
* **Script:** 
  > "Hello everyone. Welcome to the SleepyGuys Smart Campus Lost and Found System. Our landing page addresses the major campus pain point—scattered and lost belongings. By clicking 'Try Interactive Demo', users seamlessly transition directly to our web portal."
* **Traceability ID:** `FR-01`, `FR-02`

---

### Step 2: Search, Filtering & Item Details (1.5 Mins)
* **Screen:** `prototype/index.html` (Main Dashboard & Item Modal)
* **Presenter Action:** Demonstrate search inputs, category/location dropdown filters, and click an item card to display the detail modal.
* **Script:** 
  > "Here on the main portal, users can filter by category—such as Electronics or IDs—and location like Central Library. Clicking on any record opens the detail modal displaying full item descriptions, location tags, and timestamps."
* **Traceability ID:** `FR-05`, `FR-06`, `FR-07`

---

### Step 3: Item Reporting & Data Persistence (1.5 Mins)
* **Screen:** Item Report Form & LocalStorage Inspection
* **Presenter Action:** Fill out the "Report Item" form, submit it, show the newly created item card, and refresh the browser to prove state persistence.
* **Script:** 
  > "If a student finds an item, they fill out this simple report form. Upon clicking submit, our JavaScript app stores this record in browser LocalStorage. Even if we refresh the browser page, the new item remains permanently visible in the system."
* **Traceability ID:** `FR-03`, `FR-04`, `FR-10`

---

### Step 4: Claim Workflow & Admin Status Update (1.5 Mins)
* **Screen:** Claim Modal & Admin Controls
* **Presenter Action:** Click "Claim Item", submit claim details, and use the Admin Toggle to change the status badge from "Unclaimed" to "Claimed".
* **Script:** 
  > "To claim an item, the owner submits identifying details. On the administrative side, campus security staff can review the claim and update the status badge to 'Claimed', ensuring complete transparency and closing the loop."
* **Traceability ID:** `FR-08`, `FR-09`

---

### Step 5: Metric Dashboard & Venture Impact Wrap-up (1 Min)
* **Screen:** Startup Metrics Widget / Summary Dashboard
* **Presenter Action:** Point out the live metrics summary bar (Total Items, Recovery Rate, Avg Claim Time).
* **Script:** 
  > "Finally, our metrics widget displays real-time performance indicators—showing an 82% item recovery rate. This concludes our 5-minute live demonstration. Thank you!"
* **Traceability ID:** `FR-11`, `FR-12`
