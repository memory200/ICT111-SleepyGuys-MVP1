# MVP Experiment Plan

## 1. Experiment Overview
* **Objective:** Test user flow and task completion rate on reporting and searching lost items using the Node.js/EJS prototype.
* **Experiment Type:** **Interactive Web Prototype Simulation**
* **Target Testers:** 5-10 Campus Students & 2 Security Staff Members.

---

## 2. Requirement Baseline Traceability
| Screen / Route | Requirement ID | User Story ID | Task Assigned to Tester |
| :--- | :--- | :--- | :--- |
| `/` (Homepage) | FR-2.1 | US-02 | View latest lost item listings. |
| `/report` (Form) | FR-1.1, FR-1.2 | US-01 | Submit a new found item with category & photo. |
| `/items` (Search Feed) | FR-2.2 | US-02 | Filter items by category (e.g., Electronics). |
| `/items/:id` (Detail) | FR-3.1 | US-03 | Locate security desk pickup location and hours. |
| `/admin` (Console) | FR-3.2 | US-03 | Change item status to `Claimed`. |
