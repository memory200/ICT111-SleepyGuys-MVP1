# Risk Register

| Risk ID | Risk Category | Description | Severity | Likelihood | Mitigation Action | Owner |
|---|---|---|---|---|---|---|
| R-01 | Privacy | Exposure of personal contact details in description | High | Medium | Mask personal contact info; route inquiries via Security Desk (`FR-3.1`) | Student Dev |
| R-02 | Security | Unauthorized status updates to 'Claimed' | High | Low | Enforce role-based access for Security Admin Console (`FR-3.2`) | Admin Lead |
| R-03 | Content/Ethical | Uploading inappropriate or fake item images | Medium | Medium | Add image validation checks and admin remove capability (`FR-1.1`) | UI Developer |
| R-04 | Legal/IP | Uncredited usage of third-party UI icons | Low | Low | Document all assets in `/docs/ip-and-third-party-assets.md` | Doc Lead |
| R-05 | Data Integrity | Unvalidated location inputs causing report confusion | Medium | High | Enforce mandatory category dropdowns and location tags (`FR-1.2`) | Frontend Dev |
| R-06 | Security | File upload vulnerability via photo submission | High | Low | Restrict upload file types to `.jpg`, `.png` and limit file size | Backend Dev |
