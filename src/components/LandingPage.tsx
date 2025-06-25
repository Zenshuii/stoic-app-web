import logo from '../assets/logo/stoic-app-logo-transparent-white.png'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#333333] dark:bg-[#1C1C1C] dark:text-[#F5F5F5] font-[Poppins] transition-colors">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <img
          src={logo}
          alt="Stoic App logo"
          className="h-20 md:h-28 lg:h-32 mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Embrace the Stoic Mindset
        </h1>
        <p className="text-lg md:text-xl text-[#666666] dark:text-[#A5A5A5] max-w-2xl mb-8">
          Stoic is a modern app to help you live with intention, discipline, and
          clarity. Reflect on timeless wisdom, journal your thoughts, and stay
          grounded each day.
        </p>
        <button
          aria-label="Join the Waitlist"
          className="px-6 py-2 bg-[#70BFBF] text-white font-medium rounded-xl shadow hover:opacity-90 transition cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-1"
        >
          Join the Waitlist
        </button>
      </section>

      {/* Quote Preview Section */}
      <section className="bg-[#FAF3D4] dark:bg-[#FFDFA5] px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="italic text-xl md:text-2xl text-[#333333] dark:text-[#1C1C1C]">
            "You have power over your mind — not outside events. Realise this,
            and you will find strength."
          </blockquote>
          <cite className="block mt-4 text-[#666666] dark:text-[#2B2B2B]">
            – Marcus Aurelius
          </cite>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-24 bg-[#F5F5F5] dark:bg-[#2B2B2B]">
        <div className="text-center">
          <h3 className="text-xl font-medium mb-2">Daily Reflections</h3>
          <p className="text-[#666666] dark:text-[#A5A5A5]">
            Receive thought-provoking Stoic quotes each day.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-medium mb-2">Save Your Favourites</h3>
          <p className="text-[#666666] dark:text-[#A5A5A5]">
            Bookmark quotes and revisit wisdom any time.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-medium mb-2">Private Journaling</h3>
          <p className="text-[#666666] dark:text-[#A5A5A5]">
            Write and reflect daily to gain perspective and track your Stoic
            journey.
          </p>
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
            className="px-4 py-2 rounded-lg bg-[#F9F9F9] dark:bg-[#2A2A2A] border border-[#DDDDDD] dark:border-[#444444] w-full max-w-sm focus:outline-none"
          />
          <button
            aria-label="Notify Me"
            type="submit"
            className="px-6 py-2 bg-[#70BFBF] text-white font-medium rounded-xl shadow hover:opacity-90 transition cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-1"
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
