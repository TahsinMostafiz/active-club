import React, { useEffect, useState } from 'react';
import { addToDB, getFromLocalStorage } from '../../utilitity/fakeDB';
import Activities from '../Activities/Activities';
import List from '../List/List';
import Questions from '../Questions/Questions';
import './Home.css';

const Home = () => {
    const [gymActivities, setGymActivities] = useState([])
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('blackfit_fitness_club_data.json')
        .then(res => res.json())
        .then(data => setGymActivities(data))
    },[]);


    useEffect(() => {
        const storedList = getFromLocalStorage();
        const saveList = []
        for (const id in storedList) {
            const addedList = gymActivities.find(gymActivity => gymActivity.id === id);
            if (addedList) {
                const quantity = storedList[id];
                addedList.quantity = quantity;
                saveList.push(addedList);
            }
        }
        setList(saveList);
    }, [gymActivities]);

    const handleAddToList = (handleActivity) => {
        
        const newList = [...list, handleActivity];
        setList(newList)
        addToDB(handleActivity.id)
    }

    return (
        <div>
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
                    <footer className="questions">
                        <Questions></Questions>
                    </footer>
                </div>
                <div className="right_container">
                    <List list={list}></List>
                </div>
            </div>
        </div>
    );
};

export default Home;