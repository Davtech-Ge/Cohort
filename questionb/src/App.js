import React, { useState } from 'react'
import Quest1 from './Question/Quest1'
import Quest2 from './Question/Quest2'
import Quest3 from './Question/Quest3'
import Quest4 from './Question/Quest4'

const questionComponents = [
    (props) => <Quest1 {...props} />,
    (props) => <Quest2 {...props} />,
    (props) => <Quest3 {...props} />,
    (props) => <Quest4 {...props} />
];

const App = () => {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * 4));
    const [completed, setCompleted] = useState(false);

    const handleAnswer = (questionIndex, isCorrect) => {
        setAnswers(prev => {
            // Only update if not already answered correctly
            if (!prev[questionIndex] && isCorrect) {
                const updated = { ...prev, [questionIndex]: true };
                setScore(s => s + 1);

                // Check if all questions are answered correctly
                if (Object.keys(updated).length === 4) {
                    setCompleted(true);
                } else {
                    // Pick a new random unanswered question
                    const remaining = [0,1,2,3].filter(i => !updated[i]);
                    const next = remaining[Math.floor(Math.random() * remaining.length)];
                    setCurrentIndex(next);
                }
                return updated;
            }
            // If answered incorrectly or already answered, just update for UI
            return { ...prev, [questionIndex]: prev[questionIndex] || isCorrect };
        });
    };

    if (completed) {
        return (
            <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
                <h1 className="text-2xl text-white font-bold">QUIZ App</h1>
                <div className="mt-8 text-2xl">Congratulations! You answered all questions correctly.</div>
                <div className="mt-4">Final Score: {score}</div>
            </div>
        );
    }

    const QuestionComponent = questionComponents[currentIndex];

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
            <h1 className="text-2xl text-white font-bold">QUIZ App</h1>
            <div>
                <QuestionComponent
                    handleAnswer={isCorrect => handleAnswer(currentIndex, isCorrect)}
                    answered={answers[currentIndex]}
                />
                <div className="mt-4">Score: {score}</div>
                <div className="mt-2 text-sm text-gray-400">
                    Questions answered: {Object.keys(answers).length} / 4
                </div>
            </div>
        </div>
    );
}

export default App