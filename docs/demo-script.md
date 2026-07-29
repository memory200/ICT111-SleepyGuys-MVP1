# Demonstration Script (Lab 13)

**Group Name:** SleepyGuys  
**Project:** Smart Campus Lost and Found System  

---

## Screen-by-Screen Demo Walkthrough

| Step | Screen / View | Action & Explanation | System Requirement ID |
| :--- | :--- | :--- | :--- |
| **1** | Landing Page (`/landing-page/index.html`) | Introduce value proposition, core features, and click "Try Demo" CTA button. | `REQ-FUN-001` |
| **2** | Prototype Homepage (`/prototype/index.html`) | Display active lost/found listings with status badges (Pending, Verified, Claimed). | `REQ-FUN-002` |
| **3** | Instant Search & Filter | Demonstrate searching "Charger" and filtering by category "Electronics". | `REQ-FUN-003` |
| **4** | Report Item Form | Submit a new lost item report with title, category, location, and contact details. | `REQ-FUN-004` |
| **5** | Admin Verification View | Show how campus security/admin verifies claims and updates status to "Claimed". | `REQ-FUN-005` |
# Prototype Demo Script (Lab 13)

**Group Name:** SleepyGuys  
**Project:** Smart Campus Lost and Found System  
**Demo Duration:** 3 - 5 Minutes  

---

## 1. Demo Overview & Goal
* **Goal:** Present the end-to-end user flow of the Smart Campus Lost and Found portal, from landing page discovery to item claim submission and administrative status update.
* **Target Audience:** Lab Evaluators, University Students, and Campus Administrative Staff.

---

## 2. Step-by-Step Demo Flow & Script

### Step 1: Landing Page & Digital Go-To-Market
* **Screen:** `landing-page/index.html`
* **Demo Presenter Action:** Show the landing page layout, highlighting the core value proposition and call-to-action (CTA) buttons.
* **Script:** 
  > "Welcome to the SleepyGuys Smart Campus Lost and Found Portal. As you can see on our marketing landing page, students can easily understand how our platform works. We have an interactive demo button here that directs early adopters straight into the application."
* **Traceability ID:** `REQ-NAV-01`

---

### Step 2: Main Dashboard & Search Filtering
* **Screen:** `prototype/index.html` (Main Dashboard)
* **Demo Presenter Action:** Click "Try Interactive Demo" to navigate to the prototype. Demonstrate search bar inputs and category/location filters.
* **Script:** 
  > "Upon entering the portal, users see a clean dashboard displaying recently reported items. Suppose student Aung Aung lost his student ID and laptop charger at the Central Library. He selects 'Electronics / Cards' in the category dropdown and inputs 'Central Library' in the location search."
* **Traceability ID:** `REQ-SRC-01`

---

### Step 3: Item Detail Modal & Verification
* **Screen:** Item Detail Modal Popup
* **Demo Presenter Action:** Click on a relevant item card from the filtered list to open the detail modal window.
* **Script:** 
  > "Aung Aung finds a matching listing titled 'Found Student ID & Laptop Charger'. Clicking on the card opens the item detail modal, showing the exact timestamp, description, location details, and current status as 'Unclaimed'."
* **Traceability ID:** `REQ-DET-01`

---

### Step 4: Claim Submission
* **Screen:** Claim Form Modal
* **Demo Presenter Action:** Click the "Claim Item" button, fill in the contact details and verification description, and hit "Submit Claim".
* **Script:** 
  > "To prevent false claims, Aung Aung clicks 'Claim Item', inputs his student ID number and specific identifying marks of his charger, and submits the claim. The system provides real-time feedback and logs the request."
* **Traceability ID:** `REQ-CLM-01`

---

### Step 5: Admin Status Update & Local Storage Logging
* **Screen:** Admin Panel / Item Status Indicator
* **Demo Presenter Action:** Show the updated status on the dashboard reflecting "Claim Pending" or "Claimed" via Local Storage state management.
* **Script:** 
  > "Once submitted, the item state is updated instantly in the system's storage without requiring a full page refresh. Campus admins can review and update the status accordingly, bringing a complete, closed-loop resolution to lost items."
* **Traceability ID:** `REQ-ADM-01`

---

## 3. Summary of Traceable Requirements

| Demo Step | Screen / Feature | Requirement ID |
| :--- | :--- | :--- |
| Step 1 | Landing Page Navigation | `REQ-NAV-01` |
| Step 2 | Item Search & Filter | `REQ-SRC-01` |
| Step 3 | Item Detail View | `REQ-DET-01` |
| Step 4 | Claim Item Workflow | `REQ-CLM-01` |
| Step 5 | Admin Status & State Persistence | `REQ-ADM-01` |
