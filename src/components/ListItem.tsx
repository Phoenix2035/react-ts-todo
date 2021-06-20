import React from "react";

interface IProps {
    person: {
        name: string,
        age: number,
        imgUrl: string,
        note?: string
    }
}


const ListItem: React.FC<IProps> = ({person}) => {
    return (
        <li className="List">
            <div className="List-header">
                <img src={person.imgUrl} alt="Person" className="List-img"/>
                <h2>{person.name}</h2>
            </div>
            <p>
                {person.age} years old
            </p>
            <p className="List-note">
                {person.note}
            </p>
        </li>
    )
}

export default ListItem
