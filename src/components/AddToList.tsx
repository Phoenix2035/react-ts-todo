import React, {useState, useRef} from 'react'
import {IState as Props} from '../App'


interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const [input, setInput] = useState({
        name: "",
        age: "",
        imgUrl: "https://picsum.photos/200/300",
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    const handleAddToList = (): void => {
        input.name && input.age && input.imgUrl && setPeople([
            ...people,
            {
                name: input.name,
                age: +input.age,
                imgUrl: input.imgUrl,
                note: input.note
            }
        ])

        inputRef && inputRef.current && inputRef.current.focus();

        setInput({
            name: "",
            age: "",
            imgUrl: "https://picsum.photos/200/300",
            note: ""
        })
    }


    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                name="name"
                value={input.name}
                ref={inputRef}
                onChange={handleChange}
            />
            <input
                type="number"
                placeholder="Age"
                className="AddToList-input"
                name="age"
                value={input.age}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
                name="imgUrl"
                value={input.imgUrl}
                onChange={handleChange}
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                name="note"
                value={input.note}
                onChange={handleChange}
            />
            <button className="AddToList-btn" onClick={handleAddToList}>
                Add
            </button>
        </div>
    );
};

export default AddToList
