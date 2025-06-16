import React, { useState } from 'react'

const Quest4 = ({handleAnswer}) => {

    const [error, setError] = useState("");
   const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const selectedAnswer = form.answer.value;

        if (selectedAnswer === 'C') {
            handleAnswer(true);
            setError("");
        } else {
            setError('Incorrect. Please try again.');
            handleAnswer(false);
        }
    }
  return (
    <div>
      <form name='Quest1' className='flex flex-col items-center justify-center bg-blue-700 p-6 rounded-lg shadow-md' onSubmit={handleSubmit}>
        <h1>Question</h1>
        <p className='text-white mb-4'>Who is the President of Nigeria?</p>
        <div className='flex flex-col items-start mb-4'>
          <label className='text-white'>
            <input type="radio" name="answer" value="A" className='mr-2' />
            A. Peter Obi
          </label>
          <label className='text-white'>
            <input type="radio" name="answer" value="B" className='mr-2' />
            B. Atiku Abubakar
          </label>
          <label className='text-white'>
            <input type="radio" name="answer" value="C" className='mr-2' />
            C. Bola Ahmed Tinubu
          </label>
          <label className='text-white'>
            <input type="radio" name="answer" value="D" className='mr-2' />
            D. Sowore Oniru
          </label>
        </div>
        <button type="submit" className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300'>
          Submit Answer
        </button>
        {error && <div className="text-red-400 mt-2">{error}</div>}
      </form>
    </div>
  )
}

export default Quest4
