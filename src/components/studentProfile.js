import React from 'react';

function StudentProfile(props) {
    return (
        <div className="StudentProfile">
            <h2>{props.item.FirstName} {props.item.LastName}</h2>
            <img src={props.item.Image}/>
            <h3> Major: {props.item.Major}</h3>
            <h3> Student Status: {props.item.StudentStatus} </h3>
            <h4> Age: {props.item.Age}</h4>
            <h4> Grade: {props.item.grade} </h4>
            <p> State: {props.item.State} </p>
            <button onClick={() => {props.addToCart(props.item)}}> Add to List </button>
        </div>
    )
}

export default StudentProfile;