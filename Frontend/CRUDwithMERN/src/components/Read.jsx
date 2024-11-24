// import{ React,useState, useEffect} from 'react'

// const Read = () => {

//     const [data, setData] = useState([])
//     const [error,setError] = useState("")


//     // function to fetcht the data
// async function getData(){
//     const responce = await fetch("http://localhost:3000");

//     const result= await responce.json();

//     if(!responce.ok){
//         console.log(result.error);
//         setError(result.error)
//     }

//     if(responce.ok){
//         setData(result);

//     }

// }

// // function to del

// const handleDelete =async (id)=>{
// const responce = await fetch(`http://localhost:3000/${id}`,{
//     method:"DELETE"
// });

// const result = await responce.json();

// if(!responce.ok){
//     console.log(result.error)
//     setError(result.error)
// }

// if(responce.ok){
//     setError("Data Removed sucessfully");
//     setTimeout(()=>{
//         setError("")
//         setData(result);
//     },2000)}
// }

// useEffect(() => {
  
// getData()
 
// }, [])

// console.log(data)

//     return (
//         <>
//             <div className="container my-2">
//             {error && <div class="alert alert-danger" >{error}</div>}
//                 <h2 className='text-center'>All Data</h2>
//                 <div className="row">

//                     {data?.map((e) => (

//                     <div key={e._id} className="col-3">
//                         <div className="card" style={{width: "18rem"}}>
//                             <div className="card-body">
//                                 <h5 className="card-title">{e.name}</h5>
//                                 <h6 className="card-subtitle mb-2 text-muted">{e.email}</h6>
//                                 <h6 className="card-text">{e.age}</h6>
//                                 <a href="#" className="card-link" onClick={()=> handleDelete(e._id)}>Delete</a>
//                                 <a href="#" className="card-link">Update</a>
//                             </div>
//                         </div>
//                     </div>
//                     ))}
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Read


import { React, useState, useEffect } from 'react';
import {Link} from "react-router-dom";


const Read = () => {
    const [data, setData] = useState([]);  // Ensure data is an array initially
    const [error, setError] = useState("");

    // function to fetch the data
    async function getData() {
        const response = await fetch("http://localhost:3000");
        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }

        if (response.ok) {
            setData(result);
        }
    }

    // function to delete data
    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:3000/${id}`, {
            method: "DELETE"
        });

        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }

        if (response.ok) {
            setError("Data Removed successfully");
            setTimeout(() => {
                setError("");
                // Update the data by filtering out the deleted item
                setData((prevData) => prevData.filter((item) => item._id !== id));
                // setData(result);
            }, 1500);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(data);

    return (
        <>
            <div className="container my-2">
                {error && <div className="alert alert-danger">{error}</div>}
                <h2 className="text-center">All Data</h2>
                <div className="row">
                    {Array.isArray(data) && data?.map((e) => (
                        <div key={e._id} className="col-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{e.email}</h6>
                                    <h6 className="card-text">{e.age}</h6>
                                    <a href="#" className="card-link" onClick={() => handleDelete(e._id)}>Delete</a>
                                    <Link to={`/${e._id}`} className="card-link" >Edit</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Read;
