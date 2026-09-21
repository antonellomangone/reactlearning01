import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {id:1, title:"My new website", author:"mario", body:"lorem ipsum..."},
        {id:2, title:"Welcome party!", author:"yoshi", body:"lorem ipsum..."},
        {id:3, title:"Web dev top tips", author:"mario", body:"lorem ipsum..."}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/*<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" />*/}
        </div>
    );
}
 
export default Home;
