import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Students = () => {
    const [data, setData] = useState([])
    const getStudents = () => {
        axios("http://localhost:4444/students")
            .then(({data}) => setData(data))
            .catch(err => alert(err))
    }
    useEffect(() => {
        getStudents()
    }, [])
    console.log(data)
    return (
        <section className={"students"}>
            <div className="container">
                <div className="students__row">
                    {
                        data.map(item => (
                            <div className="students__card">
                                <img src={item.img} alt=""/>
                                <h2 className={"students__card-name"}>
                                    {item.name}
                                </h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Students;