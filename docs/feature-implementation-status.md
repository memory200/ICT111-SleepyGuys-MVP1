# Feature Implementation Status - Sprint 1

| Feature Description | Requirement ID | Screen / Component | Implementation Status | Evidence Link / File |
|---|---|---|---|---|
| Found Item Photo/Report Form | FR-1.1 | Item Report Screen | Working Draft | `/prototype/index.html` |
| Campus Location Tag Validation | FR-1.2 | Report Form Dropdown | Working Draft | `/prototype/index.html` |
| Category Search & Keyword Filter | FR-2.2 | Search Screen | Working Draft | `/prototype/script.js` |
| Security Desk Detail & Location View | FR-3.1 | Detail Screen | Working Draft | `/prototype/index.html` |
| Admin Claim Status Update | FR-3.2 | Security Admin Console | Working Draft | `/prototype/script.js` |


# Feature Implementation Status Report (Lab 11 - Sprint 2)

**Project Name:** Smart Campus Lost and Found System  
**Group Name:** Group 05  
**Last Updated:** Sprint 2 (Lab 11)

---

## 1. Overview
This document tracks the implementation progress of features mapped against requirement IDs defined in `system-requirements.md`. Every feature is assigned to a specific group member to ensure clear accountability and contribution tracking.

---

## 2. Feature Implementation Status Table

| Requirement ID | Feature Description | Assigned Owner | Status | Justification / Notes |
| :--- | :--- | :--- | :--- | :--- |
| **FR-01** | Item Reporting Form (Users can submit lost/found items with details and photo) | Mg Mg | **Completed** | Connected to localStorage. Form includes validation for mandatory fields. |
| **FR-02** | Search & Filter List (Filter records by category, location, and status) | Ma Ma | **Completed** | Real-time search by keyword and dynamic dropdown filters implemented in JS. |
| **FR-03** | Record Detail View (Show full item information and contact option) | Aung Aung | **Completed** | Modal window opens with detailed view and status badge. |
| **FR-04** | Admin Status Update (Admin can mark items as 'Claimed' or 'Resolved') | Kyaw Kyaw | **Completed** | Admin panel implemented; changes update state instantly in localStorage. |
| **FR-05** | Startup Metrics Dashboard (Display total records, pending cases, and category counts) | Su Su | **Completed** | Power BI embedded dashboard and JS summary cards added to prototype. |
| **FR-06** | User Authentication (Login / Signup for Admin) | Mg Mg | **Partially Completed** | Mock login implemented using hardcoded credentials for demo purpose. |
| **FR-07** | Automated Email Notification | Ma Ma | **Pending** | Planned for Sprint 3. Currently simulated with UI alert prompt. |

---

## 3. Status Definitions Used
* **Completed:** Feature is fully built, tested, and functional in the prototype.
* **Partially Completed:** Basic UI or simulated functionality exists, but full backend/logic is pending.
* **Pending:** Not yet implemented in this sprint.
* **Revised:** The requirement scope was modified based on user feedback or technical limits[cite: 2].
* **Not Applicable (N/A):** Dropped from project scope with justification[cite: 2].

---

## 4. Individual Member Contributions & Ownership

* **Htun Naung Oo** Owned **FR-01** (Input Form) and **FR-06** (Mock Authentication).
* **MIN KHANT MAUNG MAUNG:** Owned **FR-02** (Search/Filter) and **FR-07** (Notification Simulation).
* **AUNG KHANT ZAYAR OO:** Owned **FR-03** (Item Detail Modal UI).
* **AUNG HTET THU:** Owned **FR-04** (Admin Panel & Status Management).
* **HTUN NAUNG OO:** Owned **FR-05** (Startup Metrics Dashboard & Visualizations).
