import ListItem from "./ListItem"
import React from "react";

interface IProps {
    people: {
        name: string,
        age: number,
        imgUrl: string,
        note?: string
    }[]
}


const List: React.FC<IProps> = ({ people }) => {
    return (
        <ul >
            {
                people.map((person, index) =>
                    <ListItem person={person} key={index} />
                )
            }
        </ul>
    )
}

export default List
