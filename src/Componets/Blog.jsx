import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarDays, faComment, faHeart, faLink } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import HeaderImage from './HeaderImage';
import { useLocation } from 'react-router-dom';
const BlogItem = ({ image, date, likes, comments, author, title, description }) => {
 
  
    return (
        <motion.div
            className="bg-white relative  rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="relative group border-1 ">
                <img className="w-full h-64 object-cover" src={image} alt={title} />
                <div className="absolute  inset-0 bg-secndoary opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                    <a href="#" className="text-white"><FontAwesomeIcon fontSize={30} style={{ color: '#FFFFFF' }} icon={faLink} /></a>
                </div>
            </div>
            
            <div className="flex absolute top-56 w-full justify-between px-2 py-2 border-2  border-white">
                <small className="border-r-2 p-0  md:pr-3  border-white text-white"><FontAwesomeIcon  fontSize={15} style={{ color: '#13357B' }} icon={faCalendarDays} className="mr-2" />{date}</small>
                <a href="#" className="border-r-2 p-0 md:pr-3  border-white text-white"><FontAwesomeIcon fontSize={15} style={{ color: '#13357B' }} icon={faHeart} className="mr-2" />{likes}</a>
                <a href="#" className="p-0 md:pr-3   border-white  text-white"><FontAwesomeIcon fontSize={15} style={{ color: '#13357B' }} icon={faComment} className="mr-2" />{comments}</a>
            </div>

            <div className="p-4">
                <p className="text-gray-600 mb-3">Posted By: {author}</p>
                <a href="#" className="text-xl font-semibold hover:text-primary">{title}</a>
                <p className="text-gray-500 my-3">{description}</p>
                <Button 
  sx={{ 
    backgroundColor: '#13357B', // Example background color
    color: 'white', // Optional: set text color
    '&:hover': {
      backgroundColor: '#13557B', // Optional: hover effect
    },
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'none',
    fontFamily: 'sans-serif',
    padding: '10px',   
    marginTop: '16px',   
    borderRadius: '30px',
    // width: '150px',
  }} 
  variant="contained"
>
  Read More
         </Button>
            </div>
        </motion.div>
    );
};

const Blog = () => {
    const location = useLocation()
    const isActive = (path) => {
      return location.pathname === path;
    };
    const blogs = [
        {
            image: 'img/blog-1.jpg',
            date: '28 Jan 2050',
            likes: '1.7K',
            comments: '1K',
            author: 'Royal Hamblin',
            title: 'Adventures Trip',
            description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos',
        },
        {
            image: 'img/blog-2.jpg',
            date: '28 Jan 2050',
            likes: '1.7K',
            comments: '1K',
            author: 'Royal Hamblin',
            title: 'Adventures Trip',
            description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos',
        },
        {
            image: 'img/blog-3.jpg',
            date: '28 Jan 2050',
            likes: '1.7K',
            comments: '1K',
            author: 'Royal Hamblin',
            title: 'Adventures Trip',
            description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos',
        },
    ];

    return (
        <>
        {
    isActive("/") ? "" : <HeaderImage/>
  }
        <div className="container mx-auto py-16">
            <div className="text-center mb-8">
            <div className='flex justify-center items-center gap-4'> 
            <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>    
                <h5 className="text-primary text-2xl font-semibold">Our Blog</h5>
                <div className="border-t-4 rounded-full border-primary w-10 md:w-12 lg:w-16"></div>    
                </div>
                <h1 className="text-3xl font-bold mb-4">Popular Travel Blogs</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <BlogItem
                        key={index}
                        image={blog.image}
                        date={blog.date}
                        likes={blog.likes}
                        comments={blog.comments}
                        author={blog.author}
                        title={blog.title}
                        description={blog.description}
                    />
                ))}
            </div>
        </div>
                        </>
    );
};

export default Blog;
