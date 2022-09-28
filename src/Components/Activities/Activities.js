import React from 'react';

const Activities = (props) => {
    console.log(props.activity.img);
    const {name, img, time, details, for_age} = props.activity
    return (
        <div className='activity_div'>
            <div className="card">
                <img src={img} alt="" />
                <div className="card_body">
                    <h2 className="title">{name}</h2>
                    <p className="text">{details}</p>
                    <h4>For Age : {for_age}</h4>
                    <h5>Time required : {time}</h5>
                </div>
                <div className="card_footer">
                    <button>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Activities;