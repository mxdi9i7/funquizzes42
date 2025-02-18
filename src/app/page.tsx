import Link from 'next/link';
export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden'>
      {/* Animated background blobs */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob'></div>
      <div className='absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000'></div>
      <div className='absolute -bottom-32 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000'></div>

      {/* Navbar */}
      <nav className='bg-white/70 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50'>
        <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center space-x-4 group'>
            <div className='w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl transform group-hover:rotate-180 transition-all duration-500'></div>
            <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text group-hover:scale-110 transition-transform'>
              Quiz Time
            </span>
          </div>
          <div className='flex space-x-8'>
            {['Home', 'Contact', 'Leaderboard'].map((item) => (
              <Link
                key={item}
                href={
                  item === 'Home'
                    ? '/'
                    : item === 'Leaderboard'
                    ? '/quiz/result'
                    : `/${item.toLowerCase()}`
                }
                className='relative text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text font-medium transition-all duration-300 group'
              >
                {item}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover:w-full transition-all duration-300'></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className='container mx-auto px-6 py-16 flex-grow relative z-10'>
        <div className='text-center space-y-6 mb-16'>
          <h1 className='text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text animate-gradient-x'>
            Welcome to Quiz Time!
          </h1>
          <p className='text-2xl text-gray-600 max-w-3xl mx-auto font-light'>
            Challenge yourself with our interactive quizzes and expand your
            knowledge in a fun, engaging way
          </p>
        </div>

        {/* Top Ad Banner */}
        <div className='w-full h-48 bg-white/80 backdrop-blur-lg rounded-3xl mb-16 flex items-center justify-center shadow-2xl border border-white/50 transform hover:scale-[1.02] transition-all duration-300'>
          <p className='text-gray-500 text-xl font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text'>
            Premium Advertisement Space
          </p>
        </div>

        {/* Quiz Categories */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
          {[
            {
              title: 'Geography',
              desc: 'Explore the amazing world of geography! Test your knowledge of countries, capitals, landmarks, and more.',
              gradient: 'from-blue-600 to-cyan-600',
            },
            {
              title: 'History',
              desc: 'Journey through time with historical adventures! Discover fascinating events and figures from the past.',
              gradient: 'from-purple-600 to-pink-600',
            },
          ].map((quiz) => (
            <Link
              key={quiz.title}
              href={`/quiz/${quiz.title.toLowerCase()}`}
              className='group perspective'
            >
              <div className='h-full bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/50 transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105'>
                <h2
                  className={`text-4xl font-bold mb-6 bg-gradient-to-r ${quiz.gradient} text-transparent bg-clip-text`}
                >
                  {quiz.title}
                </h2>
                <p className='text-gray-600 text-lg leading-relaxed'>
                  {quiz.desc}
                </p>
              </div>
            </Link>
          ))}

          {/* Side Ad Space */}
          <div className='bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/50 flex flex-col items-center justify-center space-y-4 hover:shadow-3xl transition-all duration-300 transform hover:scale-105'>
            <p className='text-xl font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text'>
              Advertisement Space
            </p>
            <p className='text-gray-500'>Your Ad Could Be Here</p>
          </div>
        </div>

        {/* Bottom Ad Banner */}
        <div className='w-full h-48 bg-white/80 backdrop-blur-lg rounded-3xl mt-16 flex items-center justify-center shadow-2xl border border-white/50 transform hover:scale-[1.02] transition-all duration-300'>
          <p className='text-gray-500 text-xl font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text'>
            Featured Advertisement Space
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-white/70 backdrop-blur-md shadow-lg border-t border-white/20 relative z-10'>
        <div className='container mx-auto px-6 py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-gray-600 font-medium'>
              © 2025 Quiz Time. All rights reserved.
            </div>
            <div className='flex space-x-8'>
              {['Privacy Policy', 'Terms of Service', 'Contact Us'].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className='text-gray-600 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300'
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
