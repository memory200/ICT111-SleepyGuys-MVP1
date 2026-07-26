# Acquisition Metrics

## Purpose
Define how the SleepyGuys group will measure early user interest, landing page performance, and prototype conversion rates.

## Required Metrics

| Metric ID | Metric Name | What It Measures | Formula / Counting Method | Data Source | Target / Success Criterion |
| --- | --- | --- | --- | --- | --- |
| M-01 | Landing page views | Number of people who opened the landing page | Count page views / visits | Landing page script / Analytics log | At least 100 views |
| M-02 | CTA clicks | Number of users who clicked the main CTA button | `(CTA Clicks / Page Views) * 100` | Landing page JS handler | > 30% click rate |
| M-03 | Demo attempts | Number of users who opened and tested the prototype flow | Count unique visits to `/prototype/index.html` | Prototype logs / `localStorage` | At least 25 attempts |
| M-04 | Feedback responses | Number of users who submitted feedback | Count submitted feedback records | Form submissions / Spreadsheet | At least 10 responses |
| M-05 | Interest conversion | Percentage of visitors taking the target action (Demo + Form) | `(Target Actions / Page Views) * 100` | Spreadsheet tracking template | > 20% conversion rate |

## Interpretation
If the initial metrics show weak performance (e.g., CTA click rate below 15%), the team will take the following corrective actions:
- **Refine the Headline:** Rewrite the main headline to emphasize immediate time-saving benefits.
- **Optimize Button Placement:** Make the "Try Demo Prototype" button more visually prominent.
- **Streamline the Flow:** Reduce steps required to test the prototype demo.
- **Adjust Outreach Channels:** Shift promotion focus towards QR codes in high-traffic zones like campus libraries.
