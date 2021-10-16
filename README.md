# Phone Directory Server

### Installation

* Clone this project.

> git clone https://github.com/Solid129/exam-page-app

* open directory `exam_page`

> cd exam_page

* Install dependencies of the project

> npm install

* Change baseUrl in App.js.

* Run the project using

> npm start

## Introduction

* It is a React app for online exam webpage.

Sample Data for Exam::

```javascript
{
        examDurationInMinutes: 120,
        sections: [
          {
            maths: [
              { qnum: "1", quesText: "What is square of 2?", option1: "1", option2: "2", option3: "3", option4: "4" }
            ]
          },
          {
            english: [
              { qnum: "1", quesText: "Which of the following sentences is grammatically incorrect?", option1: "Is this your jacket?", "option2": "Whose jacket is this?", "option3": "Is this jacket yours?", "option4": "Who's jacket is this?" }
            ]
          },
          {
            science: [
              { qnum: "1", quesText: "What is total number of planets in our solar system?", option1: "6", option2: "7", option3: "8", option4: "9" }
            ]
          }
        ]
      }
```