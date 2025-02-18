import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Quiz Time',
  description: 'Learn how Quiz Time protects and handles your personal information. Read our comprehensive privacy policy.',
  openGraph: {
    title: 'Privacy Policy - Quiz Time',
    description: 'Learn how Quiz Time protects and handles your personal information.',
  }
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <article className="container mx-auto px-4 py-12">
        <header>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
        </header>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We collect information that you provide directly to us when using Quiz Time, including:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
              <li>Your name and email address when you create an account</li>
              <li>Quiz results and performance data</li>
              <li>Information about how you use our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Track your progress and generate performance reports</li>
              <li>Send you technical notices and support messages</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure, and we cannot 
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@quiztime.com
            </p>
          </section>
        </div>
      </article>
    </main>
  );
} 