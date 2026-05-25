"use client"

import React from 'react';
import NavbarLightWithShadow from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';


export default function Page() {
  return (
    <div className="font-[Poppins,sans-serif] bg-white text-gray-900">



      <NavbarLightWithShadow />

     
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

  
          <div className="flex flex-col gap-4 flex-1 max-w-xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-500">
              About Email AI
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              Better emails.<br />
              Stronger{' '}
              <span className="text-indigo-500">connections.</span>
            </h1>

            <p className="text-base text-slate-500 leading-relaxed max-w-md">
              Email AI helps you write emails that are clear, thoughtful, and
              human—right inside Gmail.
            </p>
          </div>

       
         

        </div>
     


      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-3">
          The Problem
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-xl mx-auto leading-snug mb-10">
          Why writing emails feels harder than it should?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: '😕', title: 'You worry about the tone.', desc: 'Will it sound rude, cold, or too casual?' },
            { icon: '💬', title: 'You lack the right words.', desc: 'Hard to express your thoughts clearly and professionally.' },
            { icon: '⏱️', title: 'It takes too much time.', desc: 'Hours spent rewriting the same email.' },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-indigo-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center text-xl mb-4">
                {icon}
              </div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">{title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-3">
            See The Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-xl mx-auto leading-snug mb-10">
            AI that understands people, not just words.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center text-left">
      
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <span className="inline-block text-[0.65rem] font-bold tracking-widest uppercase bg-red-100 text-red-600 px-2 py-0.5 rounded mb-4">
                Before
              </span>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {`Hi,\n\nI can't attend the meeting.\n\nThanks.`}
              </p>
            </div>


            <div className="hidden md:flex w-11 h-11 rounded-full bg-indigo-500 items-center justify-center text-white flex-shrink-0 mx-auto">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

      
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <span className="inline-block text-[0.65rem] font-bold tracking-widest uppercase bg-green-100 text-green-600 px-2 py-0.5 rounded mb-4">
                After
              </span>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {`Hi Sarah,\n\nThank you for the invitation.\n\nUnfortunately, I won't be able to attend the meeting due to a prior commitment.\n\nI appreciate your understanding.\n\nBest regards,\nAlex`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}