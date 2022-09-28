import React from 'react';
import './List.css';

const List = () => {
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
        </div>
    );
};

export default List;