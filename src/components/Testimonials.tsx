const testimonials = [
  {
    content: "Would highly recommend if you need any tears in your couch or furniture fixed.",
    author: "Cody LaVigne",
    location: "Google Review",
    rating: 5,
  },
  {
    content: "Did an amazing job! Very professional, upfront, and honest. Would highly recommend!",
    author: "Sara Cannon",
    location: "Google Review",
    rating: 5,
  },
  {
    content: "I took an old leather carrying case for a ceremonial sword/scabbard to Brad for rejuvenation and repair. The leather was very dry, the stitching around the edges was totally gone and the cover flap was non-functional. Much to my surprise, he restored it with oil, new stitching, and reinforcement around the latch. Looks great. His workmanship and attention to detail is outstanding. And reasonably priced. I highly recommend him for vinyl and leather work.",
    author: "Paul Ducas",
    location: "Google Review",
    rating: 5,
  },
  {
    content: "Does Amazing work recovering, and repairing, leathers and vinyls. From commercial to residential.",
    author: "Maria",
    location: "Google Review",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
            What Woodstock Says About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from our neighbors in Cherokee County. We're proud to be Woodstock's most trusted leather repair service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#C9A327]/30 hover:shadow-lg transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#C9A327]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-black">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <span className="text-[#C9A327] font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-gray-600 font-medium">5.0 Rating on Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
