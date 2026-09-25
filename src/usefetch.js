import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);    
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);    

    useEffect(() => {
        const callapi = setTimeout(() => {
            // fetch('http://localhost:8000/blogs')
            fetch(url)
            .then((res) => {
                console.log(res);
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                // console.log(err.message);
                setError(err.message);
                setIsPending(false);
                setData(null);
            });
        }, 1000);

        return () => {
            clearTimeout(callapi);
            console.log("Cleanup");
        };

    }, [url]);

    return {data, isPending, error};
}

export default useFetch;