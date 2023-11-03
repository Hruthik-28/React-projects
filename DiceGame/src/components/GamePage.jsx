import { useState } from 'react';
import { DiceRoll, Button, ShowRules} from './index'

const GamePage = () => {
  const [score, setScore] = useState(0)
  const [choice, setChoice] = useState(null)
  const [currentDice, setCurrentDice] = useState(1)
  const [error, setError] = useState('')
  const [showRules, setShowRules] = useState(false)

  const handleChoice = (selectedValue) => {
    setChoice(selectedValue);
    setError('');
  }

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const roleDice = () => {
    if (!choice) {
      setError('You have not selected any number')
      return
    }

    const randomNumber = generateRandomNumber(1, 7)
    setCurrentDice(randomNumber)

    if (choice === randomNumber) {
      setScore((prev) => prev + randomNumber)
    }else {
      setScore((prev) => prev - 2)
    }
    setChoice(undefined)
  }


  return (
    <>
      <nav className='max-w-full sm:flex justify-between items-center py-5 sm:px-10'>
        <div className='text-center'>
          <h1 className='text-6xl font-semibold'>{score}</h1>
          <h3 className='text-xl mt-3 font-medium'>Total Score</h3>
        </div>
        <div>
          {error && <h4 className='text-red-700 font-medium text-center'>{error}</h4>}
          <div className='flex flex-wrap justify-center sm:gap-5 gap-3 my-3'>
            {[1, 2, 3, 4, 5, 6].map((value) => (
              <Button 
                bgColor='bg-white'
                textColor='text-black'
                classname='px-4 py-2 border border-black hover:text-white hover:bg-black' 
                key={value} 
                onClick={() => handleChoice(value)}
              >
                {value}
              </Button>
            ))}
          </div>
          <p className='text-md font-medium text-center'>Select Number</p>
        </div>
      </nav>
      <main className='flex flex-col justify-center items-center sm:py-20 py-8'>
        <DiceRoll currentDice={currentDice} roleDice={roleDice}/>
        <h1 className='text-xl font-semibold mt-3'>Click on Dice to Roll</h1>
        <Button 
        onClick={() => setScore(0)} 
        classname='mt-5 px-10 sm:px-20 py-2 rounded-lg'>
          Reset Score
        </Button>
        <Button 
        onClick={() => setShowRules((prev) => !prev)} 
        classname='mt-5 px-10 sm:px-20 py-2 rounded-lg'>
          Show Rules
        </Button>
        {
          showRules == true ? <ShowRules /> : ''
        }
      </main>
    </> 
  );
};

export default GamePage;
