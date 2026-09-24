import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);    
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        const callapi = setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then((res) => {
                console.log(res);
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                // console.log(err.message);
                setError(err.message);
                setIsPending(false);
                setBlogs(null);
            });
        }, 1000);

        return () => {
            clearTimeout(callapi);
            console.log("Cleanup");
        };

    }, []);


    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            {/* blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> */}
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        </div>
    );
}
 
export default Home;
