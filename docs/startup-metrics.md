# Lab 11: Startup & Product Metrics Documentation
# Startup / Product Metrics

> Defined metrics that show useful product activity for the SleepyGuys MVP solution.

## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| M-01 | Total Records | Usage | Shows whether the system is receiving activity | Count all records in system | Records table / localStorage | Dashboard |
| M-02 | Pending Cases | Status | Shows unresolved work needing action | Count records with status = Pending | Records table | Dashboard |
| M-03 | Completed/Resolved Cases | Status | Shows successful outcome rate | Count records with status = Claimed/Closed | Records table | Dashboard |
| M-04 | Most Common Category | Category | Shows the most common problem type | Count categories and find highest count | Records table | Dashboard |
| M-05 | Task Completion Rate | Validation | Shows whether users can complete main flow | (Completed tasks / Total tests) × 100 | Testing notes | Analytics summary |
| M-06 | Average Resolution Time | Operational | Measures efficiency of resolving reports | Sum(Resolution Days) / Total Resolved Cases | Activity log CSV | Dashboard |

## 2. Metrics Interpretation
The current metrics show healthy system engagement with a total of 15 records created[cite: 1, 2]. Out of these, 7 cases remain in 'Pending' status while 8 cases have been resolved or claimed, representing a 53.3% resolution rate[cite: 1]. The 'Electronics' category accounts for 40% of all reported items, indicating where system usage is most concentrated[cite: 1]. The average resolution time is currently 2.5 days, which highlights room for operational improvement. To optimize performance, the team should focus next on automated notifications to reduce pending case duration[cite: 2].

## 3. Link to Final Prototype
These metrics are dynamically embedded into the **Admin Dashboard** screen of the prototype (`screenshots/metrics-dashboard.png`)[cite: 2]. The KPI cards at the top summary bar display live counts for Total Records, Pending Cases, and Resolution Rate, while pie and bar charts illustrate the category and status breakdowns[cite: 1, 2].
