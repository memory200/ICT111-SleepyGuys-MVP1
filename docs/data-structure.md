# Data Structure & Entity Definitions

## 1. Entity: Items (Lost / Found Records)
| Field Name | Data Type | Validation Rules | Sample Value |
| :--- | :--- | :--- | :--- |
| `item_id` | String / Primary Key | Unique, Required | `ITEM-2026-001` |
| `title` | String | Required, Max 100 chars | `Blue Water Bottle` |
| `category` | Enum | Required (`Electronics`, `Keys`, `Cards`, `Other`) | `Electronics` |
| `type` | Enum | Required (`Lost`, `Found`) | `Found` |
| `location` | String | Required | `Library Floor 2` |
| `date_reported` | Date / Timestamp | ISO format (YYYY-MM-DD) | `2026-07-22` |
| `status` | Enum | Required (`Pending`, `Verified`, `Returned`) | `Pending` |
| `contact_email` | String | Email format | `user@campus.edu` |

## 2. Entity: Users
| Field Name | Data Type | Validation Rules | Sample Value |
| :--- | :--- | :--- | :--- |
| `user_id` | String / Primary Key | Unique, Required | `USR-1001` |
| `full_name` | String | Required | `HTUN NAUNG OO` |
| `role` | Enum | Required (`Student`, `Admin`, `Staff`) | `Student` |

## 3. Entity: Claim Requests
| Field Name | Data Type | Validation Rules | Sample Value |
| :--- | :--- | :--- | :--- |
| `claim_id` | String / Primary Key | Unique, Required | `CLM-5001` |
| `item_id` | String / Foreign Key | Must reference valid `item_id` | `ITEM-2026-001` |
| `claimant_id` | String / Foreign Key | Must reference valid `user_id` | `USR-1001` |
| `proof_description` | Text | Required | `Has a sticker on the bottom` |
