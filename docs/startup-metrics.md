# Lab 11: Startup & Product Metrics Documentation

## 1. Executive Summary & Core KPIs
This document summarizes the key startup and product metrics tracked during Sprint 2 of the Smart Campus Lost-and-Found System implementation.

| Metric Name | DAX / Calculation Method | Current Value | Target KPI | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Total Records** | `DISTINCTCOUNT('PrototypeRecords'[RecordID])` | **15** | $> 50$ / Month | Operational |
| **Total Activity Events** | `COUNTROWS('ActivityLog')` | **36** | $> 100$ / Month | Active |
| **Pending Cases** | `CALCULATE(DISTINCTCOUNT(...), CurrentStatus = "Pending")` | **6** | $< 30\%$ | Attention Needed |
| **Resolved Cases** | `CALCULATE(DISTINCTCOUNT(...), CurrentStatus IN {"Claimed", "Returned", "Closed"})` | **9** | $> 70\%$ | Good |
| **Resolution Rate** | `DIVIDE([Resolved Cases], [Total Records])` | **60.0%** | $> 75\%$ | Moderate |
| **Avg. Resolution Days** | `AVERAGE('PrototypeRecords'[ResolutionDays])` | **2.3 Days** | $< 2.0$ Days | Good |
| **Search Actions** | `CALCULATE(COUNTROWS(...), ActionType = "SearchRecord")` | **6** | $> 20$ / Month | Active |
| **Admin Updates** | `CALCULATE(COUNTROWS(...), ActionType IN {"UpdateStatus", "AdminReview"})` | **11** | $> 15$ / Month | Active |
| **Avg. Processing Time** | `AVERAGE('ActivityLog'[ProcessingTimeMinutes])` | **4.5 Mins** | $< 3.0$ Mins | Acceptable |
| **Mobile Activity Rate** | `DIVIDE(Mobile Events, Total Events)` | **44.4%** | $> 50\%$ | High Mobile Usage |

---

## 2. Power BI Analytics Findings & Interpretation
1. **High Unresolved Ratio (Pending Cases = 6):** The current pending count shows that items remain unclaimed for an average of 2.3 days. This indicates a need to streamline the Security Desk verification workflow.
2. **Mobile Adoption (44.4%):** Nearly half of all activity originates from mobile devices. Responsive UI development must remain a top priority.
3. **Core Feature Usage:** Search and status update actions represent over 45% of total log events, proving that user search and admin review functions are critical MVP features.

---

## 3. Traceability to System Requirements
* **FR-01 (Report Item):** Validated by 14 `SubmitReport` activity events in `ActivityLog`.
* **FR-03 (Search/Filter):** Validated by 6 `SearchRecord` events.
* **FR-08 (Admin Status Update):** Validated by 11 `UpdateStatus` and `AdminReview` events.
* **FR-09 (Dashboard Analytics):** Validated by `ViewDashboard` logs and Power BI report structure.
