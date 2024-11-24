import{ React,useState, useEffect} from 'react'

const Read = () => {

    const [data, setData] = useState([])
    const [error,setError] = useState("")


    // function to fetcht the data
async function getData(){
    const responce = await fetch("http://localhost:3000");

    const result= await responce.json();

    if(!responce.ok){
        console.log(result.error);
        setError(result.error)
    }

    if(responce.ok){
        setData(result);

    }

}


useEffect(() => {
  
getData()
 
}, [])

console.log(data)

    return (
        <>
            <div className="container my-2">

                <h2 className='text-center'>All Data</h2>
                <div className="row">

                    {data?.map((e) => (

                    <div key={e._id} className="col-3">
                        <div className="card" style={{width: "18rem;"}}>
                            <div className="card-body">
                                <h5 className="card-title">{e.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{e.email}</h6>
                                <h6 className="card-text">{e.age}</h6>
                                <a href="#" className="card-link">Delete</a>
                                <a href="#" className="card-link">Update</a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Read