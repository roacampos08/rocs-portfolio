'use client';
import React, { useState } from 'react';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: 'Mercedes Segura',
      position: '¡Supérate! Hilasal\'s Principal',
      image: '/images/mercy.jpeg',
      rating: 5,
      text: 'I would describe Rodrigo Campos as a resilient person with a desire to excel. He is decisive and sets goals with determination. I have observed that he is willing to transform his environment in a positive way. He is analytical, thinks critically, and communicates assertively. I believe he is focused on helping the community to become a society with a transformative vision for new generations. He is focused and a very well-rounded person, both academically and personally.'
    },
    {
      name: 'Irvin Pineda',
      position: 'Computer science teacher at ¡Supérate! Hilasal Center',
      image: '/images/irvin.jpg',
      rating: 5,
      text: 'Rodrigo is a highly responsible young man with outstanding programming skills and a willingness to take on new challenges. He is characterized by his commitment to continuous improvement and his ability to find efficient solutions to complex problems. In addition to being an excellent programmer, he demonstrates strong leadership, fostering teamwork and guiding his colleagues toward achieving common goals. I am confident that Rodrigo will continue to excel in his professional career, making significant contributions to any organization he joins.',
    },
    
  ];

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="pt-20 lg:pt-32 pb-16">
      <div className="px-4 mx-auto lg:px-8 xl:max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
            Reviews
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            What people say about me
          </p>
        </div>

        {/* Review Card */}
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-700/40">
            
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-yellow-400 "
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-zinc-200 text-xl md:text-sm leading-relaxed text-center mb-8 min-h-[100px] flex items-center justify-center">
              "{reviews[activeIndex].text}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center gap-3">
              <img
                src={reviews[activeIndex].image}
                alt={reviews[activeIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-zinc-700"
              />
              <div className="text-center">
                <h4 className="text-white font-semibold">
                  {reviews[activeIndex].name}
                </h4>
                <p className="text-zinc-400 text-sm">
                  {reviews[activeIndex].position}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="p-3 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-8 h-2 bg-[#2196F3]'
                      : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-500'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-3 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl text-zinc-300 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Next review"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}