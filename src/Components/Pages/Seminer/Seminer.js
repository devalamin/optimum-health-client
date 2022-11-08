import React from 'react';

const Seminer = () => {
    return (
        <div className='sm:my-10 my-2'>
            <div>
                <img className='w-full h-3/4' src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <h1 className='text-center sm:text-3xl font-bold text-cyan-900 my-5'>My Next Seminar On Yoga!</h1>
            </div>
            <div className='text-center my-10'>
                <div className="flex justify-center items-center gap-5">
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span style={{ "--value": 51 }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Seminer;