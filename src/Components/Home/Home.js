import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import List from '../List/List';
import './Home.css';

const Home = () => {
    const [gymActivities, setGymActivities] = useState([])

    useEffect(() => {
        fetch('blackfit_fitness_club_data.json')
        .then(res => res.json())
        .then(data => setGymActivities(data))
    },[]);
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
                            gymActivities.map(activity => <Activities key={activity.id} activity={activity}></Activities>)
                        }
                    </div>
                </main>
            </div>
            <div className="right_container">
                <List></List>
            </div>
        </div>
    );
};

export default Home;