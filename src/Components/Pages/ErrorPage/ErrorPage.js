import React from 'react';
import { useSetTitle } from '../../../hooks/useSetTitle';

const ErrorPage = () => {
    useSetTitle('404-error');
    return (
        <div className='sm:mt-20'>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center font-bold text-4xl">404</div>
                <div className="divider lg:divider-horizontal">Opps...</div>
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center font-bold text-4xl">Nothing Found</div>
            </div>
        </div>
    );
};

export default ErrorPage;