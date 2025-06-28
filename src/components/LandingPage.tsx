import logoLight from '../assets/logo/stoic-app-logo-transparent-white.png'
import logoDark from '../assets/logo/stoic-app-logo-transparent.png'
import { ScrollText, Bookmark, NotebookPen } from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#333333] dark:bg-[#1C1C1C] dark:text-[#F5F5F5] font-[Poppins] transition-colors">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 py-32"
        data-aos="fade-up"
      >
        <div>
          <img
            src={logoDark}
            alt="Stoic App logo dark"
            className="block dark:hidden h-20 md:h-28 lg:h-32 mb-6"
            data-aos="zoom-in"
          />
          <img
            src={logoLight}
            alt="Stoic App logo light"
            className="hidden dark:block h-20 md:h-28 lg:h-32 mb-6"
            data-aos="zoom-in"
          />
        </div>
        <h1
          className="text-4xl md:text-5xl font-semibold mb-4"
          data-aos="fade-up"
        >
          Embrace the Stoic Mindset
        </h1>
        <p
          className="text-lg md:text-xl text-[#666666] dark:text-[#A5A5A5] max-w-2xl mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Stoic is a modern app to help you live with intention, discipline, and
          clarity. Reflect on timeless wisdom, journal your thoughts, and stay
          grounded each day.
        </p>
        <button
          aria-label="Join the Waitlist"
          className="px-6 py-2 bg-[#70BFBF] text-white font-medium rounded-xl shadow hover:opacity-90 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#333333] dark:focus:ring-[#F5F5F5] dark:focus:ring-offset-[#1C1C1C]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Join the Waitlist
        </button>
      </section>

      {/* Quote Preview Section */}
      <section className="bg-[#FAF3D4] dark:bg-[#FFDFA5] px-6 py-16">
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <blockquote className="italic text-xl md:text-2xl text-[#333333] dark:text-[#1C1C1C]">
            "You have power over your mind – not outside events. Realise this,
            and you will find strength."
          </blockquote>
          <cite
            className="block mt-4 text-[#666666] dark:text-[#2B2B2B]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            – Marcus Aurelius
          </cite>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="px-6 py-24 bg-[#F5F5F5] dark:bg-[#2B2B2B]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-[#A5A5A5] text-center mb-2">
            Features
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Why Choose Stoic?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Daily Reflections',
                description: 'Receive thought-provoking Stoic quotes each day.',
                icon: (
                  <ScrollText
                    size={40}
                    strokeWidth={1.5}
                    className="text-[#70BFBF] md:w-12 md:h-12 w-10 h-10"
                  />
                ),
              },
              {
                title: 'Save Your Favourites',
                description: 'Bookmark quotes and revisit wisdom any time.',
                icon: (
                  <Bookmark
                    size={40}
                    strokeWidth={1.5}
                    className="text-[#70BFBF] md:w-12 md:h-12 w-10 h-10"
                  />
                ),
              },
              {
                title: 'Private Journaling',
                description:
                  'Write and reflect daily to gain perspective and track your Stoic journey.',
                icon: (
                  <NotebookPen
                    size={40}
                    strokeWidth={1.5}
                    className="text-[#70BFBF] md:w-12 md:h-12 w-10 h-10"
                  />
                ),
              },
            ].map(({ title, description, icon }, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white dark:bg-[#1C1C1C] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-[#666666] dark:text-[#A5A5A5]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to begin your Stoic journey?
        </h2>
        <p className="text-[#666666] dark:text-[#A5A5A5] mb-6">
          Sign up to be notified when the Stoic App launches.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="you@example.com"
            required
            aria-label="Email address"
            className="px-4 py-2 rounded-lg bg-[#F9F9F9] dark:bg-[#2A2A2A] border border-[#DDDDDD] dark:border-[#444444] w-full max-w-sm focus:outline-none"
          />
          <button
            aria-label="Notify Me"
            type="submit"
            className="px-6 py-2 bg-[#70BFBF] text-white font-medium rounded-xl shadow hover:opacity-90 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#333333] dark:focus:ring-[#F5F5F5] dark:focus:ring-offset-[#1C1C1C]"
          >
            Notify Me
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 text-center text-sm text-[#A5A5A5] dark:text-[#666666]">
        © {new Date().getFullYear()} Stoic App by Zenshuii
      </footer>
    </main>
  )
}
