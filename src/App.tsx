import React, {useState} from "react"

import List from "./components/List"
import AddToList from "./components/AddToList";


export interface IState {
    people: {
        name: string,
        age: number,
        imgUrl: string,
        note?: string
    }[]
}

function App() {


    const [people, setPeople] = useState<IState["people"]>([
        {
            name: "Ali Ghodousi",
            imgUrl: "https://picsum.photos/200/300",
            age: 29,
            note: "Hello Worlds"
        }
    ])


    return (
        <div className="container">
            <h1>People Invited to my Party</h1>
            <List people={people}/>
            <AddToList people={people} setPeople={setPeople}/>
        </div>
    )
}

export default App
