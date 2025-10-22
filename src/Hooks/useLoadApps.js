import axios from "axios";
import { useEffect, useState } from "react";


const useLoadApps = () => {
    const [ Apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true)
        axios.get("../AllApps.json") 
        .then(data=>setApps(data.data))
        .catch(err =>setError(err))
        .finally(()=> setLoading(false))
    },[]);

    return{Apps, loading, error}

};

export default useLoadApps;