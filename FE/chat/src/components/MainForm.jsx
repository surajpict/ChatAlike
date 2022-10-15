import { useState } from "react"
import { useNavigate } from "react-router-dom"

const MainForm = () => {

    let navigate = useNavigate();

    const [error, setError] = useState("")
    const [data, setData] = useState({ name:"", room:"" })

    const handleChange = e => {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        })
    }

    const validation = () => {
        if(!data.name){ 
            setError("Please enter your name.")
            return false
        }
        if(!data.room){ 
            setError("Please select room.")
            return false
        } 
        setError("")
        return true
    }

    const handleSubmit = e => {
        e.preventDefault()
        const isValid = validation()
        if(isValid){
            navigate(`/chat/${data.room}`, { state: data });
        }
    }

    return (
        <div className="px-2 py-4 shadow text-dark border rounded row h-50 bg-dark">
            <h1 className="text-warning display-1 oswald">ChatAlike</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <h2 className="text-light mb-4">Chat with alike about what you like!!!</h2>
                </div>
                <div className="form-group mb-4 ">
                    <input type="name" className="form-control bg-light" name="name" placeholder="Enter your name" onChange={handleChange} />
                </div>
                <div className="form-group mb-4">
                    <select className="form-select bg-light" name="room" aria-label="Default select example" onChange={handleChange}>
                        <option value="">Select Room</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Music">Music</option>
                        <option value="Poetry">Poetry</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Movies">Movies</option>
                        <option value="Web-Series">Web-series</option>
                        <option value="Sports">Sports</option>
                        <option value="Fitness">Fitness</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-warning w-25 mb-2">Submit</button>
                {error ? <small className="text-danger m-auto">{error}</small> : "" }
            </form>
        </div>
    )
}

export default MainForm