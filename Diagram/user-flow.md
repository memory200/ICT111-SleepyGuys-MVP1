graph TD
    A[Start: User visits Web Portal] --> B{What is the user's goal?}
    
    %% Lost Item Flow
    B -->|Search Lost Item| C[Navigate to Browse/Search Page]
    C --> D[Apply Filters: Category, Building, Date]
    D --> E{Item Found in Search?}
    E -->|Yes| F[View Item Details & Location Info]
    F --> G[Visit Physical Security Desk with ID to Claim]
    E -->|No| H[Submit Lost Item Inquiry/Flag Alert]
    
    %% Found Item Flow
    B -->|Report Found Item| I[Click 'Report Found Item']
    I --> J[Upload Photo & Enter Item Details]
    J --> K[Select Campus Location Found]
    K --> L[Submit Form]
    L --> M[System Creates Public Listing]
    M --> N[Hand Item over to Campus Security Desk]
