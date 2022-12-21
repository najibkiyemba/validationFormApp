import React from "react";
import './formEntry.css';

const FormEntry = (props) => {

    return (
        <div className="formEntry">
            <input placeholder={props.placeholder}/>
        </div>
    );
};

export default FormEntry;