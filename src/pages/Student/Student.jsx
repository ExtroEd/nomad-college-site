import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Student = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    const getStudent = (id) => {
        axios.get(`http://localhost:4444/students?id=${id}`)
            .then(({ data }) => {
                if (data.length > 0) {
                    setStudent(data[0]);
                } else {
                    setStudent(null);
                }
            })
            .catch((err) => alert(err));
    };

    useEffect(() => {
        getStudent(id);
    }, [id]);

    if (!student) {
        return <div>Loading...</div>;
    }

    return (
        <section className="student">
            <div className="container">
                <p>Name: {student.name}</p>
                {student.contact && student.contact.email && (
                    <p>Email: {student.contact.email}</p>
                )}
            </div>
        </section>
    );
};

export default Student;