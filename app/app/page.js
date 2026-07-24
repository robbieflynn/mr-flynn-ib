import coursesData from '../data/courses.json'

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">

      {/* Nav */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white sticky top-0 z-50 border-b border-soft">
        <img src="/images/logo-full.png" alt="Mr. Flynn IB" className="h-10 md:h-12" />
        <div className="hidden md:flex gap-8 items-center font-semibold">
          <a href="#courses" className="hover:text-brand">Courses</a>
          <a href="#ia" className="hover:text-brand">IA Guidance</a>
          <a href="#schools" className="hover:text-brand">Schools</a>
          <a href="#about" className="hover:text-brand">About</a>
          <a href="#free-resource" className="bg-brand text-white px-5 py-2 rounded hover:bg-brandDark transition">
            Free Resource
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="/images/hero-banner.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-ink mb-4">
            Master IB Mathematics
          </h1>
          <p className="text-xl md:text-2xl text-brand font-semibold mb-6">
            with examiner insight
          </p>
          <p className="max-w-2xl mx-auto text-lg text-ink/80 mb-10">
            Complete video lessons for every topic. Real IA guidance from an IB examiner and moderator.
            Taught by someone who knows exactly how the exam is marked.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#courses" className="bg-brand text-white px-8 py-3 rounded font-bold hover:bg-brandDark transition">
              View Courses
            </a>
            <a href="#free-resource" className="border-2 border-brand text-brand px-8 py-3 rounded font-bold hover:bg-brand hover:text-white transition">
              Get a Free Resource
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-soft py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-brand">1M+</div>
            <div className="text-sm text-ink/70">YouTube views</div>
          </div>
          <div>
            <div className="text-3xl font-black text-brand">15+</div>
            <div className="text-sm text-ink/70">Years teaching</div>
          </div>
          <div>
            <div className="text-3xl font-black text-brand">IB</div>
            <div className="text-sm text-ink/70">Examiner &amp; Moderator</div>
          </div>
          <div>
            <div className="text-3xl font-black text-brand">4</div>
            <div className="text-sm text-ink/70">Full pathway courses</div>
          </div>
        </div>
      </section>

      {/* Free resource / email capture */}
      <section id="free-resource" className="py-20 px-6 bg-brand text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Get the Complete Syllabus Checklist — Free</h2>
          <p className="text-lg mb-8 text-white/90">
            Every subtopic in your course, laid out topic by topic, so you always know what's covered and what's next.
            Enter your email and I'll send it straight over.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 rounded text-ink"
            />
            <button type="submit" className="bg-white text-brand px-6 py-3 rounded font-bold hover:bg-soft transition">
              Send Me the Checklist
            </button>
          </form>
        </div>
      </section>

      {/* Video - see a real lesson */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-3">See a Real Lesson</h2>
          <p className="text-ink/70 mb-8">
            Not a trailer — an actual lesson from the course library, so you know exactly what you're getting.
          </p>
          <div className="aspect-video w-full rounded overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/XnuuZNNjcfU"
              title="Mr Flynn IB - The Product Rule"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 px-6 bg-soft">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-3 text-center">Choose Your Course</h2>
          <p className="text-ink/70 text-center mb-12">Full syllabus coverage for every IB Mathematics pathway.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coursesData.courses.map((course) => (
              <div key={course.id} className="bg-white border border-soft rounded p-8 hover:shadow-lg transition">
                <div className="text-xs font-bold text-brand mb-2 uppercase tracking-wide">{course.pathCode}</div>
                <h3 className="text-xl font-bold text-ink mb-3">{course.name}</h3>
                <p className="text-ink/70 mb-6">{course.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-black text-ink">${course.price}</div>
                  <a href={course.teachableUrl} className="bg-brand text-white px-6 py-2 rounded font-bold hover:bg-brandDark transition">
                    Enroll on Teachable
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mr Flynn IB */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-12 text-center">Why Mr Flynn IB</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-brand font-black text-2xl mb-2">01</div>
              <h4 className="font-bold text-lg mb-2">Examiner insight</h4>
              <p className="text-ink/70">I mark IB exams and moderate IAs. You learn exactly what earns marks — not just how to solve the problem.</p>
            </div>
            <div>
              <div className="text-brand font-black text-2xl mb-2">02</div>
              <h4 className="font-bold text-lg mb-2">Complete coverage</h4>
              <p className="text-ink/70">Every topic, every pathway, in syllabus order. Nothing skipped, nothing assumed.</p>
            </div>
            <div>
              <div className="text-brand font-black text-2xl mb-2">03</div>
              <h4 className="font-bold text-lg mb-2">Proven reach</h4>
              <p className="text-ink/70">1M+ YouTube views from students who found the explanations actually made sense.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IA specialist */}
      <section id="ia" className="py-20 px-6 bg-ink text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">Internal Assessment Specialist</h2>
          <p className="text-lg text-center text-white/80 mb-10 max-w-2xl mx-auto">
            The IA is worth 20% of your final grade — and it's the part most students get the least guidance on.
            As an IB moderator, I know exactly what examiners are looking for.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-brand pl-6">
              <h4 className="font-bold mb-2">Real moderating experience</h4>
              <p className="text-white/80">I moderate IAs every session, for both AA and AI. I know the mark scheme inside out.</p>
            </div>
            <div className="border-l-4 border-brand pl-6">
              <h4 className="font-bold mb-2">A complete written guide</h4>
              <p className="text-white/80">Step-by-step guidance on choosing a topic, structuring your work, and avoiding the mistakes that cost marks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schools */}
      <section id="schools" className="py-20 px-6 bg-soft">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-4">For Schools</h2>
          <p className="text-lg text-ink/70 mb-8 max-w-2xl mx-auto">
            Give your whole cohort access to complete IB Mathematics video courses and examiner-led IA guidance.
            Licensing is tailored to your school's size and needs.
          </p>
          <a
            href="mailto:contact@mrflynnib.com?subject=School%20Licensing%20Enquiry"
            className="inline-block bg-ink text-white px-8 py-3 rounded font-bold hover:bg-brand transition"
          >
            Enquire About School Licensing
          </a>
        </div>
      </section>

      {/* About / Meet Rob */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <img src="/images/rob-flynn.jpg" alt="Rob Flynn" className="rounded w-full md:col-span-1 object-cover" />
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black text-ink mb-4">Meet Rob Flynn</h2>
            <p className="text-ink/70 mb-4">
              I'm an IB Mathematics teacher, examiner, and IA moderator with over 15 years in the classroom.
              I started making video lessons so my own students could rewatch what we covered in class —
              that grew into a full library covering every IB Maths pathway, now used by students worldwide.
            </p>
            <p className="text-ink/70">
              Every course and every piece of guidance comes from the same place: knowing exactly what
              the IB is looking for, because I'm one of the people marking it.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-brand text-white text-center">
        <h2 className="text-3xl font-black mb-4">Ready to master IB Maths?</h2>
        <p className="mb-8 text-white/90">Start with a free resource, or jump straight into a course.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#courses" className="bg-white text-brand px-8 py-3 rounded font-bold hover:bg-soft transition">
            View Courses
          </a>
          <a href="#free-resource" className="border-2 border-white px-8 py-3 rounded font-bold hover:bg-white hover:text-brand transition">
            Get Free Resource
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-soft py-10 px-6 text-center">
        <img src="/images/logo-mark.png" alt="" className="h-8 mx-auto mb-4 opacity-80" />
        <p className="text-ink/60 text-sm">Mr. Flynn IB · IB Examiner &amp; Moderator · contact@mrflynnib.com</p>
      </footer>
    </div>
  )
}
