import React, { useState } from 'react';
import { deleteStorage } from '../../utilitity/fakeDB';
import './List.css';

const List = ({list}) => {
    const [breakTimes, setBreakTime] = useState([]);


    
    let exercise_time = 0;
    let quantity = 0;
    for (let activity of list) {
        quantity = quantity + activity.quantity;
        exercise_time = exercise_time + activity.time ;
    }


    

    const deleteStorageList = () => {
        deleteStorage();
    }
    
    return (
        <div className='list_container'>
            <div className="user">
                <div className="user_img">
                    <img src="images/barbell_curl.jpg" alt="" />
                </div>
                <div className="user_text">
                    <p>Tahsin Mostafiz</p>
                    <span>Dhaka, Bangladesh</span>
                </div>
            </div>
            <div className="measurement_card list_card">
                <div className="weight">
                    <h2>75<sub>kg</sub> </h2>
                    <p>Weight</p>
                </div>
                <div className="height">
                    <h2>6.5</h2>
                    <p>Height</p>
                </div>
                <div className="age">
                    <h2>27<sub>yrs</sub> </h2>
                    <p>Age</p>
                </div>
            </div>
            <div className="add_break">
                <h3>Add A Break</h3>
                <div className="list_card">
                    <div className="break_time">
                        <p><span onClick={(e) => setBreakTime(e.target.innerText)}>10</span>s </p>
                        <p><span onClick={(e) => setBreakTime(e.target.innerText)}>20</span>s</p>
                        <p><span onClick={(e) => setBreakTime(e.target.innerText)}>30</span>s</p>
                        <p><span onClick={(e) => setBreakTime(e.target.innerText)}>40</span>s</p>
                    </div>
                </div>
            </div>
            <div className="exercise_details">
                <h3>Exercise Details</h3>
                <div className="exercise_time list_card">
                    <p>Exercise time</p>
                    <p>{exercise_time}min</p>
                </div>
                <div className="break_time list_card">
                    <p>Break time</p>
                    <p>{breakTimes} seconds</p>
                    
                </div>
            </div>

            <div className="completed_btn">
                <button onClick={deleteStorageList}>Activity Completed</button>
            </div>
        </div>
    );
};

export default List;