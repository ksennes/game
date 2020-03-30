import React from "react";

interface Props {
    name: string,
    hp: number,
    icon: string,
    style: {border: string} | {}
}

const Unit = (props: Props) => {
    return (
        <div className='unit' style={props.style}>
            <img src={props.icon} alt={props.name}/>
            <div className='unit-text'>
                <h3>{props.name}</h3>
                <span>HP - {props.hp}</span>
            </div>
        </div>
    )
};

export default Unit;