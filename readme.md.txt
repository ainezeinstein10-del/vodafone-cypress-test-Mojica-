# Vodafone Cypress Automation Test (Tech Mahindra Assessment)

This project automates the verification of **Vodafone SIM-Only Plans** using **Cypress** and **JavaScript**.  
It validates **API vs UI data consistency** and performs an **end-to-end Add-to-Cart** flow as part of the Tech Mahindra QA Engineer technical assessment.

---

## 🧰 Tools & Frameworks
- **Cypress** – End-to-End and API testing  
- **JavaScript (ES6)** – Test scripting  
- **Node.js & npm** – Package management  
- **GitHub** – Version control  
- **CircleCI** – Continuous Integration (CI)

---

## 🚀 How to Run Tests Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ainezeinstein10-del/vodafone-cypress-test-Mojica.git
cd vodafone-cypress-test-Mojica
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Run Cypress (Interactive Mode)
bash
Copy code
npx cypress open
Then select:

bash
Copy code
cypress/e2e/vodafone-test.cy.js
4️⃣ Run Cypress (Headless Mode for CI)
bash
Copy code
npx cypress run
⚙️ Test Scenarios
 Part 1 – API vs UI Validation
Navigate to Vodafone SIM-Only Plans page

Retrieve API response from
https://api-prod.prod.cms.df.services.vodafone.com.au/plan/postpaid-simo?serviceType=New

Compare UI "Add to Cart" labels with API ctaLabel values

Ensure all plan labels match between UI and API

 Part 2 – Add Plan to Cart
Select the first available plan from the list

Click Add to Cart

Verify the selected plan and amount displayed on the Sticky Cart

Proceed to the cart and confirm correct plan details

🧩 Folder Structure
lua
Copy code
vodafone-cypress-test-Mojica/
│
├── cypress/
│   ├── e2e/
│   │   └── vodafone-test.cy.js
│   ├── fixtures/
│   ├── support/
│
├── cypress.config.js
├── package.json
└── README.md
🔄 Continuous Integration (CI) – CircleCI Setup
To automatically run tests in CI:

Sign up at https://circleci.com/

Connect your GitHub account

Add this repository:
vodafone-cypress-test-Mojica

Add a .circleci/config.yml file with the following content:

yaml
Copy code
version: 2.1
orbs:
  cypress: cypress-io/cypress@3
workflows:
  version: 2
  run_tests:
    jobs:
      - cypress/run:
          build: npm install
          start: npx cypress run
Push your changes — CircleCI will automatically run your Cypress tests.

👤 Author
Name: Julie Inez Mojica
Email: ainez_einstein@yahoo.com
Contact: 09563275548
GitHub: https://github.com/ainezeinstein10-del

🧾 Notes
Demonstrates reusability, readability, and maintainability in Cypress automation.

Validates UI consistency, API accuracy, and cart flow integrity.

Compatible with CircleCI, GitLab CI, and Jenkins.

📄 License
For Technical Assessment Purposes Only — not affiliated with Vodafone.

yaml
Copy code

---

✅ **Instructions:**  
1. Copy the above text.  
2. In VS Code, create or open your `README.md`.  
3. Paste and save.  
4. Commit and push:

```bash
git add README.md
git commit -m "Add README documentation"
git push origin main