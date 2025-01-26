import { useEffect, useState } from "react";
import PostItem from "../Components/PostItem"
import { API_URL } from "../utils/consts";

export default function Home() {
    const [posts,setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const deletePost = (id)=>{
        setPosts(prevPosts => 
            prevPosts.filter(p=> p.id !== id)
        );
    }

    //Aller recuperer les donnees du serveur Backend
    useEffect(function(){
        setLoading(true);
        fetch(`${API_URL}/posts`)
            .then(response=>response.json())
            .then(data => {
                setLoading(false);
                setPosts(data);
            })
    },[])


    
    return (
        <>
            <div className="text-2xl">Liste des articles</div>
            {
                loading 
                ? <p className="text-4xl text-green-600 h-screen flex justify-center items-center">Chargent ...</p> 
                : <PostItem 
                    handleDelete={deletePost}
                    posts={posts}/>
            }
        </>
           
    )
}
