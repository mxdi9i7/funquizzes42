'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizData {
  questions: Question[];
}
export default function QuizPage() {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAds, setShowAds] = useState(false);
  const [username, setUsername] = useState('');
  const [showUsernameInput, setShowUsernameInput] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams();
  const subject = params.subject;

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const response = await import(`@/quiz-data/${subject}.json`);
        setQuizData(response);
      } catch (error) {
        console.error('Failed to load quiz data:', error);
        router.push('/');
      }
    };
    loadQuizData();
  }, [subject, router]);

  if (!quizData) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-200 via-blue-200 to-pink-200'>
        <div className='flex flex-col items-center space-y-4'>
          <div className='w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin'></div>
          <div className='text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text'>
            Loading your quiz...
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleAnswerSelect = (selectedAnswer: string) => {
    setSelectedAnswer(selectedAnswer);

    setTimeout(() => {
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore((prevScore) => prevScore + 100);

        if (currentQuestionIndex === quizData.questions.length - 1) {
          setShowUsernameInput(true);
        } else {
          setCurrentQuestionIndex((prev) => prev + 1);
          setSelectedAnswer(null);
        }
      } else {
        setShowAds(true);
      }
    }, 1000);
  };

  const handleUsernameSubmit = () => {
    if (username.trim()) {
      localStorage.setItem(`${subject}_score`, (score + 100).toString());
      localStorage.setItem(`${subject}_username`, username);
      router.push('/quiz/result');
    }
  };

  if (showUsernameInput) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='min-h-screen p-8 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-200 via-blue-200 to-purple-200'
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className='w-full max-w-2xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border-4 border-blue-200'
        >
          <motion.h2
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className='text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'
          >
            🎉 Congratulations! You Completed the Quiz!
          </motion.h2>
          <div className='space-y-6'>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter your username'
              className='w-full p-6 text-lg border-2 border-blue-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 ring-purple-100 transition-all duration-300 bg-white/50 backdrop-blur-sm'
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleUsernameSubmit}
              className='w-full p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl transition-all font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700'
            >
              Submit Score & View Leaderboard
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (showAds) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='min-h-screen p-8 flex flex-col items-center justify-center gap-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-200 via-pink-200 to-purple-200'
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className='w-full max-w-2xl h-96 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl flex items-center justify-center border-4 border-red-200'
        >
          <p className='text-2xl font-medium text-gray-400'>
            Advertisement Space
          </p>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAds(false)}
          className='px-12 py-6 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full hover:from-red-700 hover:to-pink-700 transition-all font-bold text-xl shadow-xl'
        >
          Try Again
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-screen p-8 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200 via-purple-200 to-pink-200'
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className='w-full max-w-3xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border-4 border-blue-200'
      >
        <div className='mb-12'>
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className='flex items-center justify-between mb-8'
          >
            <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>
              Question {currentQuestionIndex + 1}/{quizData.questions.length}
            </h2>
            <div className='text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text'>
              Score: {score}
            </div>
          </motion.div>
          <p className='text-2xl text-gray-700 font-medium'>
            {currentQuestion.question}
          </p>
        </div>

        <AnimatePresence>
          <div className='space-y-6'>
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full p-6 text-left rounded-2xl transition-all transform hover:scale-102 font-medium text-lg
                  ${
                    selectedAnswer === option
                      ? option === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-2 border-green-400 text-green-700'
                        : 'bg-red-100 border-2 border-red-400 text-red-700'
                      : 'border-2 border-blue-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                  }`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </AnimatePresence>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='mt-8 flex justify-between items-center'
        >
          <div className='h-2 flex-1 bg-gray-200 rounded-full overflow-hidden'>
            <div
              className='h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500'
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / quizData.questions.length) * 100
                }%`,
              }}
            ></div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
