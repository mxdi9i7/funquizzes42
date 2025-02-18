import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Quiz Time',
  description: 'Read our terms of service to understand your rights and responsibilities when using Quiz Time.',
  openGraph: {
    title: 'Terms of Service - Quiz Time',
    description: 'Read our terms of service to understand your rights and responsibilities when using Quiz Time.',
  }
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <article className="container mx-auto px-4 py-12">
        <header>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
        </header>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              1. Acceptance of Terms
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              By accessing and using Quiz Time, you accept and agree to be bound
              by the terms and provision of this agreement.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              2. User Responsibilities
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              You are responsible for:
            </p>
            <ul className='list-disc list-inside mt-4 text-gray-600 space-y-2'>
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>
                Ensuring that your use of the service complies with all
                applicable laws
              </li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              3. Intellectual Property
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              All content included on Quiz Time, such as text, graphics, logos,
              and software, is the property of Quiz Time or its content
              suppliers and protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              4. Modifications to Service
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              Quiz Time reserves the right to modify or discontinue, temporarily
              or permanently, the service with or without notice at any time.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
