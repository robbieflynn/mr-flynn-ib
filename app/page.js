import Link from 'next/link'
import coursesData from '../data/courses.json'

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Navigation */}
      <nav className="bg-navy text-paper px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Mr Flynn IB</div>
        <div className="flex gap-8">
          <a href="#courses" className="hover:text-gold">Courses</a>
          <a href="#ia" className="hover:text-gold">IA Specialist</a>
          <a href="#about" className="hover:text-gold">About</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-navy text-paper py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Master IB Mathematics</h1>
        <p className="text-xl mb-8">with examiner insight</p>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Learn from someone who marks the exams. Complete video lessons for every topic, taught by an IB examiner with 15+ years experience.
        </p>
        <a href="#courses" className="inline-block bg-accent text-paper px-8 py-3 rounded font-bold hover:bg-gold">
          View Courses
        </a>
      </section>

      {/* Trust Bar */}
      <section className="bg-paper border-b border-navy/20 py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-navy">1M+</div>
            <div className="text-slate">YouTube views</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy">15+</div>
            <div className="text-slate">Years teaching</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy">IB</div>
            <div className="text-slate">Examiner & Moderator</div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center">Choose Your Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coursesData.courses.map((course) => (
              <div key={course.id} className="border-2 border-navy/20 rounded p-8 hover:border-accent hover:shadow-lg transition">
                <div className="text-sm font-bold text-accent mb-2 uppercase">{course.pathCode}</div>
                <h3 className="text-2xl font-bold text-navy mb-4">{course.name}</h3>
                <p className="text-slate mb-6">{course.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-3xl font-bold text-gold">${course.price}</div>
                  <a href={course.teachableUrl} className="bg-navy text-paper px-6 py-2 rounded font-bold hover:bg-accent">
                    Enroll
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA Section */}
      <section id="ia" className="bg-navy text-paper py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Internal Assessment Specialist</h2>
          <p className="text-lg mb-8">
            As an IB moderator, I know exactly what examiners are looking for in your IA. Get guidance on selecting a strong exploration, structuring your work, and avoiding common mistakes.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="border-l-4 border-gold pl-6">
              <h4 className="font-bold mb-2">Real examining experience</h4>
              <p>I moderate IAs every session. I know the mark scheme inside out.</p>
            </div>
            <div className="border-l-4 border-gold pl-6">
              <h4 className="font-bold mb-2">Complete coverage</h4>
              <p>AA and AI pathways, HL and SL — every student gets relevant guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent text-paper py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get a free IB Maths resource</h2>
        <p className="mb-8">Join 1000+ students getting weekly IB Maths tips and resources.</p>
        <form className="max-w-md mx-auto flex gap-4">
          <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded text-navy" required />
          <button type="submit" className="bg-navy px-6 py-2 rounded font-bold hover:bg-gold">
            Get Free Resource
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-paper py-8 px-6 text-center">
        <p>Mr Flynn IB · IB Examiner & Moderator · Built with Next.js</p>
      </footer>
    </div>
  )
}
