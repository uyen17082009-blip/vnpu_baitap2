import "./App.css";
import React from "react";

function SubjectList(props) {
    return (
        <div className="subject-container">
            <h2>Danh sach</h2>
                <ul className="subject-list">
                    {props.subjects.map((subject, index) => (
                        <li className="subject-item" key={index}>
                            {subject}
                        </li>
                    ))}
                </ul>
        </div>
    );
}

export default SubjectList;