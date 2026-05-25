"use client"

import React, { useState } from 'react';
import NavbarLightWithShadow from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

function FeatureItem({ text }) {
    return (
        <li className="flex items-center gap-2 text-sm text-gray-700 mb-2">
            <span className="text-violet-600 font-bold text-base">✓</span>
            <span>{text}</span>
        </li>
    );
}

export default function Page() {
    const [selectedPlan, setSelectedPlan] = useState('pro');

    const cardClass = (plan) =>
        `flex flex-col rounded-xl p-8 cursor-pointer bg-white transition-all duration-200 border-2 ${
            selectedPlan === plan
                ? 'border-violet-600 shadow-[0_0_0_3px_rgba(124,58,237,0.15)] text-violet-600'
                : 'border-gray-200 shadow-sm'
        }`;

    const buttonClass = (plan) =>
        `w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 mt-auto ${
            selectedPlan === plan
                ? 'bg-violet-600 text-white hover:bg-violet-700'
                : 'bg-white text-violet-600 border-2 border-violet-600 hover:bg-violet-50'
        }`;

    return (
        <>
            <NavbarLightWithShadow />

            <div className="container mx-auto px-4 py-12 text-black">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-3">Pricing</h1>
                    <p className="text-lg text-gray-500">Choose the plan that best suits your needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Free Plan */}
                    <div className={cardClass('free')} onClick={() => setSelectedPlan('free')}>
                        <h2 className="text-xl font-bold mb-1">Free</h2>
                        <div className="mb-1">
                            <span className="text-4xl font-extrabold">₹0</span>
                            <span className="text-sm text-gray-500 ml-1">/month</span>
                        </div>
                        <p className="text-xs text-gray-400 mb-5">Perfect for getting started</p>
                        <ul className="list-none p-0 mb-6 flex-grow">
                            <FeatureItem text="10 AI emails per day" />
                            <FeatureItem text="Basic tone rewriting" />
                            <FeatureItem text="Email analyzer" />
                            <FeatureItem text="Voice to Email" />
                            <FeatureItem text="Email History" />
                            <FeatureItem text="Gmail Extension" />
                        </ul>
                        <button className={buttonClass('free')}>Get Started Free</button>
                    </div>

                    {/* Pro Plan */}
                    <div className={cardClass('pro')} onClick={() => setSelectedPlan('pro')}>
                        <h2 className="text-xl font-bold mb-1">Pro</h2>
                        <div className="mb-1">
                            <span className="text-4xl font-extrabold">₹599</span>
                            <span className="text-sm text-gray-500 ml-1">/month</span>
                        </div>
                        <p className="text-xs text-gray-400 mb-5">For professionals who want more</p>
                        <ul className="list-none p-0 mb-6 flex-grow">
                            <FeatureItem text="Unlimited emails" />
                            <FeatureItem text="Advanced humanization" />
                            <FeatureItem text="Advance tone options" />
                            <FeatureItem text="Voice to Email" />
                            <FeatureItem text="Premium options" />
                            <FeatureItem text="Slack Extension" />
                            <FeatureItem text="Writing style memory" />
                        </ul>
                        <button className={buttonClass('pro')}>Start Pro Trial</button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className={cardClass('enterprise')} onClick={() => setSelectedPlan('enterprise')}>
                        <h2 className="text-xl font-bold mb-1">Enterprise</h2>
                        <div className="mb-1">
                            <span className="text-4xl font-extrabold">₹1299</span>
                            <span className="text-sm text-gray-500 ml-1">/month</span>
                        </div>
                        <p className="text-xs text-gray-400 mb-5">For teams and organizations</p>
                        <ul className="list-none p-0 mb-6 flex-grow">
                            <FeatureItem text="Everything in Pro" />
                            <FeatureItem text="Team analytics" />
                            <FeatureItem text="Priority support" />
                            <FeatureItem text="Shared templates" />
                            <FeatureItem text="Team tone guidelines" />
                        </ul>
                        <button className={buttonClass('enterprise')}>Contact Sales</button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}