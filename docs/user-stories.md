# User Stories & Acceptance Criteria

## US-01: Report a Found Item
* **As a** Student who finds a lost item on campus,
* **I want to** upload a photo and description with the location where I found it,
* **So that** the rightful owner can identify and recover their belonging.

### Acceptance Criteria
* [ ] Given I am on the "Report Item" page, when I fill in item details and upload a photo, then the item should appear on the public feed.
* [ ] Given I leave required fields empty, when I click Submit, then the system should display validation error messages.

---

## US-02: Search and Filter Missing Belongings
* **As a** Student who lost my Student ID card,
* **I want to** filter listings by "IDs/Cards" and location "Library",
* **So that** I don't have to scroll through irrelevant posts.

### Acceptance Criteria
* [ ] Given I select "IDs/Cards" from the category dropdown, when the page updates, only ID card posts are displayed.
* [ ] Given I enter a keyword search, when results load, matched titles/descriptions are highlighted.

---

## US-03: Claim Verification & Location Guidance
* **As a** Student who identifies their lost item in the system,
* **I want to** view the exact security desk location holding my item,
* **So that** I can physically collect it with proper identification.

### Acceptance Criteria
* [ ] Given an item listing page, when I click "How to Claim", then exact office hours and security desk details are shown.
* [ ] Given an item is handed back to the owner, when campus admin marks it as "Claimed", then its status badge updates automatically.
