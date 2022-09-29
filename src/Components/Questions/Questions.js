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
                            <tbody>
                            <tr>
                                <th>No:</th>
                                <th>Props</th>
                                <th>State</th>    
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Props are read-only.</td>    
                                <td>State changes can be asynchronous.</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Props are immutable.</td>    
                                <td>State is mutable.</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Props allow you to pass data from one component to other components as an argument.</td>    
                                <td>State holds information about the components.</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Props can be accessed by the child component.</td>    
                                <td>State cannot be accessed by child components.</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>Props are used to communicate between components.</td>    
                                <td>States can be used for rendering dynamic changes with the component.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='useEffect'>
                    <h2>3. useEffect usecase</h2>
                    <p>React Hooks are JavaScript functions added to React version 16.8. React does not allow the side effects inside the main body of the function components, but we can use <code>useEffect()</code> hook to perform the side effects in our components.</p>
                    <ol>
                        <li>Running once on mount: fetch API data</li>
                        <li>Running on state change: validating input field</li>
                        <li>Running on state change: live filtering</li>
                        <li>Running on state change: trigger animation on new array value</li>
                        <li>Running on props change: update paragraph list on fetched API data update</li>
                        <li>Running on props change: updating fetched API data to get BTC updated price</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Questions;