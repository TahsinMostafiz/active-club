import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div>
            <div>
                <div className='react_div'>
                    <h2> 1. How Does React Work?</h2>
                    <div>
                        <h3>Defination</h3>
                        <p>React.js was released by a software engineer working for Facebook - Jordane Walke in 2011. React is a JavaScript library focused on creating declarative user interfaces (UIs) using a component-based concept. It's used for handling the view layer and can be used for web and mobile apps. React's main goal is to be extensive, fast,  declarative, flexible, and simple.</p>
                        <p>React is not a framework, it is specifically a library.  The explanation for this is that React only deals with rendering UIs and reserves many things at the discretion of individual projects. The standard set of tools for creating an application using ReactJS is frequently called the stack.</p>
                    </div>
                    <div>
                        <h3>React Features</h3>
                        <ol>
                            <li><span>JSX</span> - JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.</li>
                            <li><span>Components</span> - React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.</li>
                            <li><span>Unidirectional data flow and Flux</span> - React implements one-way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.</li>
                            <li><span>License</span> - React is licensed under the Facebook Inc. Documentation is licensed under CC BY 4.0.</li>
                        </ol>
                    </div>

                    <div>
                        <h3>React Advantages</h3>
                        <ol>
                            <li>Uses virtual DOM which is a JavaScript object. This will improve apps performance, since JavaScript virtual DOM is faster than the regular DOM.</li>
                            <li>Can be used on client and server side as well as with other frameworks.</li>
                            <li>Component and data patterns improve readability, which helps to maintain larger apps.</li>
                        </ol>
                    </div>

                    <div>
                        <h3>React Limitations</h3>
                        <ol>
                            <li>Covers only the view layer of the app, hence you still need to choose other technologies to get a complete tooling set for development.</li>
                            <li>Uses inline templating and JSX, which might seem awkward to some developers.</li>
                        </ol>
                    </div>

                    <p></p>
                </div>

                <div className='stateProps_div'>
                    <h2>2. What is the difference between state and props?</h2>

                    <div>
                        <h3>State</h3>
                        <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
                    </div>

                    <div>
                        <h3>Props</h3>
                        <p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
                    </div>

                    <div>
                        <h3>Difference between State and Props</h3>
                        <table>
                            <tr>
                                <th>No:</th>
                                <th>State</th>
                                <th>Props</th>    
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>john.doe@example.com</td>    
                                <td>123-45-678</td>
                                <td>212-00-546</td>    
                            </tr>
                        </table>
                    </div>
                </div>

                <div>
                    <h2>useEffect usecase</h2>
                </div>
            </div>
        </div>
    );
};

export default Questions;