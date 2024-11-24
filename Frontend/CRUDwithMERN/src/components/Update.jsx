import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from "react-router-dom"
const Update = () => {

    const navigate =useNavigate();
    const [error, setError] = useState("")

    const [name, setName] = useState("");
    const [email, setEamil] = useState("")
    const [age, setAge] = useState(0);


    const { id } = useParams();
    // get single user
    const getSingleUser = async () => {
        const responce = await fetch(`http://localhost:3000/${id}`)
        const result = await responce.json();
        if (!responce.ok) {
            console.log(result.error);
            setError(result.error);
        }
        if (responce.ok) {
            console.log("user :", result);
            setName(result.name)
            setEamil(result.email)
            setAge(result.age)
        }
    }

    useEffect(() => {
        getSingleUser();

    }, [])


    // updating
    const handleEdit = async (e) => {
        e.preventDefault();     //stop the form submitting
        const updatedUser = { name, email, age }
        // const {id} = useParams();
        const responce = await fetch(`http://localhost:3000/${id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedUser),
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
            setError("");
            navigate("/all")

        }

    }

    return (
        <div className="container my-2">

            {error && <div class="alert alert-danger" >{error}</div>}

            <h2 className='text-center'>Edit data</h2>

            <form onSubmit={handleEdit}>

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

                <button type="submit" className="btn btn-primary  ">Update</button>
            </form>
        </div>
    )
}

export default Update