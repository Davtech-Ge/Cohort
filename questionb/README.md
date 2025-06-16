# Quiz App

This is a simple React-based Quiz Application that presents four questions to the user in random order. The user must answer each question correctly to complete the quiz. The app tracks the user's score and displays a congratulatory message upon completion.

## Features

- Four unique questions, each displayed one at a time in random order
- Only allows progression after a correct answer
- Tracks and displays the user's score
- Prevents answering the same question multiple times
- Shows a completion message and final score when all questions are answered correctly
- Responsive and user-friendly interface

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/quiz-app.git
    cd quiz-app/questionb
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

4. Open your browser and go to `http://localhost:3000`

## Project Structure

```
questionb/
├── src/
│   ├── App.js
│   └── Question/
│       ├── Quest1.js
│       ├── Quest2.js
│       ├── Quest3.js
│       └── Quest4.js
├── package.json
└── README.md
```

## Usage

- Answer the question displayed on the screen.
- Only after answering correctly will the next random question appear.
- The quiz ends when all questions are answered correctly.
- Your score and progress are displayed throughout the quiz.

## Customization

- To add or modify questions, edit the files in `src/Question/`.
- To change the quiz logic or UI, modify `src/App.js`.

## License

This project is licensed under the MIT License.

---

**Enjoy your quiz!**
