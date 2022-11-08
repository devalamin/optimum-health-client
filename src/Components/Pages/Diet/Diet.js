import React from 'react';

const Diet = () => {
    return (
        <div className='my-10'>
            <div className="hero bg-teal-900">
                <div className="hero-content flex flex-col sm:flex-row">
                    <img src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='' className="rounded-lg shadow-2xl h-32 sm:h-full" />
                    <div>
                        <h1 className="sm:text-5xl sm:font-bold text-teal-100">Diet Solution Coming Soon...</h1>
                        <p className="py-6 text-teal-100">When you find the food that's right for you, everything gets easier. Say goodbye to hunger, and welcome a quieter feeling: satisfaction. Many members say their cravings fell away when they stopped dieting and started eating better.
                            Healthy eating habits don't have to be difficult to establish and keep up. You may significantly alter your eating pattern and establish healthy eating habits if you start by implementing little modifications into your everyday routines. Take a look over the tips for maintaining a healthy eating lifestyle.</p>
                        <button className="btn sm:btn-wide bg-gradient-to-r from-cyan-900 to-gray-600 border-0">See Details Here</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Diet;