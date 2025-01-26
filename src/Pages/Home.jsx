import { useContext, useEffect, useState } from "react";
import PostItem from "../Components/PostItem"
import { API_URL } from "../utils/consts";
import { myContext } from "../context/MyContext";

export default function Home() {
    const x = useContext(myContext)
    const [posts,setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const deletePost = (id)=>{
        //Supprimer l'article du State
        setPosts(prevPosts => 
            prevPosts.filter(p=> p.id !== id)
        );
        //Supprimer l'article de la base de donnee
        fetch(`${API_URL}/posts/${id}`,{
            method: 'DELETE'
        })
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
        <p>{x}</p>
            <div className="text-2xl">Liste des articles</div>
            {
                loading 
                ? <p className="text-4xl text-green-600 h-screen flex justify-center items-center">Chargent ...</p> 
                : <PostItem 
                    setPosts={setPosts}
                    handleDelete={deletePost}
                    posts={posts}/>
            }
        </>
           
    )
}
