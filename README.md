https://github.com/esterprokopts/DIGITAL-EXAM-ESTERV

הפרויקט כולל:
- בדיקות search של Gov.il
- שימוש ב-Page Object Model
- Intercept ל־3 קריאות API + בדיקת 200
- לולאה על שירותים באתר govisit.gov.il + בדיקת appointment
- שינוי מלא של mainBanner בין שני דפים באמצעות intercept ו־HTML injection

###  מבנה הפרויקט (POM)

cypress/
│── e2e/
│ ├── 01-search-tests.cy.js
│ ├── 02-api-intercept.cy.js
│ ├── 03-appointments-loop.cy.js
│ └── 04-banner-data-modification.cy.js
│
│── pages/
│ ├── SearchPage.js
│ ├── ServicesPage.js
│ └── BannerPage.js
│
│── fixtures/
│── support/

python
Copy code

### ▶️ איך להריץ

```bash
npm install
npx cypress open   # ריצה גרפית
npx cypress run    # ריצה בקונסול
