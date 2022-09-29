import React from 'react';
import './Activities.css';

const Activities = (props) => {
   const {handleAddToList, activity} = props
    const {name, img, time, details, for_age, min} = activity;
    return (
        <div>
            <div className='activity_div'>
                <div className="card">
                    <img src={img} alt="" />
                    <div className="card_body">
                        <h3 className="title">{name}</h3>
                        <p className="text">{details ? details.slice(0, 110) : details}</p>
                        <h5>For Age : <span>{for_age}</span></h5>
                        <h5>Time required : <span>{time}{min}</span></h5>
                    </div>
                    <div className="card_footer">
                        <button onClick={() => handleAddToList(activity)}>Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;