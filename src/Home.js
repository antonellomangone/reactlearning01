import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    // const [blogs, setBlogs] = useState([
    //     {id:1, title:"My new website", author:"mario", body:"lorem ipsum..."},
    //     {id:2, title:"Welcome party!", author:"yoshi", body:"lorem ipsum..."},
    //     {id:3, title:"Web dev top tips", author:"mario", body:"lorem ipsum..."}
    // ]);

    const [blogs, setBlogs] = useState(null);    

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setBlogs(data);
        })
    }, []);

    return (
        <div className="home">
            { blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> }
        </div>
    );
}
 
export default Home;
