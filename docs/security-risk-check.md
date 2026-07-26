# Basic Security Risk Assessment

1. **Form Validation:** Mandatory input checks implemented for Location Tags (`FR-1.2`) to prevent empty or broken reports.
2. **File Upload Handling:** Photo uploads (`FR-1.1`) are restricted to standard image formats (`.jpg`, `.png`) to prevent script injection.
3. **Role Separation:** Admin table functions (`FR-3.2`) are kept separate from general user search screens.
