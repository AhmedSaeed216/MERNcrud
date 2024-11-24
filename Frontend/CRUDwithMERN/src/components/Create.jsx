import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
const Create = () => {

    const [error, setError] = useState("")

    const [name, setName] = useState("");
    const [email, setEamil] = useState("")
    const [age, setAge] = useState(0);

    const navigate =useNavigate();
    console.log(name, email, age);

    // handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const addUser = { name, email, age }

        const responce = await fetch("http://localhost:3000", {
            method: "POST",
            body: JSON.stringify(addUser),
            headers: {
                "Content-Type": "application/json",
            }
        })

        const result = await responce.json();

        if (!responce.ok) {
            console.log(result.error);
            setError(result.error);
        }

        if (responce.ok) {
            console.log(result);
            setAge(0);
            setName("");
            setEamil("");
            setError("");
            navigate("/all")

        }

    }


    return (
        <div className="container my-2">
            
            {error && <div className="alert alert-danger" >{error}</div>}

            <h2 className='text-center'>Enter data</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label  text-center">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label className="form-label ">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEamil(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary  ">Submit</button>
            </form>
        </div>
    )
}

export default Create