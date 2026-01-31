# Dineth_Playwright_Project
# IT3040 – Assignment 1  
## Automated Testing Using Playwright (TypeScript)

### Degree Programme
BSc (Hons) in Information Technology – Year 3  

### Module
IT3040 – IT Project Management  

### Semester
Semester 1  

### Student
Name: <Hasanjana M D>  
Registration Number: <IT23743212>  

---

## 1. Project Description

This repository contains an automated testing solution developed using **Playwright with TypeScript** to evaluate a real-world language transliteration system.

**Selected Assignment Option:**  
Option 1 – Singlish to Sinhala Transliteration

**System Under Test:**  
https://www.swifttranslator.com/

The objective of this project is to assess:
- Accuracy of Singlish to Sinhala conversion  
- Robustness of the system under different input conditions  
- Stability and usability of the user interface  

Testing is limited to **functional behavior and UI behavior only**, in accordance with the assignment specification.

---

## 2. Scope of Testing

The automated test suite covers:

- Simple, compound, and complex sentences  
- Interrogative and imperative sentence forms  
- Positive and negative sentence structures  
- Tense variations (past, present, future)  
- Pronoun and plural usage  
- Daily conversational language  
- Polite and informal phrasing  
- Mixed Singlish and English content  
- English technical and brand terms  
- Numbers, dates, time formats, and currency  
- Formatting variations (spaces, line breaks, paragraphs)  
- Robustness scenarios (joined words, typos, slang, emojis)  
- Real-time Sinhala output generation (UI behavior)

---

## 3. Test Case Summary

| Test Category | Number of Test Cases |
|--------------|----------------------|
| Positive Functional Tests | 24 |
| Negative Functional Tests | 10 |
| UI Test Cases | 1 |
| **Total** | **35** |

---

## 4. Technology Stack

- Playwright  
- TypeScript  
- Node.js  
- Visual Studio Code  

---

## 5. Project Structure

IT3040_Assignment1/
│
├── tests/
│ ├
│ │ 
│ │
│ ├── positive/
│ │ ├── pos_fun_001.spec.ts
│ │ 
│ │
│ │
│ ├── negative/
│ │ └── neg_fun_001.spec.ts
│ │
│ └── ui/
│ └── pos_ui_001.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md


---

## 6. Prerequisites

Before running the tests, ensure the following are installed:

- **Node.js (LTS version)**  
  Download: https://nodejs.org/

- **Git** (optional, for cloning the repository)  
  Download: https://git-scm.com/

- **Internet connection** (required to access the test application)

---

## 7. Installation Instructions

### Step 1: Clone the Repository

git clone <your-github-repository-link>

### Step 2: Navigate to the Project Directory

cd IT3040_Assignment1

### Step 3: Install Dependencies

npm install

## 8. Running the Automated Tests

Run All Tests - npx playwright test

View the HTML Test Report - npx playwright show-report

