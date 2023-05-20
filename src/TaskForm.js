import { useState } from "react"

export default function TaskForm({ onAdd }) {

    const [textInput, setTextIput] = useState('')
    const [error, setError] = useState("");

    const handleInput = ((e) => {
        const input = e.target.value
        setTextIput(input)
    })

    const handleSubmit = ((e) => {
        e.preventDefault()
        if (textInput === "") {
            setError("ERROR: Please enter a job!"); // Hiển thị thông báo lỗi khi không nhập công việc
        } else if (textInput.length >= 30) {
            setError("ERROR: Job name cannot exceed 30 characters!");
             // Hiển thị thông báo lỗi khi công việc có độ dài vượt quá 30 kí tự
        } else {
            onAdd(textInput);
            setTextIput("");
            setError("");
        }
    })

    return (
        <div>
            {error &&
                <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={textInput}
                    onChange={handleInput}
                    placeholder="Enter your jobs..."></input>
                <button>+</button>
            </form>
        </div>
    )
}