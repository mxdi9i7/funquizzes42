export default function Contact() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
      <div className='absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
      <div className='absolute -bottom-8 left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>

      <div className='container mx-auto px-4 py-16 relative z-10'>
        <h1 className='text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text'>
          Get in Touch
        </h1>

        <div className='bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto border border-white/50 transform hover:scale-[1.02] transition-all duration-300'>
          <form className='space-y-8'>
            <div className='group'>
              <label
                htmlFor='name'
                className='block text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2 transform group-hover:translate-x-1 transition-transform'
              >
                Your Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full px-5 py-3 bg-white/50 backdrop-blur-sm border-2 border-purple-200 rounded-xl focus:ring-4 ring-purple-100 focus:border-purple-400 transition-all duration-300 outline-none'
                required
                placeholder='John Doe'
              />
            </div>

            <div className='group'>
              <label
                htmlFor='email'
                className='block text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-2 transform group-hover:translate-x-1 transition-transform'
              >
                Your Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full px-5 py-3 bg-white/50 backdrop-blur-sm border-2 border-purple-200 rounded-xl focus:ring-4 ring-purple-100 focus:border-purple-400 transition-all duration-300 outline-none'
                required
                placeholder='john@example.com'
              />
            </div>

            <div className='group'>
              <label
                htmlFor='message'
                className='block text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text mb-2 transform group-hover:translate-x-1 transition-transform'
              >
                Your Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={6}
                className='w-full px-5 py-3 bg-white/50 backdrop-blur-sm border-2 border-purple-200 rounded-xl focus:ring-4 ring-purple-100 focus:border-purple-400 transition-all duration-300 outline-none resize-none'
                required
                placeholder='Write your message here...'
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-200 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group'
            >
              <span className='absolute w-64 h-64 mt-12 group-hover:-mt-24 group-hover:-ml-32 ml-64 transition-all duration-1000 bg-white opacity-10 rotate-45 transform scale-x-0 group-hover:scale-x-100 origin-left'></span>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
