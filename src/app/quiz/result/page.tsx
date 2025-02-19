'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface LeaderboardEntry {
  username: string;
  score: number;
}

interface SubjectLeaderboard {
  [key: string]: LeaderboardEntry[];
}

export default function ResultPage() {
  const [leaderboards, setLeaderboards] = useState<SubjectLeaderboard>({
    geography: [],
    history: [],
  });

  useEffect(() => {
    // Launch confetti when page loads
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    const subjects = ['geography', 'history'];
    const newLeaderboards: SubjectLeaderboard = {};

    subjects.forEach((subject) => {
      const scores: LeaderboardEntry[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith(`${subject}_username`)) {
          const username = localStorage.getItem(key);
          const score = localStorage.getItem(`${subject}_score`);
          if (username && score) {
            scores.push({
              username,
              score: parseInt(score),
            });
          }
        }
      }
      newLeaderboards[subject] = scores
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
    });

    setLeaderboards(newLeaderboards);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200 via-purple-200 to-pink-200 py-12 px-4'
    >
      <div className='max-w-7xl mx-auto'>
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          className='text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text drop-shadow-lg'
        >
          🏆 Quiz Champions 🏆
        </motion.h1>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
        >
          {Object.entries(leaderboards).map(
            ([subject, entries], subjectIndex) => (
              <motion.div
                key={subject}
                initial={{ x: subjectIndex % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: subjectIndex * 0.2 }}
                className='bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border-4 border-blue-200 hover:border-purple-300 transition-all duration-500 transform hover:scale-[1.02]'
              >
                <h2 className='text-3xl font-bold mb-8 capitalize text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
                  {subject} Masters
                </h2>

                <div className='space-y-4'>
                  <AnimatePresence>
                    {entries.length > 0 ? (
                      entries.map((entry, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className='flex items-center justify-between p-6 rounded-2xl bg-white/50 backdrop-blur-sm border-2 border-blue-200 hover:border-purple-300 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg'
                        >
                          <div className='flex items-center space-x-4'>
                            <span
                              className={`
                              w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg
                              ${
                                index === 0
                                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-300 text-white'
                                  : index === 1
                                  ? 'bg-gradient-to-r from-gray-400 to-gray-300 text-white'
                                  : index === 2
                                  ? 'bg-gradient-to-r from-amber-700 to-amber-600 text-white'
                                  : 'bg-gradient-to-r from-blue-200 to-purple-200 text-blue-600'
                              }
                            `}
                            >
                              {index + 1}
                            </span>
                            <span className='font-bold text-lg text-gray-700'>
                              {entry.username}
                            </span>
                          </div>
                          <span className='font-extrabold text-xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-transparent bg-clip-text'>
                            {entry.score} pts
                          </span>
                        </motion.div>
                      ))
                    ) : (
                      <p className='text-center text-gray-500 text-lg italic'>
                        No entries yet
                      </p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='mt-12 text-center'
        >
          <Link
            href='/'
            className='inline-block px-12 py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 font-bold text-xl shadow-xl hover:shadow-2xl'
          >
            Return to Homepage ✨
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
