import React, { useState } from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Your custom content goes here. Feel free to replace this text with your own message.",
      name: "John Doe",
      position: "CEO",
      image: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxtYW58ZW58MHwwfHx8MTY5NzQ0MjkzOHww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      id: 2,
      quote: "Another testimonial content goes here.",
      name: "Jane Smith",
      position: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/women/80.jpg"
    },
    {
        id: 3,
        quote: "Your custom content goes here. Feel free to replace this text with your own message.",
        name: "John Dfgsdoe",
        position: "CEO",
        image: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxtYW58ZW58MHwwfHx8MTY5NzQ0MjkzOHww&ixlib=rb-4.0.3&q=80&w=1080"
      },
      {
        id: 4,
        quote: "Another testimonial content goes here.",
        name: "Jane Smifsfth",
        position: "Marketing Manager",
        image: "https://randomuser.me/api/portraits/women/80.jpg"
      },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleSwipeStart = (e) => {
    // Initialize touch start coordinates
    startX = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleSwipeEnd = (e) => {
    // Calculate swipe distance and decide next or previous testimonial
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const deltaX = endX - startX;
    
    if (deltaX > 50) {
      prevTestimonial();
    } else if (deltaX < -50) {
      nextTestimonial();
    }
  };

  let startX = 0; // Variable to store start touch/mouse position

  return (
    <div>
      <section
        className="relative isolate overflow-hidden border-b border-t bg-white px-6 py-24 sm:py-32 lg:px-8"
        onTouchStart={handleSwipeStart}
        onTouchEnd={handleSwipeEnd}
        onMouseDown={handleSwipeStart}
        onMouseUp={handleSwipeEnd}
        onMouseLeave={handleSwipeEnd}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-12 grayscale" src="/assets/images/logo.png" alt="Zilla Digital Logo" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>{testimonials[currentIndex].quote}</p>
            </blockquote>
            <figcaption className="mt-10">
              <img className="mx-auto h-16 w-16 rounded-full object-cover" src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                  <circle cx="1" cy="1" r="1"></circle>
                </svg>
                <div className="text-gray-600">{testimonials[currentIndex].position}</div>
              </div>
            </figcaption>
          </figure>
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 ml-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={nextTestimonial}
              disabled={currentIndex === testimonials.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
