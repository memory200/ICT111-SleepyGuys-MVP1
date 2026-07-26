# Lab 11: Prototype Testing Notes

# Prototype Testing Notes

## Test Environment
- Prototype link or folder: `/prototype/index.html` (Local / Live GitHub Pages)
- Browser/device used: Google Chrome v126 / Windows 11 Desktop & Mobile View
- Tester role: Group SleepyGuys QA Testers (4 Members)
- Test date: Lab 11 Sprint 2 Testing

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Open homepage | Open prototype homepage | Homepage shows title, target user, problem, and main action | Displayed properly with call-to-action button | PASS | None | N/A |
| T-02 | Submit record | Fill form and submit | Record is saved or simulated and confirmation appears | Form validates, record saved to localStorage, alert shown | PASS | Data lost on refresh initially | Linked form state to browser `localStorage` |
| T-03 | View record list | Open list page/section | Submitted or sample records are visible | All 15 sample records loaded dynamically | PASS | None | N/A |
| T-04 | Search/filter | Use keyword/category/status filter | Relevant records are shown | List filters in real-time based on input | PASS | Filter delay on large dataset | Optimized JS array filter function |
| T-05 | Detail view | Select one record | Record details are shown clearly | Modal opens with full item metadata | PASS | None | N/A |
| T-06 | Status update | Change record status in admin view | Status changes and dashboard updates | Status changes from Pending to Claimed in UI | PASS | Status reset on tab switch | Persisted updated status to localStorage |
| T-07 | Dashboard metrics | Open dashboard | Metrics are visible and match data | Total Records = 15, Pending = 7 matches dataset | PASS | Cards misaligned on mobile | Adjusted CSS Flexbox styling |

## Summary of Issues
1. **Data Loss on Refresh:** Fixed by connecting JavaScript state to browser `localStorage`[cite: 2].
2. **Mobile Alignment:** Visual metric cards overlapped on smaller screen sizes; fixed with responsive CSS media queries[cite: 2].

## Improvements Completed During Lab 11
- Implemented full CRUD simulation in `prototype/script.js`[cite: 2].
- Integrated Power BI metrics visualization on the Dashboard screen[cite: 1, 2].
- Added client-side form validation and success notifications[cite: 2].
