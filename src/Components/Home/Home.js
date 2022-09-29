import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import List from '../List/List';
import './Home.css';

const Home = () => {
    const [gymActivities, setGymActivities] = useState([])
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('blackfit_fitness_club_data.json')
        .then(res => res.json())
        .then(data => setGymActivities(data))
    },[]);

    const handleAddToList = (handleActivity) => {
        
        const newList = [...list, handleActivity];
        setList(newList)
    }

    return (
        <div className='home'>
            <div className="left_container">
                <header>
                    <h2>Blackfit Fitness Club</h2>
                </header>
                <main>
                    <h3>Select today's exercise</h3>
                    <div className="activities_div">
                        {
                            gymActivities.map(activity => <Activities key={activity.id} activity={activity} handleAddToList={handleAddToList}></Activities>)
                        }
                    </div>
                </main>
            </div>
            <div className="right_container">
                <List list={list}></List>
            </div>
        </div>
    );
};

export default Home;