import React, { useState } from 'react'

const Quest2 = ({handleAnswer}) => {
    const [error, setError] = useState("");

   const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const selectedAnswer = form.answer.value;

        if (selectedAnswer === 'B') {
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
        <p className='text-white mb-4'>Who is the President of the United State of America</p>
        <div className='flex flex-col items-start mb-4'>
          <label className='text-white'>
            <input type="radio" name="answer" value="A" className='mr-2' />
            A.  Joe Biden
          </label>
          <label className='text-white'>
            <input type="radio" name="answer" value="B" className='mr-2' />
            B. Donald Trump
          </label>
          <label className='text-white'>
            <input type="radio" name="answer" value="C" className='mr-2' />
            C. Barack Obama
          </label>
          <label className='text-white'>
            <input type="radio" name="answer" value="D" className='mr-2' />
            D. Powell Bush
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

export default Quest2
