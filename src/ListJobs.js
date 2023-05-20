import { useState } from "react";
import Checkbox from "./Checkbox";

export default function ListJobs({ id, name, done, onDelete }) {

    const [deleted, setDeleted] = useState(false)
    const [completed, setCompleted] = useState(done)

    const handleCheckboxChange = () => {
        setCompleted(!completed);
    };

    const handleDeleteClick = () => {
        onDelete(id);
        setDeleted(true)
    };

    if (deleted) {
        return null
    }
    return (
        <div className={`job ${completed ? "completed" : ""}`}>
            <Checkbox checkDefault={false} checked={completed} onChange={handleCheckboxChange} />
            <p>{name}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}