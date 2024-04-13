import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Students = () => {
    const [data, setData] = useState([]);
    
    const getStudents = () => {
        axios.get("http://localhost:4444/students")
            .then(({ data }) => setData(data))
            .catch(err => alert(err));
    };

    useEffect(() => {
        getStudents();
    }, []);

    console.log(data);

    return (
        <section className="students">
            <div className="container">
                <div className="students__row">
                    {data.map((item) => (
                        <Link key={item.id} to={`/student/${item.id}`} className="students__card">
                            <img src={item.img} alt={item.name} />
                            <h2 className="students__card-name">{item.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Students;