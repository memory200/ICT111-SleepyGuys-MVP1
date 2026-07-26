# Lab 11: Prototype Testing Notes

## 1. Overview
This document records the end-to-end user journey testing for the Smart Campus Lost-and-Found System Sprint 2 prototype.

## 2. Test Execution Log

| Test Case ID | Core Feature Tested | Input / Action | Expected Result | Actual Result | Status | Action Taken / Fix |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Item Submission Form | Submit report with blank Location field | Browser halts submission and shows required error | Validation prompt displayed | **PASS** | HTML5 `required` attribute applied |
| **TC-02** | Search & Filter Logic | Type "Headphones" in search bar | Display only matching item cards dynamically | Only Sony Headphones shown | **PASS** | `filterItems()` JS logic verified |
| **TC-03** | Security Desk Status Update | Admin clicks "Mark as Claimed" on REC-101 | Status badge changes to Claimed & saves to localStorage | Badge updated & persisted instantly | **PASS** | `saveAndRefresh()` function called |
| **TC-04** | Detail Modal View | Click "View Details" on record card | Pop-up modal opens with complete description & contact | Modal opened with full details | **PASS** | Event delegation listener active |
| **TC-05** | Metrics Counter Update | Add new item via prototype form | Dashboard KPI count increments by +1 | Total Records incremented dynamically | **PASS** | Dynamic calculation verified |

## 3. Identified Defects & Remaining Improvements
1. **Defect 01:** Mobile filter dropdown text gets truncated on screens smaller than 360px width.
   * *Resolution:* Adjusted CSS media queries for `.category-filter` in `style.css`.
2. **Defect 02:** Status update did not reflect on Power BI CSV automatically.
   * *Resolution:* Exported updated `lab11_prototype_records.csv` to mirror frontend state.
