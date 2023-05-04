import React, { useRef } from 'react';
import { Button } from 'react-daisyui';


const Blog = () => {
    const contentRef = useRef(null);

    const downloadPDF = () => {
        const element = contentRef.current;
        const opt = {
          margin:       1,
          filename:     'myPDF.pdf',
          image:        { type: 'jpg', quality: 0.98 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // html2pdf().set(opt).from(element).save();
      };

    return (
       <div>
        <h1 className='text-6xl font-bold text-center text-amber-500'>Some Question Answer section</h1>

        <Button className='ms-8' onClick={downloadPDF}>Download Pdf</Button>
       <div >
       <div className='md:grid grid-cols-2 gap-10 mb-10'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold"> Question: Tell us the differences between uncontrolled and controlled components.

                        </h1>
                        <p className="py-6"> Ans: In the context of software development, components are reusable building blocks of software systems. These components can be categorized into two types: uncontrolled and controlled components.

                            Uncontrolled components are those that manage their own state internally, without any external control. These components do not receive any explicit input from a parent component or external source, and they are responsible for managing their own data and behavior. Examples of uncontrolled components include simple input fields, like a text box or a dropdown menu.

                            On the other hand, controlled components are those that receive their state and behavior as explicit inputs from a parent component or external source. These components are typically more complex, and they rely on props or other data passed to them by a parent component to manage their state and behavior. Controlled components are often used for complex UI elements, like form elements or interactive widgets.

                            The key difference between these two types of components is how they manage their state. Uncontrolled components manage their own state internally, while controlled components receive their state from a parent component or external source. Controlled components provide more explicit control over their behavior, making them more suitable for complex UI elements. However, uncontrolled components can be simpler to implement and are often used for more basic UI elements.</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Question: How to validate React props using PropTypes?

                        </h1>
                        <p className="py-6">Ans:
                            1.Import PropTypes module:
                            First, you need to import the PropTypes module into your React component by adding the following line at the top of your file:
                            import PropTypes from 'prop-types';
                            2.Define PropTypes for your component:
                            Next, you need to define the PropTypes for your component by adding a propTypes object as a static property of your component. The propTypes object should contain a key-value pair for each prop that your component expects to receive. The key should be the name of the prop, and the value should be a PropTypes validator function.
                            3.Use PropTypes to validate props:
                            Once you've defined the PropTypes for your component, you can use them to validate the props that are passed to your component. PropTypes will generate console warnings if the props are not of the expected type or structure.

                        </p>

                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Question: Tell us the difference between nodejs and express js.
                        </h1>
                        <p className="py-6"> Ans: Node.js and Express.js are two popular technologies used for developing web applications, particularly on the server-side. Here's a brief overview of the difference between Node.js and Express.js:

                            Node.js:
                            Node.js is a JavaScript runtime built on top of the V8 engine, which is the same engine that powers Google Chrome. Node.js allows developers to run JavaScript code outside of a web browser, making it possible to create server-side applications with JavaScript. Node.js provides an event-driven, non-blocking I/O model that makes it well-suited for building scalable and high-performance applications. Node.js provides a range of built-in modules that make it easy to perform tasks like reading and writing files, networking, and working with streams.

                            Express.js:
                            Express.js is a popular web framework built on top of Node.js. It provides a set of tools and features for building web applications and APIs. Express.js makes it easy to create web servers, define routes, and handle HTTP requests and responses. It also provides middleware, which are functions that can be used to modify incoming requests or outgoing responses. Middleware functions can be used for tasks like authentication, logging, and error handling. Express.js is lightweight and flexible, making it a popular choice for building RESTful APIs and web applications.

                            In summary, Node.js is a JavaScript runtime that provides a platform for running JavaScript code on the server-side, while Express.js is a web framework built on top of Node.js that provides a set of tools and features for building web applications and APIs. Express.js is one of many web frameworks available for use with Node.js, and it is particularly well-suited for building RESTful APIs and web applications due to its lightweight and flexible nature.
                        </p>

                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Question: What is a custom hook, and why will you create a custom hook?
                        </h1>
                        <p className="py-6">In React, a custom hook is a function that allows you to reuse stateful logic between components. Custom hooks are a way to extract reusable logic from a component and share it between components in a more concise and readable way than traditional higher-order components or render props.

                            Custom hooks follow a naming convention that begins with the prefix "use", which lets React know that it's a hook and can be used with the use keyword. A custom hook can call other hooks and use stateful logic just like any other React component.

                            Here are some reasons why you might want to create a custom hook:

                            Reusability: If you have stateful logic that needs to be reused across multiple components, creating a custom hook is a great way to keep your code DRY (Don't Repeat Yourself). By extracting this logic into a custom hook, you can reuse it across different components without duplicating code.

                            Abstraction: Custom hooks can be used to abstract away complex or repetitive logic, making your components more readable and easier to maintain. By creating a custom hook for a specific use case, you can encapsulate that logic in a single place and make it easier to reason about.

                            Code organization: By separating logic into custom hooks, you can keep your component code cleaner and more organized. This makes it easier to navigate and maintain larger codebases over time.
                        </p>

                    </div>
                </div>
            </div>
        </div>
       </div>
       </div>
    );
};

export default Blog;