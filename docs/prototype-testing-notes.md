# Prototype Testing Notes (Sprint 2)

| Test Case ID | Feature Tested | Input / Action | Expected Result | Actual Result | Pass/Fail | Fix / Action Taken |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Item Submission | Submit form with missing Location dropdown | Prevent submission & prompt validation error | Shown red validation outline | **PASS** | Native HTML5 required check |
| **TC-02** | Search Filter | Type "Sony" into search bar | Show only Sony item cards | Only Sony headphones shown | **PASS** | JS filter logic verified |
| **TC-03** | Status Toggle | Admin clicks "Mark as Claimed" | Badge updates instantly to "Claimed" | Badge updated & synced to localStorage | **PASS** | `saveAndRefresh()` called |
| **TC-04** | Metrics Count | Add new item via form | "Total Reported Items" counter increases +1 | Counter incremented dynamically | **PASS** | Dynamic calculation added |
| **TC-05** | Modal Detail View | Click "View Details" on ITEM-101 | Show popup modal with full description & contact | Modal popped up with correct details | **PASS** | Event listener attached |
