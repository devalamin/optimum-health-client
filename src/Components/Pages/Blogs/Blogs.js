import React from 'react';
import { useSetTitle } from '../../../hooks/useSetTitle';

const Blogs = () => {
    useSetTitle('Blogs');
    return (
        <div>
            <div className='bg-gradient-to-r from-slate-500 to-cyan-700 my-10 p-10'>
                <div className='bg-teal-600 py-2 pl-2 sm:text-2xl font-bold mb-5 '>
                    <h3>Difference between SQL and NoSQL
                    </h3>
                </div>
                <div>
                    <span className='text-xl font-bold'>SQL</span>
                    <p className='text-xl'>
                        Structured Query language (SQL) pronounced as 'S-Q-L' or sometimes as 'See-Quel' is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables.
                        SQL programming can be effectively used to insert, search, update, delete database records.
                    </p>
                    <br />
                    <span className='text-xl font-bold'>NoSQL</span>
                    <br />
                    <p className='text-xl'>
                        NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.
                    </p>


                </div>
            </div>
            <div className='bg-gradient-to-r from-slate-500 to-cyan-700 my-10 p-10'>
                <div className='bg-teal-600 py-2 pl-2 sm:text-2xl font-bold mb-5 '>
                    <h3>What is JWT, and how does it work?
                    </h3>
                </div>
                <div>
                    <span className='text-xl font-bold'>JSON web token</span>
                    <p className='text-xl'>
                        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                    </p>



                </div>
            </div>
            <div className='bg-gradient-to-r from-slate-500 to-cyan-700 my-10 p-10'>
                <div className='bg-teal-600 py-2 pl-2 sm:text-2xl font-bold mb-5 '>
                    <h3>Difference between javascript and node js
                    </h3>
                </div>
                <div>

                    <p className='text-xl'>
                        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                        <br />
                        <span className='text-2xl font-bold mt-2'>Javascript</span> is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game development and mobile app development.
                        <br />
                        <span className='sm:text-2xl font-bold mt-2'>Node.js</span> is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation
                    </p>

                </div>
            </div>
            <div className='bg-gradient-to-r from-slate-500 to-cyan-700 my-10 p-10'>
                <div className='bg-teal-600 py-2 pl-2 sm:text-2xl font-bold mb-5 '>
                    <h3>How does NodeJS handle multiple requests at the same time?
                    </h3>
                </div>
                <div>
                    <p className='text-xl'>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallally using the NodeJS cluster module or worker-threads module.
                    </p>

                </div>
            </div>


        </div>
    );
};

export default Blogs;